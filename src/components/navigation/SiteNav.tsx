import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Menu, X } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { KapaldoLogo } from "@/components/common/primitives";
import { EASE } from "@/components/common/motion";

function Lockup() {
  if (SITE.embeddedInKapaldo) {
    return (
      <div className="flex items-center gap-2.5">
        {/* Logo goes to the Kapaldo homepage; the pill stays on the developer page. */}
        <a href={SITE.kapaldoUrl} className="flex items-center gap-2.5" aria-label="Kapaldo home">
          <KapaldoLogo className="h-8 w-8 shrink-0" />
          <span className="text-lg font-extrabold text-white">Kapaldo</span>
        </a>
        <Link to="/" className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-bold text-white/90 hover:bg-white/25" aria-label={`${SITE.name}, developer page`}>
          Developer
        </Link>
      </div>
    );
  }
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${SITE.name}, home`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-mid text-[13px] font-black text-white" aria-hidden>
        JB
      </span>
      <span className="text-lg font-extrabold text-white">{SITE.name}</span>
    </Link>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only z-[70] rounded-xl bg-white px-4 py-2 text-sm font-bold text-brand focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 shadow-md">
        <div className="bg-brand">
          <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-4">
            <Lockup />

            <ul className="hidden items-center gap-1 lg:flex">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="rounded-xl px-3 py-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Link to="/#contact" className="hidden rounded-xl bg-orange px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex">
                Contact me
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="-mr-2 flex h-11 w-11 items-center justify-center rounded-xl text-white hover:bg-white/10 lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Kapaldo's black promo strip */}
        <div className="bg-[#111] text-white">
          <div className="container-x flex h-9 items-center justify-between gap-4 text-[12px] font-semibold">
            {SITE.embeddedInKapaldo ? (
              <a href={SITE.kapaldoUrl} className="inline-flex items-center gap-1.5 text-white/80 hover:text-white">
                <ArrowLeft size={14} aria-hidden /> Back to Kapaldo
              </a>
            ) : (
              <span className="text-white/80">{SITE.location}</span>
            )}
            <Link to="/#portfolio" className="hidden items-center gap-1 text-white/80 hover:text-white sm:inline-flex">
              Meet the developer who helped build Kapaldo <ChevronRight size={14} aria-hidden />
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="border-b border-line bg-white shadow-lg lg:hidden"
            >
              <ul className="container-x flex flex-col py-2">
                {NAV.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="flex items-center justify-between border-b border-gray-100 py-4 text-base font-bold text-gray-900">
                      {item.label}
                      <ChevronRight size={18} className="text-gray-400" aria-hidden />
                    </Link>
                  </li>
                ))}
                <li className="py-4">
                  <Link to="/#contact" className="flex h-12 items-center justify-center rounded-2xl bg-orange text-sm font-bold text-white">
                    Contact me
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
