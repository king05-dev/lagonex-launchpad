import { CalendarDays, MapPin } from "lucide-react";
import { RESUME } from "@/data/resume";
import { SectionHeader } from "@/components/common/primitives";
import { Reveal } from "@/components/common/motion";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-y border-line bg-sunken/60 py-14 sm:py-20">
      <div className="container-x">
        <SectionHeader id="experience-title" eyebrow="Experience" title="Where I've worked" lede="From customer support and billing to leading a development team." />

        <ol className="relative mt-10 space-y-5 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-0.5 before:bg-green-200 sm:mt-12 md:before:left-[195px]">
          {RESUME.experience.map((job, i) => {
            const major = i < 2;
            return (
              <li key={job.org} className="relative grid gap-3 pl-10 md:grid-cols-[170px_1fr] md:gap-12 md:pl-0">
                <span
                  className={cn(
                    "absolute left-0 top-6 h-6 w-6 rounded-full border-4 border-paper md:left-[184px]",
                    job.current ? "bg-orange" : major ? "bg-brand-mid" : "bg-gray-300",
                  )}
                  aria-hidden
                />
                <div className="md:pt-5 md:text-right">
                  <p className="inline-flex items-center gap-1.5 text-[13px] font-extrabold text-gray-900">
                    <CalendarDays size={14} className="text-brand-mid md:hidden" aria-hidden />
                    {job.period}
                  </p>
                  <p className="mt-0.5 hidden text-[12px] font-semibold text-gray-500 md:block">{job.place}</p>
                </div>

                <Reveal className="card p-5 transition-shadow hover:shadow-md sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">{job.org}</h3>
                      <p className="text-[14px] font-bold text-brand-mid">{job.role}</p>
                    </div>
                    {job.current && <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.04em] text-orange-600">Current</span>}
                  </div>
                  <p className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-gray-500 md:hidden">
                    <MapPin size={12} aria-hidden /> {job.place}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{job.summary}</p>
                  {major && (
                    <ul className="mt-3 space-y-1.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-[14px] leading-relaxed text-gray-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mid" aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies and skills">
                    {job.tech.map((t) => (
                      <li key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-gray-600">
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
