import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion";

/** Kapaldo's mark: green rounded square with a white location pin and store. */
export function KapaldoLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect width="100" height="100" rx="22" fill="#1D6E3E" />
      <path d="M50 14C63.3 14 74 24.7 74 38C74 55.3 62 71 50 88C38 71 26 55.3 26 38C26 24.7 36.7 14 50 14Z" fill="white" />
      <circle cx="50" cy="38" r="15" fill="#1D6E3E" />
      <path d="M50 25L40.5 34H59.5L50 25Z" fill="white" />
      <rect x="41.5" y="34" width="17" height="13" rx="1.5" fill="white" />
      <rect x="46.5" y="40.5" width="7" height="6.5" rx="1" fill="#1D6E3E" />
      <circle cx="44" cy="93" r="2.5" fill="white" opacity="0.55" />
      <circle cx="50" cy="95" r="2.5" fill="white" opacity="0.75" />
      <circle cx="56" cy="93" r="2.5" fill="white" opacity="0.55" />
    </svg>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

/** White pill badge with an emoji, as used on the Kapaldo homepage. */
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[11px] font-bold text-gray-600", className)}>
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  id,
  className,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  id?: string;
  className?: string;
  action?: ReactNode;
}) {
  return (
    <Reveal className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id} className="heading mt-2 text-balance text-[28px] sm:text-[36px]">
          {title}
        </h2>
        {lede && <p className="mt-3 text-pretty text-[16px] leading-relaxed text-gray-600">{lede}</p>}
      </div>
      {action}
    </Reveal>
  );
}

type Variant = "primary" | "secondary" | "orange" | "white" | "outline-white";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-brand-deep text-white hover:opacity-90",
  secondary: "border-2 border-brand-line text-brand-text hover:bg-brand-soft",
  orange: "bg-orange text-white hover:opacity-90",
  white: "bg-white text-brand-deep hover:bg-brand-soft",
  "outline-white": "border-2 border-white/40 text-white hover:border-white hover:bg-white/10",
};

const BASE =
  "group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-6 py-3 text-sm font-bold transition-[opacity,background-color,border-color,transform] duration-200 active:scale-[0.98]";

interface ActionProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: "right" | "external" | false;
}

function Arrow({ kind }: { kind: ActionProps["arrow"] }) {
  if (!kind) return null;
  const Icon = kind === "external" ? ArrowUpRight : ArrowRight;
  return <Icon size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />;
}

/** Button-styled link. Internal paths use the router; others are plain anchors. */
export function ActionLink({ href, children, variant = "primary", className, arrow = "right", ...rest }: ActionProps & { href: string; "aria-label"?: string }) {
  const cls = cn(BASE, VARIANTS[variant], className);
  const external = /^(https?:|mailto:)/.test(href);
  if (!external) {
    return (
      <Link to={href} className={cls} {...rest}>
        {children}
        <Arrow kind={arrow} />
      </Link>
    );
  }
  const newTab = href.startsWith("http");
  return (
    <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
      <Arrow kind={arrow} />
    </a>
  );
}

/** Text link with an arrow, e.g. "View project →". */
export function TextLink({ href, children, className, color }: { href: string; children: ReactNode; className?: string; color?: string }) {
  const external = /^https?:/.test(href);
  const cls = cn("group inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-text", className);
  const inner = (
    <>
      {children}
      {external ? (
        <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      ) : (
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
      )}
    </>
  );
  const style = color ? { color } : undefined;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
      {inner}
    </a>
  ) : (
    <Link to={href} className={cls} style={style}>
      {inner}
    </Link>
  );
}

/** Outline category pills, like Kapaldo's filters. */
export function Chips({ items, className, color, tint }: { items: readonly string[]; className?: string; color?: string; tint?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[12px] font-bold text-gray-700"
          style={color ? { color, backgroundColor: tint, borderColor: "transparent" } : undefined}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Screenshot in a light browser frame. */
export function Screen({ src, alt, className, eager = false, url }: { src: string; alt: string; className?: string; eager?: boolean; url?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl shadow-black/10", className)}>
      <div className="flex h-7 items-center gap-1.5 border-b border-black/5 bg-gray-50 px-3" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        {url && <span className="ml-2 truncate text-[10px] font-semibold text-gray-400">{url}</span>}
      </div>
      <img src={src} alt={alt} width={1440} height={900} loading={eager ? "eager" : "lazy"} decoding="async" className="block aspect-[16/10] w-full object-cover object-top" />
    </figure>
  );
}
