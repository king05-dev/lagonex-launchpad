import { ArrowUpRight, Lock } from "lucide-react";
import { PORTFOLIO, type Project } from "@/data/projects";
import { RESUME } from "@/data/resume";
import { Chips, Eyebrow, SectionHeader, Screen, TextLink } from "@/components/common/primitives";
import { Reveal } from "@/components/common/motion";
import { ProjectLogo } from "@/components/projects/ProjectLogo";
import { Workflow } from "@/components/case-studies/Workflow";

export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="border-t border-line bg-white py-14 sm:py-20">
      <div className="container-x">
        <SectionHeader id="portfolio-title" eyebrow="Portfolio" title="Products & systems I've built." />

        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-14">
          {PORTFOLIO.map((p) => (
            <PortfolioEntry key={p.slug} project={p} />
          ))}
        </div>

        <ClientProjects />
      </div>
    </section>
  );
}

function PortfolioEntry({ project: p }: { project: Project }) {
  const side = p.screens.slice(0, 2);
  const rest = p.screens.slice(2);
  const dark = p.brand.stageText === "#FFFFFF";

  return (
    <Reveal>
      <article aria-labelledby={`${p.slug}-title`} className="overflow-hidden rounded-3xl border border-line bg-white">
        {/* Title row */}
        <header className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div className="flex items-start gap-4 sm:gap-6">
            <span className="text-[44px] font-black leading-none sm:text-[64px]" style={{ color: p.brand.accent }} aria-hidden>
              {p.index}
            </span>
            <div>
              <p className="eyebrow" style={{ color: p.brand.accent }}>
                {p.subtitle}
              </p>
              <h3 id={`${p.slug}-title`} className="heading mt-1 text-[32px] uppercase sm:text-[48px]">
                {p.name}
              </h3>
            </div>
          </div>
          <Chips items={p.chips} color={p.brand.accent} tint={p.brand.tint} className="sm:justify-end" />
        </header>

        {/* Preview stage in the product's own branding */}
        <div className="relative p-4 sm:p-8" style={{ background: p.brand.stage, color: p.brand.stageText }}>
          <ProjectLogo project={p} className="mb-4 sm:mb-6" />
          <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
            <Screen src={p.cover.src} alt={p.cover.alt} url={p.links[0]?.label} />
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {side.map((s) => (
                <Screen key={s.src} src={s.src} alt={s.alt} />
              ))}
            </div>
          </div>
        </div>

        {/* Lead-to-sales workflow, for products with more than one part */}
        {p.workflow && p.workflowLanes && (
          <div className="px-4 pb-4 sm:px-8 sm:pb-8" style={{ background: p.brand.stage, color: p.brand.stageText }}>
            <p className="mb-3 text-[13px] font-bold opacity-75">From first visit to closed deal</p>
            <Workflow steps={p.workflow} lanes={p.workflowLanes} accent={p.brand.accent} dark={dark} />
            {p.note && (
              <p className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold opacity-75">
                <Lock size={12} aria-hidden /> {p.note}
              </p>
            )}
          </div>
        )}

        {/* Story */}
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <div>
            <p className="text-lg font-extrabold leading-snug text-gray-900 sm:text-xl">{p.summary}</p>
            {p.framing && <p className="mt-2 text-[15px] font-bold text-brand-mid">{p.framing}</p>}
            <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-gray-600">
              {p.overview.map((o) => (
                <p key={o}>{o}</p>
              ))}
            </div>
            {p.stack.length > 0 && (
              <p className="mt-4 text-[13px] text-gray-500">
                <span className="font-bold text-gray-700">Built with</span> {p.stack.join(" · ")}
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <TextLink href={`/work/${p.slug}`}>View project</TextLink>
              {p.links.map((l) => (
                <TextLink key={l.href} href={l.href} className="text-gray-600">
                  {l.label}
                </TextLink>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow className="text-gray-500">What it covers</Eyebrow>
            <ul className="mt-3 grid gap-x-6 sm:grid-cols-2">
              {p.features.map((f, i) => (
                <li key={f.title} className="flex gap-3 border-b border-gray-100 py-3">
                  <span className="w-6 shrink-0 text-[12px] font-black" style={{ color: p.brand.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[14px] font-extrabold text-gray-900">{f.title}</span>
                    {f.body && <span className="mt-0.5 block text-[13px] leading-snug text-gray-600">{f.body}</span>}
                  </span>
                </li>
              ))}
            </ul>
            {p.workflow && !p.workflowLanes && (
              <div className="mt-6">
                <Eyebrow className="text-gray-500">How it works</Eyebrow>
                <ol className="mt-3 flex flex-wrap gap-2">
                  {p.workflow.map((w, i) => (
                    <li key={w} className="rounded-full px-3 py-1.5 text-[12px] font-bold" style={{ backgroundColor: p.brand.tint, color: "#01203C" }}>
                      <span style={{ color: p.brand.accent }}>{i + 1}.</span> {w}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* More real screens */}
        {rest.length > 0 && (
          <div className="border-t border-line bg-gray-50/60 py-5 sm:py-6">
            <ul className="no-scrollbar flex snap-x gap-4 overflow-x-auto px-5 sm:px-8" aria-label={`More ${p.name} screens`}>
              {rest.map((s) => (
                <li key={s.src} className="w-[240px] shrink-0 snap-start sm:w-[280px]">
                  <Screen src={s.src} alt={s.alt} className="shadow-md" />
                  <p className="mt-2 text-[12px] font-bold text-gray-600">{s.caption}</p>
                </li>
              ))}
            </ul>
            {p.note && !p.workflowLanes && (
              <p className="mt-4 inline-flex items-center gap-1.5 px-5 text-[12px] font-semibold text-gray-500 sm:px-8">
                <Lock size={12} aria-hidden /> {p.note}
              </p>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

function ClientProjects() {
  return (
    <div className="mt-14 sm:mt-16">
      <Reveal>
        <Eyebrow>Client projects</Eyebrow>
        <h3 className="heading mt-2 text-[22px] sm:text-[26px]">Selected client work</h3>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESUME.clientProjects.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.04} className="h-full">
            <article className="card flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img src={c.image} alt={`${c.name} screenshot`} width={1600} height={900} loading="lazy" className="h-full w-full object-cover object-top" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="eyebrow">{c.status}</p>
                <p className="mt-1 text-[15px] font-extrabold text-gray-900">{c.name}</p>
                <p className="mt-1 flex-1 text-[13px] leading-snug text-gray-600">{c.summary}</p>
                <p className="mt-3 text-[11px] font-bold text-gray-500">{c.stack.join(" · ")}</p>
                {c.href && (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-[13px] font-extrabold text-brand-text hover:underline">
                    {c.site} <ArrowUpRight size={13} aria-hidden />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
