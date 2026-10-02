import { useEffect, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { getNextProject, getProject, type Project } from "@/data/projects";
import { SITE } from "@/data/site";
import { PageShell } from "@/components/common/PageShell";
import { ActionLink, Chips, Eyebrow, Screen } from "@/components/common/primitives";
import { EASE, Reveal } from "@/components/common/motion";
import { ProjectLogo } from "@/components/projects/ProjectLogo";
import { Workflow } from "@/components/case-studies/Workflow";
import NotFound from "./NotFound";

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  const el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (el) el.content = content;
}

function useProjectMeta(project: Project | undefined) {
  useEffect(() => {
    if (!project) return;
    const title = `${project.name} — ${project.category} | ${SITE.name}`;
    const desc = `${project.name}: ${project.summary}`;
    const prev = { title: document.title, desc: document.head.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? "" };
    document.title = title;
    setMeta("description", desc);
    setMeta("og:title", title, "property");
    setMeta("og:description", desc, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", desc);
    return () => {
      document.title = prev.title;
      setMeta("description", prev.desc);
    };
  }, [project]);
}

function CaseHero({ project: p }: { project: Project }) {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
  });
  const back = p.kind === "personal" ? { href: "/#projects", label: "Personal projects" } : { href: "/#portfolio", label: "Portfolio" };
  const composite = p.cover.src.includes("mobile-and-mac");

  return (
    <header>
      {/* Kapaldo-style section band */}
      <div className="border-b border-line bg-sunken pb-10 pt-[124px] sm:pb-12 sm:pt-[140px]">
        <div className="container-x">
          <motion.div {...rise(0)}>
            <Link to={back.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-text hover:underline">
              <ArrowLeft size={15} aria-hidden /> {back.label}
            </Link>
          </motion.div>
          <motion.p {...rise(0.05)} className="eyebrow mt-6" style={{ color: p.brand.accent }}>
            {p.category}
          </motion.p>
          <motion.h1 {...rise(0.1)} className="heading mt-2 text-[40px] sm:text-[56px]">
            {p.name}
          </motion.h1>
          <motion.p {...rise(0.15)} className="mt-3 max-w-2xl text-pretty text-lg font-semibold leading-snug text-gray-700 sm:text-xl">
            {p.summary}
          </motion.p>
          <motion.div {...rise(0.2)} className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Chips items={p.chips} color={p.brand.accent} tint="#FFFFFF" />
            <div className="flex flex-wrap gap-3">
              {p.links.map((l, i) => (
                <ActionLink key={l.href} href={l.href} variant={i === 0 ? "primary" : "secondary"} arrow="external">
                  Visit {l.label}
                </ActionLink>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-x pt-8 sm:pt-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="overflow-hidden rounded-3xl p-4 sm:p-10"
          style={{ background: p.brand.stage, color: p.brand.stageText }}
        >
          <ProjectLogo project={p} className="mb-5" />
          {composite ? (
            <img src={p.cover.src} alt={p.cover.alt} width={1600} height={924} className="mx-auto block w-full max-w-4xl" />
          ) : (
            <div className="mx-auto max-w-4xl">
              <Screen src={p.cover.src} alt={p.cover.alt} url={p.links[0]?.label} eager />
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
}

function Block({ eyebrow, title, children }: { eyebrow: string; title?: string; children: ReactNode }) {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-x">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          {title && <h2 className="heading mt-2 text-[26px] sm:text-[32px]">{title}</h2>}
        </Reveal>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

const CaseStudyPage = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  useProjectMeta(project);

  if (!project) return <NotFound />;

  const p = project;
  const next = getNextProject(p.slug);

  return (
    <PageShell>
      <article>
        <CaseHero project={p} />

        <Block eyebrow="Overview" title={p.subtitle}>
          <Reveal className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-[17px] leading-relaxed text-gray-700">
              {p.overview.map((o) => (
                <p key={o}>{o}</p>
              ))}
            </div>
            <dl className="card space-y-4 p-5 text-sm">
              {p.status && (
                <div>
                  <dt className="font-bold text-gray-500">Status</dt>
                  <dd className="font-extrabold text-gray-900">{p.status}</dd>
                </div>
              )}
              {p.stack.length > 0 && (
                <div>
                  <dt className="font-bold text-gray-500">Built with</dt>
                  <dd className="font-extrabold text-gray-900">{p.stack.join(" · ")}</dd>
                </div>
              )}
              <div>
                <dt className="font-bold text-gray-500">Live</dt>
                <dd className="flex flex-wrap gap-x-4">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="font-extrabold text-brand-text hover:underline">
                      {l.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </Block>

        <Block eyebrow="Features">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.04} className="card p-5">
                <span className="text-[12px] font-black" style={{ color: p.brand.accent }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[16px] font-extrabold text-gray-900">{f.title}</h3>
                {f.body && <p className="mt-1 text-[14px] leading-snug text-gray-600">{f.body}</p>}
              </Reveal>
            ))}
          </div>
        </Block>

        {p.workflow && (
          <Block eyebrow="Workflow" title={p.workflowLanes ? "From first visit to closed deal" : "How it works"}>
            <Reveal className="rounded-3xl p-4 sm:p-8" style={{ background: p.brand.stage }}>
              <Workflow steps={p.workflow} lanes={p.workflowLanes} accent={p.brand.accent} dark={p.brand.stageText === "#FFFFFF"} />
            </Reveal>
          </Block>
        )}

        {p.screens.length > 0 && (
          <Block eyebrow="Screens" title="Real screens from the product">
            <div className="grid gap-6 sm:grid-cols-2">
              {p.screens.map((s, i) => (
                <Reveal key={s.src} delay={(i % 2) * 0.05}>
                  <figure>
                    <Screen src={s.src} alt={s.alt} />
                    <figcaption className="mt-2 text-[13px] font-bold text-gray-600">{s.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            {p.slug === "kapaldo" && <p className="mt-6 text-[13px] text-gray-500">Vendor screens are from Kapaldo's shared public demo accounts.</p>}
            {p.note && (
              <p className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-gray-500">
                <Lock size={13} aria-hidden /> {p.note}
              </p>
            )}
          </Block>
        )}

        <nav aria-label="Next project" className="border-t border-line bg-white">
          <Link to={`/work/${next.slug}`} className="group container-x flex items-center justify-between gap-6 py-10 sm:py-14">
            <div>
              <p className="eyebrow text-gray-500">Next</p>
              <p className="heading mt-1 text-[30px] uppercase sm:text-[44px]">{next.name}</p>
              <p className="text-[14px] font-semibold text-gray-500">{next.category}</p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-deep text-white transition-transform group-hover:translate-x-1">
              <ArrowRight size={20} aria-hidden />
            </span>
          </Link>
        </nav>
      </article>
    </PageShell>
  );
};

export default CaseStudyPage;
