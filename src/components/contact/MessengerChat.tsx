import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { SITE } from "@/data/site";

const SPRING = { type: "spring" as const, stiffness: 380, damping: 30 };

function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 0C5.24 0 0 4.95 0 11.64c0 3.499 1.434 6.522 3.769 8.61.196.175.315.421.323.684l.065 2.135a.961.961 0 0 0 1.347.85l2.383-1.053a.96.96 0 0 1 .641-.047c1.095.301 2.26.462 3.472.462 6.76 0 12-4.95 12-11.64C24 4.95 18.76 0 12 0Zm7.207 8.955-3.525 5.593a1.8 1.8 0 0 1-2.604.48l-2.804-2.102a.72.72 0 0 0-.867.001l-3.786 2.874c-.505.383-1.165-.221-.827-.758l3.525-5.592a1.8 1.8 0 0 1 2.604-.48l2.803 2.101a.72.72 0 0 0 .868-.001l3.786-2.874c.505-.384 1.165.22.827.758Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** Floating chat shortcut: Messenger or WhatsApp. */
export function MessengerChat() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id="messenger-panel"
            role="dialog"
            aria-label="Chat with me"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
            transition={SPRING}
            className="w-[min(320px,calc(100vw-32px))] origin-bottom-right overflow-hidden rounded-2xl border border-line bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <p className="eyebrow flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-mid" aria-hidden /> Chat
              </p>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-1 text-mute hover:bg-brand-soft hover:text-ink">
                <X size={16} aria-hidden />
              </button>
            </div>
            <div className="p-5">
              <p className="text-[16px] font-extrabold">Message me directly</p>
              <p className="mt-1 text-[13px] text-mute">Usually replies within a day.</p>
              <p className="mt-4 rounded-2xl bg-brand-soft px-4 py-3 text-[14px] leading-relaxed text-ink-2">
                Have a product in mind? Send a message on WhatsApp or Messenger and I'll get back to you.
              </p>
              <a
                href={SITE.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex h-11 items-center justify-center gap-2 rounded-2xl bg-brand-deep text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp <ArrowUpRight size={15} aria-hidden />
              </a>
              <a
                href={SITE.links.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex h-11 items-center justify-center gap-2 rounded-2xl border-2 border-brand-line text-sm font-bold text-brand-text transition-colors hover:bg-brand-soft"
              >
                <MessengerIcon className="h-4 w-4" /> Open Messenger <ArrowUpRight size={15} aria-hidden />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with me"}
        aria-expanded={open}
        aria-controls="messenger-panel"
        whileTap={{ scale: 0.94 }}
        initial={reduce ? false : { opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...SPRING, delay: 0.8 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-opacity hover:opacity-90"
      >
        {open ? <X size={20} aria-hidden /> : <MessageCircle size={24} aria-hidden />}
      </motion.button>
    </div>
  );
}
