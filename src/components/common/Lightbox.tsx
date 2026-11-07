import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxImage = { src: string; alt: string; caption?: string };

type Props = {
  images: LightboxImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const MIN = 1;
const MAX = 5;
const STEP = 1.5;
const SWIPE = 60;

type Point = { x: number; y: number };

/**
 * Full-screen image viewer. Shows the whole, uncropped image.
 * Zoom: buttons, + / - keys, mouse wheel, double-click/tap, pinch. Drag to pan when zoomed.
 * Slide: arrows, ← / → keys, swipe, thumbnails.
 */
function LightboxViewer({ images, index, onClose, onIndexChange }: Props) {
  const open = index !== null && images.length > 0;
  const current = open ? images[index] : null;
  const many = images.length > 1;

  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dir, setDir] = useState(0);

  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const pointers = useRef(new Map<number, Point>());
  const gesture = useRef<{ start: Point; offset: Point; pinchDist: number; pinchScale: number; moved: boolean } | null>(
    null,
  );
  const lastTap = useRef(0);
  const scaleRef = useRef(1);

  const reset = useCallback(() => {
    scaleRef.current = 1;
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const go = useCallback(
    (delta: number) => {
      if (index === null || !many) return;
      setDir(delta);
      reset();
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, many, images.length, onIndexChange, reset],
  );

  /** Keep the zoomed image covering the stage — no panning into empty space. */
  const clamp = useCallback((p: Point, s: number): Point => {
    const img = imgRef.current;
    const stage = stageRef.current;
    if (!img || !stage) return p;
    const maxX = Math.max(0, (img.offsetWidth * s - stage.clientWidth) / 2);
    const maxY = Math.max(0, (img.offsetHeight * s - stage.clientHeight) / 2);
    return { x: Math.min(maxX, Math.max(-maxX, p.x)), y: Math.min(maxY, Math.max(-maxY, p.y)) };
  }, []);

  /** Zoom to `next`, keeping the screen point `at` (stage-centre relative) fixed. */
  const zoomTo = useCallback(
    (next: number, at: Point = { x: 0, y: 0 }) => {
      const prev = scaleRef.current;
      const s = Math.min(MAX, Math.max(MIN, next));
      scaleRef.current = s;
      setScale(s);
      setOffset((o) =>
        s === 1 ? { x: 0, y: 0 } : clamp({ x: at.x - (at.x - o.x) * (s / prev), y: at.y - (at.y - o.y) * (s / prev) }, s),
      );
    },
    [clamp],
  );

  const toStage = (clientX: number, clientY: number): Point => {
    const r = stageRef.current!.getBoundingClientRect();
    return { x: clientX - (r.left + r.width / 2), y: clientY - (r.top + r.height / 2) };
  };

  // reset zoom whenever the viewer opens or the image changes
  useEffect(reset, [index, reset]);

  // keyboard + body scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "+" || e.key === "=") zoomTo(scale * STEP);
      else if (e.key === "-") zoomTo(scale / STEP);
      else if (e.key === "0") reset();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, go, zoomTo, reset, scale]);

  // wheel zoom (non-passive so the page doesn't scroll)
  useEffect(() => {
    const stage = stageRef.current;
    if (!open || !stage) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomTo(scaleRef.current * (e.deltaY < 0 ? 1.2 : 1 / 1.2), toStage(e.clientX, e.clientY));
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [open, zoomTo]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = [...pointers.current.values()];
    gesture.current = {
      start: { x: e.clientX, y: e.clientY },
      offset,
      pinchDist: pts.length === 2 ? Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) : 0,
      pinchScale: scale,
      moved: false,
    };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const g = gesture.current;
    if (!g || !pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = [...pointers.current.values()];

    if (pts.length === 2 && g.pinchDist) {
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const mid = toStage((pts[0].x + pts[1].x) / 2, (pts[0].y + pts[1].y) / 2);
      g.moved = true;
      zoomTo(g.pinchScale * (dist / g.pinchDist), mid);
      return;
    }

    const dx = e.clientX - g.start.x;
    const dy = e.clientY - g.start.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) g.moved = true;
    if (scale > 1) setOffset(clamp({ x: g.offset.x + dx, y: g.offset.y + dy }, scale));
    else setOffset({ x: dx, y: 0 }); // swipe preview
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const g = gesture.current;
    pointers.current.delete(e.pointerId);
    if (pointers.current.size > 0) {
      // one finger lifted mid-pinch: continue as a pan from here
      const [p] = [...pointers.current.values()];
      if (g) gesture.current = { ...g, start: p, offset, pinchDist: 0, pinchScale: scale };
      return;
    }
    setDragging(false);
    gesture.current = null;
    if (!g) return;

    if (scale === 1) {
      const dx = e.clientX - g.start.x;
      setOffset({ x: 0, y: 0 });
      if (g.moved && Math.abs(dx) > SWIPE) return go(dx < 0 ? 1 : -1);
    }

    // double-click / double-tap toggles zoom at that point
    if (!g.moved) {
      const now = Date.now();
      if (now - lastTap.current < 300) {
        lastTap.current = 0;
        if (scale > 1) reset();
        else zoomTo(2.5, toStage(e.clientX, e.clientY));
      } else lastTap.current = now;
    }
  };

  const iconBtn =
    "grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10";

  // No document during the static pre-render; the lightbox starts closed anyway.
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[70] flex flex-col bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* top bar */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 text-white sm:px-6">
            <p className="min-w-0 truncate text-sm">
              {many && <span className="mr-3 tabular-nums text-white/50">{index! + 1} / {images.length}</span>}
              <span className="font-medium">{current.caption ?? current.alt}</span>
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <button type="button" className={iconBtn} onClick={() => zoomTo(scale / STEP)} disabled={scale <= MIN} aria-label="Zoom out">
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="hidden w-12 text-center text-xs tabular-nums text-white/60 sm:block">{Math.round(scale * 100)}%</span>
              <button type="button" className={iconBtn} onClick={() => zoomTo(scale * STEP)} disabled={scale >= MAX} aria-label="Zoom in">
                <ZoomIn className="h-4 w-4" />
              </button>
              <button type="button" className={`${iconBtn} hidden sm:grid`} onClick={reset} disabled={scale === 1} aria-label="Reset zoom">
                <RotateCcw className="h-4 w-4" />
              </button>
              <button type="button" className={`${iconBtn} ml-2`} onClick={onClose} aria-label="Close viewer">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* stage */}
          <div
            ref={stageRef}
            className={`relative flex flex-1 touch-none select-none items-center justify-center overflow-hidden ${
              scale > 1 ? (dragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
            }`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={current.src}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 80 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -80 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center px-4 sm:px-20"
              >
                <img
                  ref={imgRef}
                  src={current.src}
                  alt={current.alt}
                  draggable={false}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                    transition: dragging ? "none" : "transform 0.2s ease",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {many && (
              <>
                <button
                  type="button"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => go(-1)}
                  className={`${iconBtn} absolute left-3 hidden sm:grid top-1/2 h-12 w-12 -translate-y-1/2 sm:left-6`}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => go(1)}
                  className={`${iconBtn} absolute right-3 hidden sm:grid top-1/2 h-12 w-12 -translate-y-1/2 sm:right-6`}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* thumbnails */}
          <div className="px-4 pb-4 pt-3 sm:px-6">
            {many && (
              <div className="mx-auto flex max-w-full justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
                {images.map((img, i) => (
                  <button
                    key={img.src + i}
                    type="button"
                    onClick={() => {
                      setDir(i > index! ? 1 : -1);
                      onIndexChange(i);
                    }}
                    className={`h-12 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-opacity ${
                      i === index ? "border-lime opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                    aria-label={`Show ${img.alt}`}
                    aria-current={i === index}
                  >
                    <img src={img.src} alt="" className="h-full w-full object-cover object-left-top" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
            <p className="mt-2 hidden text-center text-[11px] text-white/40 sm:block">
              Scroll or double-click to zoom · drag to pan · ← → to slide · Esc to close
            </p>
            <p className="mt-2 text-center text-[11px] text-white/40 sm:hidden">Pinch or double-tap to zoom · swipe to slide</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/* -- Provider: any <Zoomable> / <Screen> opens the viewer -- */

type Ctx = { open: (el: HTMLElement) => void };
const LightboxContext = createContext<Ctx | null>(null);

export function useLightbox() {
  return useContext(LightboxContext);
}

/**
 * Clicking an image opens every image in the same gallery: the nearest
 * `[data-gallery]` ancestor, else the nearest `<article>`, else the page.
 */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((el: HTMLElement) => {
    const scope: ParentNode = el.closest("[data-gallery]") ?? el.closest("article") ?? document;
    const seen = new Set<string>();
    const list: LightboxImage[] = [];
    scope.querySelectorAll<HTMLElement>("[data-lightbox-src]").forEach((n) => {
      const src = n.dataset.lightboxSrc!;
      if (seen.has(src)) return;
      seen.add(src);
      list.push({ src, alt: n.dataset.lightboxAlt ?? "", caption: n.dataset.lightboxCaption || undefined });
    });
    setImages(list);
    setIndex(Math.max(0, list.findIndex((i) => i.src === el.dataset.lightboxSrc)));
  }, []);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <LightboxViewer images={images} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </LightboxContext.Provider>
  );
}

/** Wraps an image so clicking it opens the full-view viewer. */
export function Zoomable({ src, alt, caption, className, children }: { src: string; alt: string; caption?: string; className?: string; children: ReactNode }) {
  const lightbox = useLightbox();
  if (!lightbox) return <>{children}</>;
  return (
    <button
      type="button"
      onClick={(e) => lightbox.open(e.currentTarget)}
      data-lightbox-src={src}
      data-lightbox-alt={alt}
      data-lightbox-caption={caption}
      aria-label={`View ${alt} full size`}
      className={cn("group/zoom relative block w-full cursor-zoom-in text-left", className)}
    >
      {children}
      <span className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/60 p-1.5 text-[11px] sm:px-2.5 sm:py-1 font-bold text-white transition-opacity lg:opacity-0 lg:group-hover/zoom:opacity-100 lg:group-focus-visible/zoom:opacity-100">
        <Expand size={12} aria-hidden /> <span className="hidden sm:inline">View</span>
      </span>
    </button>
  );
}
