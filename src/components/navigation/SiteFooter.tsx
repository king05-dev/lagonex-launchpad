import { Link } from "react-router-dom";
import { NAV, SITE } from "@/data/site";
import { PROJECTS } from "@/data/projects";

/** Kapaldo-style dark green footer. */
export function SiteFooter() {
  const socials = [
    { label: SITE.links.emailAddress, href: SITE.links.email },
    { label: "WhatsApp", href: SITE.links.whatsapp },
    { label: "LinkedIn", href: SITE.links.linkedin },
    ...(SITE.links.github ? [{ label: "GitHub", href: SITE.links.github }] : []),
    ...(SITE.embeddedInKapaldo ? [{ label: "kapaldo.com", href: SITE.kapaldoUrl }] : []),
  ];

  return (
    <footer className="bg-brand text-white">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="text-lg font-extrabold">{SITE.name}</p>
          <p className="mt-1 text-sm text-white/70">
            {SITE.role} · {SITE.location}
          </p>
        </div>
        <FooterList title="Page" items={NAV.map((n) => ({ label: n.label, href: n.href }))} />
        <FooterList title="Products" items={PROJECTS.map((p) => ({ label: p.name, href: `/work/${p.slug}` }))} />
        <FooterList title="Contact" items={socials} />
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-xs text-white/60">
          © {new Date().getFullYear()} {SITE.name}
          {SITE.embeddedInKapaldo && " · Kapaldo — Paldo sa business"}
        </p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-lime">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => {
          const external = /^(https?:|mailto:)/.test(item.href);
          const cls = "break-all text-sm text-white/70 transition-colors hover:text-white";
          return (
            <li key={item.label}>
              {external ? (
                <a href={item.href} className={cls} {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {item.label}
                </a>
              ) : (
                <Link to={item.href} className={cls}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
