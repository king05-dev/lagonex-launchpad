import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Layers, Store, type LucideIcon } from "lucide-react";
import { HERO, SITE } from "@/data/site";
import { ActionLink, Badge } from "@/components/common/primitives";
import { EASE } from "@/components/common/motion";

const ICONS: Record<string, LucideIcon> = { layers: Layers, briefcase: Briefcase, store: Store };

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <section aria-labelledby="hero-title" className="pb-12 pt-[124px] sm:pb-16 sm:pt-[140px]">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <motion.div {...rise(0)}>
            <Badge>{HERO.badge}</Badge>
          </motion.div>
          <motion.h1 {...rise(0.05)} id="hero-title" className="heading mt-5 text-[40px] leading-[1.05] sm:text-5xl lg:text-[56px]">
            {SITE.name}
            <span className="mt-1 block text-brand-mid">{SITE.role}</span>
          </motion.h1>
          <motion.p {...rise(0.1)} className="mt-5 max-w-xl text-pretty text-lg font-semibold leading-snug text-gray-800 sm:text-xl">
            {HERO.tagline}
          </motion.p>
          <motion.p {...rise(0.15)} className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-gray-600 sm:text-base">
            {HERO.supporting}
          </motion.p>
          <motion.div {...rise(0.2)} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/#experience" arrow={false}>
              View Experience
            </ActionLink>
            <ActionLink href="/#projects" variant="secondary" arrow={false}>
              View Projects
            </ActionLink>
          </motion.div>

          <motion.ul {...rise(0.25)} className="mt-9 grid grid-cols-3 gap-3 sm:max-w-xl" aria-label="At a glance">
            {HERO.trust.map((t) => {
              const Icon = ICONS[t.icon];
              return (
                <li key={t.title} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-mid ring-1 ring-green-100">
                    <Icon size={20} aria-hidden />
                  </span>
                  <span className="text-[12px] leading-tight sm:text-[13px]">
                    <span className="block font-extrabold text-gray-900">{t.title}</span>
                    <span className="text-gray-500">{t.body}</span>
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md lg:mr-0 lg:max-w-[440px]"
        >
          <div className="relative overflow-hidden rounded-3xl bg-brand shadow-md">
            <img
              src={SITE.portrait.src}
              alt={SITE.portrait.alt}
              width={SITE.portrait.width}
              height={SITE.portrait.height}
              // React 18 only passes the lowercase attribute through
              {...{ fetchpriority: "high" }}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-6 pt-24">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-lime">The developer</p>
              <p className="mt-1 text-2xl font-extrabold leading-tight text-white">Building from {SITE.location.split(",")[0]}.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
