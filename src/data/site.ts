import { asset } from "@/lib/asset";
import { RESUME } from "./resume";

export const SITE = {
  name: "Jerquin Bayudo",
  role: "Software Developer",
  title: "Jerquin Bayudo — Software Developer",
  location: RESUME.contact.location,
  /*
    When true the header shows the Kapaldo lockup and a "Back to Kapaldo" link,
    for hosting this page at kapaldo.com/developer.
  */
  embeddedInKapaldo: true,
  kapaldoUrl: "https://kapaldo.com",
  portrait: {
    src: asset("/images/jerquin-bayudo.webp"),
    width: 1024,
    height: 1280,
    alt: "Portrait of Jerquin Bayudo wearing glasses and a dark jacket",
  },
  links: {
    email: `mailto:${RESUME.contact.email}`,
    emailAddress: RESUME.contact.email,
    linkedin: `https://www.linkedin.com/in/${RESUME.contact.linkedin}`,
    // Set to a profile URL to show the GitHub button across the site.
    github: null as string | null,
    messenger: "https://m.me/61582189371156",
    whatsapp: `https://wa.me/${RESUME.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Jerquin, I saw your developer page and wanted to reach out.")}`,
  },
} as const;

export const NAV = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
] as const;

export const HERO = {
  badge: "💻 Software Developer · Cagayan de Oro",
  tagline: "Building practical software, from customer-facing products to the systems that power them.",
  supporting: "I build web applications, business systems, marketplaces, CRMs, integrations, and internal tools.",
  trust: [
    { icon: "layers", title: "Full-stack", body: "Frontend to infrastructure" },
    { icon: "briefcase", title: "4 years at Fligno", body: "Full-stack, then tech lead" },
    { icon: "store", title: "Real products", body: "Kapaldo, SulongRa" },
  ],
} as const;

export const ABOUT = {
  body: [
    "Software developer focused on building practical, production-oriented products and business systems.",
    "I work across frontend, backend, APIs, databases, integrations, and infrastructure.",
    "I enjoy taking an idea from an initial workflow through to a working product.",
  ],
  areas: ["Frontend", "Backend", "APIs", "Databases", "Integrations", "Infrastructure"],
} as const;

export const STACK = {
  primary: ["Laravel", "PHP", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase", "Cloudflare", "Hono", "MySQL", "PostgreSQL"],
  also: ["Shopify", "Liquid", "WordPress", "MongoDB", "AWS", "Docker", "Figma"],
} as const;

export const CONTACT = {
  title: "Let's build something.",
  body: "Have a product, workflow, or business problem you want to turn into software?",
} as const;
