import { Linkedin, Github, Mail } from "lucide-react";
import { CONTACT, SITE } from "@/data/site";
import { RESUME } from "@/data/resume";
import { Reveal } from "@/components/common/motion";
import { WhatsAppIcon } from "@/components/contact/MessengerChat";

export function Contact() {
  const btn = "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-bold transition-[opacity,background-color] duration-200";
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-14 sm:pb-20">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-brand px-6 py-10 text-white sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-mid/40" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-lime">Contact</p>
              <h2 id="contact-title" className="mt-2 text-[34px] font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                {CONTACT.title}
              </h2>
              <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-white/80 sm:text-lg">{CONTACT.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={SITE.links.email} className={`${btn} bg-orange text-white hover:opacity-90`}>
                  <Mail size={17} aria-hidden /> Contact Me
                </a>
                <a href={SITE.links.whatsapp} target="_blank" rel="noopener noreferrer" className={`${btn} bg-white text-brand-deep hover:bg-brand-soft`}>
                  <WhatsAppIcon className="h-[17px] w-[17px]" /> WhatsApp
                </a>
                {SITE.links.github && (
                  <a href={SITE.links.github} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-white/40 text-white hover:border-white hover:bg-white/10`}>
                    <Github size={17} aria-hidden /> GitHub
                  </a>
                )}
                <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border-2 border-white/40 text-white hover:border-white hover:bg-white/10`}>
                  <Linkedin size={17} aria-hidden /> LinkedIn
                </a>
              </div>
            </div>
            <dl className="space-y-3 rounded-2xl bg-white/10 p-5 text-sm ring-1 ring-white/10">
              <div>
                <dt className="text-[12px] font-bold text-white/60">Email</dt>
                <dd className="break-all font-bold">
                  <a href={SITE.links.email} className="hover:underline">
                    {SITE.links.emailAddress}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold text-white/60">Phone · WhatsApp</dt>
                <dd className="font-bold">
                  <a href={SITE.links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {RESUME.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold text-white/60">Location</dt>
                <dd className="font-bold">{SITE.location}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
