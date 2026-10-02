import { GraduationCap, MapPin, Briefcase, Mail } from "lucide-react";
import { ABOUT, SITE } from "@/data/site";
import { RESUME } from "@/data/resume";
import { Chips, Eyebrow } from "@/components/common/primitives";
import { Reveal } from "@/components/common/motion";

export function About() {
  const [current, previous] = RESUME.experience;
  const facts = [
    { icon: MapPin, label: "Based in", value: SITE.location },
    { icon: Briefcase, label: "Currently", value: `${current.role} · ${current.place}` },
    { icon: Briefcase, label: "Previously", value: `Technical Lead · ${previous.org}` },
    ...RESUME.education.map((e) => ({ icon: GraduationCap, label: "Education", value: `${e.detail}, ${e.school}` })),
    { icon: Mail, label: "Email", value: SITE.links.emailAddress, href: SITE.links.email },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="py-12 sm:py-16">
      <div className="container-x grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="card p-6 sm:p-8">
          <Eyebrow>About</Eyebrow>
          <h2 id="about-title" className="heading mt-2 text-[26px] sm:text-[30px]">
            {ABOUT.body[0]}
          </h2>
          <div className="mt-4 space-y-3 text-[16px] leading-relaxed text-gray-600">
            {ABOUT.body.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Chips items={ABOUT.areas} className="mt-6" color="#166534" tint="#F0FDF4" />
        </Reveal>

        <Reveal delay={0.05} className="card p-6 sm:p-8">
          <Eyebrow className="text-gray-500">Quick facts</Eyebrow>
          <dl className="mt-4 divide-y divide-gray-100">
            {facts.map((f) => (
              <div key={f.label + f.value} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                <f.icon size={18} className="mt-0.5 shrink-0 text-brand-mid" aria-hidden />
                <div className="min-w-0">
                  <dt className="text-[12px] font-bold text-gray-500">{f.label}</dt>
                  <dd className="break-words text-[14px] font-semibold text-gray-900">
                    {"href" in f && f.href ? (
                      <a href={f.href} className="hover:text-brand-mid hover:underline">
                        {f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
