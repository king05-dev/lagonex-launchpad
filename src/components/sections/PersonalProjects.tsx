import { BookOpenCheck, ClipboardList, Database, FolderTree, Lightbulb, ListChecks, Settings2, Shuffle, type LucideIcon } from "lucide-react";
import { PERSONAL } from "@/data/projects";
import { Chips, SectionHeader, Screen, TextLink } from "@/components/common/primitives";
import { Reveal } from "@/components/common/motion";

const FEATURE_ICONS: LucideIcon[] = [ClipboardList, FolderTree, ListChecks, BookOpenCheck, Lightbulb, Shuffle, Settings2, Database];

export function PersonalProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-14 sm:py-20">
      <div className="container-x">
        <SectionHeader id="projects-title" eyebrow="Personal projects" title="Outside of client work" lede="A product I keep building on my own time." />

        {PERSONAL.map((p) => (
          <Reveal key={p.slug} className="mt-10 overflow-hidden rounded-3xl border border-line bg-white">
            {/* Preview stage in Exam Refresher's own colours */}
            <div className="relative px-5 pb-0 pt-6 sm:px-10 sm:pt-10" style={{ background: p.brand.stage }}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <img src={p.brand.logo.src} alt={p.brand.logo.alt} width={p.brand.logo.width} height={p.brand.logo.height} className="h-9 w-auto sm:h-11" />
                {p.status && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.04em]" style={{ color: p.brand.accent }}>
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" aria-hidden />
                    {p.status}
                  </span>
                )}
              </div>
              <img
                src={p.cover.src}
                alt={p.cover.alt}
                width={1600}
                height={924}
                loading="lazy"
                className="mx-auto mt-4 block w-full max-w-3xl"
              />
            </div>

            <div className="grid gap-8 p-5 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
              <div>
                <p className="eyebrow" style={{ color: p.brand.accent }}>
                  {p.category}
                </p>
                <h3 className="heading mt-2 text-[28px] sm:text-[34px]">{p.name}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-gray-700">{p.summary}</p>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-gray-600">
                  {p.overview.map((o) => (
                    <p key={o}>{o}</p>
                  ))}
                </div>
                <Chips items={p.chips} className="mt-5" color={p.brand.accent} tint={p.brand.tint} />
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                  <TextLink href={`/work/${p.slug}`} color={p.brand.accent}>
                    View project
                  </TextLink>
                  {p.links.map((l) => (
                    <TextLink key={l.href} href={l.href} className="text-gray-600">
                      {l.label}
                    </TextLink>
                  ))}
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-3 self-start" aria-label={`${p.name} features`}>
                {p.features.map((f, i) => {
                  const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                  return (
                    <li key={f.title} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ backgroundColor: p.brand.tint, color: p.brand.accent }}>
                        <Icon size={18} aria-hidden />
                      </span>
                      <p className="mt-3 text-[14px] font-extrabold text-gray-900">{f.title}</p>
                      <p className="mt-1 text-[13px] leading-snug text-gray-600">{f.body}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="grid gap-4 border-t border-line bg-gray-50/50 p-5 sm:grid-cols-2 sm:p-10">
              {p.screens.map((s) => (
                <figure key={s.src}>
                  <Screen src={s.src} alt={s.alt} url={p.links[0]?.label} />
                  <figcaption className="mt-2 text-[12px] font-bold text-gray-500">{s.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
