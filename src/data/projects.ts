/*
  Products shown on the page. Every screenshot is a real capture of the live
  product (Kapaldo vendor screens come from its shared public demo accounts).
  Each project keeps its own colours so its preview looks like the real thing.
*/

export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

export interface Brand {
  /** Stage background behind the screenshots */
  stage: string;
  /** Text colour on the stage */
  stageText: string;
  /** Project's own accent (buttons, numbers) */
  accent: string;
  /** Soft tint for chips and icons */
  tint: string;
  logo: { src?: string; alt: string; width: number; height: number; kapaldo?: boolean };
}

export interface Feature {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  index: string;
  kind: "portfolio" | "personal";
  name: string;
  category: string;
  subtitle: string;
  summary: string;
  framing?: string;
  chips: readonly string[];
  status?: string;
  brand: Brand;
  cover: Shot;
  screens: readonly Shot[];
  overview: readonly string[];
  features: readonly Feature[];
  /** Linear flow drawn as a diagram */
  workflow?: readonly string[];
  /** Optional grouping of workflow steps into lanes, by step count */
  workflowLanes?: readonly { label: string; count: number }[];
  stack: readonly string[];
  links: readonly { label: string; href: string }[];
  /** Shown under the screens when something can't be shown publicly */
  note?: string;
}

const SULONGRA_BRAND: Brand = {
  stage: "linear-gradient(135deg, #01203C 0%, #062F4F 55%, #0A5A6B 100%)",
  stageText: "#FFFFFF",
  accent: "#EA9705",
  tint: "#FDF3E1",
  logo: { src: "/images/work/sulongra-logo.webp", alt: "SulongRa Virtual Assistants logo", width: 496, height: 165 },
};

export const PROJECTS: readonly Project[] = [
  {
    slug: "kapaldo",
    index: "01",
    kind: "portfolio",
    name: "Kapaldo",
    category: "Local Marketplace Platform",
    subtitle: "Local Marketplace Platform",
    summary: "An all-in-one marketplace for local stores, services, errands, and rentals.",
    framing: "Here is the product I helped build.",
    chips: ["Stores", "Services", "Rentals", "Errands"],
    brand: {
      stage: "#FBF7EE",
      stageText: "#111827",
      accent: "#1D6E3E",
      tint: "#F0FDF4",
      logo: { alt: "Kapaldo logo", width: 40, height: 40, kapaldo: true },
    },
    cover: { src: "/images/work/kapaldo-home.jpg", alt: "Kapaldo homepage listing nearby stores, errands and services", caption: "Homepage" },
    screens: [
      { src: "/images/work/kapaldo-vendor-dashboard.jpg", alt: "Kapaldo vendor portal dashboard", caption: "Vendor dashboard" },
      { src: "/images/work/kapaldo-store.jpg", alt: "A Kapaldo store page with its product menu", caption: "Store browsing" },
      { src: "/images/work/kapaldo-services.jpg", alt: "Kapaldo services listing page", caption: "Services" },
      { src: "/images/work/kapaldo-rentals.jpg", alt: "Kapaldo rentals listing page", caption: "Rentals" },
      { src: "/images/work/kapaldo-rental-detail.jpg", alt: "A Kapaldo rental listing with a booking calendar", caption: "Rental booking" },
      { src: "/images/work/kapaldo-vendor-products.jpg", alt: "Kapaldo vendor product management table", caption: "Product management" },
      { src: "/images/work/kapaldo-vendor-orders.jpg", alt: "Kapaldo vendor orders list", caption: "Orders" },
      { src: "/images/work/kapaldo-vendor-rentals.jpg", alt: "Kapaldo vendor rental listings", caption: "Rental listings" },
      { src: "/images/work/kapaldo-vendor-bookings.jpg", alt: "Kapaldo vendor rental bookings by status", caption: "Bookings" },
      { src: "/images/work/kapaldo-vendor-ai-agent.jpg", alt: "Kapaldo AI Agent settings for Facebook Messenger ordering", caption: "AI Agent" },
      { src: "/images/work/kapaldo-vendor-qr-labels.jpg", alt: "Kapaldo QR order label printing", caption: "QR labels" },
      { src: "/images/work/kapaldo-admin-errands.jpg", alt: "Kapaldo admin errand monitoring list that hides customer personal information", caption: "Admin: errand monitoring" },
      { src: "/images/work/kapaldo-admin-vendors.jpg", alt: "Kapaldo admin vendor management with verification and subscription plans, owner details blurred", caption: "Admin: vendors & subscriptions" },
      { src: "/images/work/kapaldo-admin-categories.jpg", alt: "Kapaldo admin store, service and rental category management", caption: "Admin: categories" },
    ],
    overview: [
      "Kapaldo is a local town marketplace. Customers order from nearby stores, book services, rent vehicles and equipment, and request errands, all from one place.",
      "Behind it is a vendor portal where each business manages its products, orders, quotes, services, schedules, rentals and bookings.",
      "An admin portal runs the platform: approving vendor and rider applications, managing subscriptions, stores, riders and categories, and monitoring errands. Customer details are kept out of the errand list, and opening a full record is logged.",
    ],
    features: [
      { title: "Stores", body: "Store pages with product menus, a cart and ordering from local shops." },
      { title: "Services", body: "Bookable local services with schedules and a calendar." },
      { title: "Rentals", body: "Rental listings with daily rates, unit counts and a booking calendar." },
      { title: "Errands", body: "Pasugo, for requesting errands around town." },
      { title: "Vendor portal", body: "Orders, products, quotes, sales summary, services, scheduling, rentals and agreements." },
      { title: "AI Agent", body: "A Facebook Messenger ordering assistant with configurable reply language and tone." },
      { title: "Bookings", body: "Rental bookings tracked through pending, confirmed, active, returned and done." },
      { title: "Operations", body: "QR order labels, pre-printed codes and a scanner for store operations." },
      { title: "Admin portal", body: "Vendor and rider approvals, subscriptions, stores, riders, POS and categories." },
      { title: "Privacy by default", body: "Errand lists hide customer details; viewing a full record is logged." },
    ],
    note: "Admin screens are from the live platform. Owner details are blurred.",
    stack: ["Next.js", "Supabase", "PostgreSQL"],
    links: [{ label: "kapaldo.com", href: "https://kapaldo.com" }],
  },
  {
    slug: "sulongra",
    index: "02",
    kind: "portfolio",
    name: "SulongRa",
    category: "Business Support Platform & CRM",
    subtitle: "Business Support Platform & CRM",
    summary: "A virtual assistance company: a landing page that brings in clients, and the CRM the team runs on.",
    chips: ["Sales", "Operations", "Virtual Assistance", "CRM"],
    brand: SULONGRA_BRAND,
    cover: { src: "/images/work/sulongra-home.jpg", alt: "SulongRa homepage: Delegate the work. Move your business forward.", caption: "Landing page" },
    screens: [
      { src: "/images/work/sulongra-crm-dashboard.jpg", alt: "SulongRa CRM dashboard with pipeline funnel and sales KPIs", caption: "CRM dashboard" },
      { src: "/images/work/sulongra-crm-documents.jpg", alt: "SulongRa CRM documents: proposals and terms with viewed, sent, signed and declined status", caption: "Proposals & terms" },
      { src: "/images/work/sulongra-crm-contacts.jpg", alt: "SulongRa CRM contacts table, details blurred", caption: "Contacts" },
      { src: "/images/work/sulongra-crm-calendar.jpg", alt: "SulongRa CRM team calendar with appointment types", caption: "Calendar" },
      { src: "/images/work/sulongra-crm-reports.jpg", alt: "SulongRa CRM reports with conversion funnel", caption: "Reports" },
      { src: "/images/work/sulongra-services.jpg", alt: "SulongRa service areas", caption: "Services" },
      { src: "/images/work/sulongra-how.jpg", alt: "How SulongRa works page", caption: "How it works" },
    ],
    overview: [
      "The landing page at sulongra.com helps businesses delegate work to virtual assistants. It explains the service areas, walks through how matching works and books a free discovery call.",
      "Behind it is the SulongRa CRM at app.sulongra.com. Leads from the site land in the CRM and move through a ten-stage pipeline: contacted, discovery calls booked on the team calendar, proposals and terms sent and tracked until signed, with the team notified in Slack.",
    ],
    features: [
      { title: "Landing page", body: "Service areas, the matching process and free discovery-call booking." },
      { title: "Pipeline", body: "Sales, fulfillment and nurture boards, ten stages from lead to signed." },
      { title: "Contacts", body: "Owners, tags, sources, CSV import and do-not-contact flags." },
      { title: "Calendar", body: "Team calendars with qualify, discovery and proposal call types." },
      { title: "Documents", body: "Proposals, terms and presentations tracked from sent to signed, with PDFs." },
      { title: "Inbox", body: "Shared, assignable inbox; new messages notify Slack." },
      { title: "Reports", body: "Conversion funnel, sales cycle, forecast and team activity." },
      { title: "Dialer", body: "Calls are made from the CRM." },
    ],
    workflow: ["Marketing Website", "Lead Generation", "CRM", "Lead Management", "Contacts", "Dialer", "Slack", "Follow-up", "Sales Operations"],
    workflowLanes: [
      { label: "Website", count: 2 },
      { label: "CRM", count: 4 },
      { label: "Team", count: 3 },
    ],
    stack: [],
    links: [
      { label: "sulongra.com", href: "https://sulongra.com" },
      { label: "app.sulongra.com", href: "https://app.sulongra.com" },
    ],
    note: "CRM screens are from the live app. Contact and client details are blurred.",
  },
  {
    slug: "exam-refresher",
    index: "P1",
    kind: "personal",
    name: "Exam Refresher",
    category: "Exam Preparation / Education Platform",
    subtitle: "Exam Preparation / Education Platform",
    summary: "A free exam practice platform for students and professionals, with tools for mentors who run review groups.",
    chips: ["Mock exams", "Question bank", "Mentor tools"],
    status: "Active development",
    brand: {
      stage: "linear-gradient(135deg, #E9F6FD 0%, #DCEFF2 100%)",
      stageText: "#0E4F57",
      accent: "#105A62",
      tint: "#E7F5F7",
      logo: { src: "/images/work/examrefresher-logo.svg", alt: "Exam Refresher logo", width: 190, height: 55 },
    },
    cover: { src: "/images/work/examrefresher-mobile-and-mac.jpg", alt: "Exam Refresher on a laptop and a phone", caption: "Desktop & mobile" },
    screens: [
      { src: "/images/work/examrefresher-home.jpg", alt: "Exam Refresher homepage", caption: "Homepage" },
      { src: "/images/work/examrefresher-exams.jpg", alt: "Exam Refresher exams list with LEA, ALE and LET reviewers", caption: "Exams" },
    ],
    overview: [
      "Learners sign up with a group code, choose a course, then study with random practice quizzes or take recorded exams and review their results.",
      "Mentors run the groups: they track quiz scores in real time, import and export quizzes, and review question feedback from staff.",
    ],
    features: [
      { title: "Mock exams", body: "Recorded exams alongside unrecorded practice quizzes." },
      { title: "Exam categories", body: "LEA, ALE and LET reviewers, split into per-topic items." },
      { title: "Question management", body: "Staff flag questions and suggest edits; mentors approve or reject." },
      { title: "Answer evaluation", body: "Scored results learners can come back to." },
      { title: "Explanations", body: "Review answers to see what was missed." },
      { title: "Exam generation", body: "Random quizzes drawn from the question bank." },
      { title: "Admin tooling", body: "Staff and student accounts, plus live quiz tracking per group." },
      { title: "Data management", body: "Import and export quizzes as CSV." },
    ],
    stack: ["React", "Tailwind CSS"],
    links: [{ label: "examrefresher.com", href: "https://examrefresher.com" }],
  },
];

export const PORTFOLIO = PROJECTS.filter((p) => p.kind === "portfolio");
export const PERSONAL = PROJECTS.filter((p) => p.kind === "personal");

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
