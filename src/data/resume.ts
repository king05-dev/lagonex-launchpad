/*
  Resume facts. Experience bullets come from examrefresher.com/developer/resume;
  dates follow the newer jerquin-resume.pages.dev timeline (Freelance from Oct 2025).
*/

export interface Job {
  org: string;
  role: string;
  period: string;
  place: string;
  summary: string;
  bullets: readonly string[];
  tech: readonly string[];
  current?: boolean;
}

export interface ClientProject {
  name: string;
  status: string;
  summary: string;
  stack: readonly string[];
  image: string;
  href?: string;
  site: string;
}

export const RESUME = {
  name: "Jerquin Bayudo",
  role: "Software Developer",
  contact: {
    email: "jerquinbayudo@gmail.com",
    phone: "(+63) 961-989-6211",
    location: "Cagayan de Oro, Philippines",
    linkedin: "jerquin-bayudo-834970203",
  },
  experience: [
    {
      org: "Freelance",
      role: "Full-Stack Software Developer",
      period: "Oct 2025 — Present",
      place: "Upwork · OnlineJobs",
      summary: "Custom web builds for direct clients, from concept to deployment.",
      bullets: [
        "Custom Shopify, React and Laravel builds, taken from concept to deployment.",
        "Ongoing maintenance for client sites after launch.",
      ],
      tech: ["Shopify", "React", "Laravel"],
      current: true,
    },
    {
      org: "Fligno Software Inc.",
      role: "Technical Lead · previously Full-Stack Developer",
      period: "Oct 2021 — Oct 2025",
      place: "Cagayan de Oro",
      summary: "Custom web applications, eCommerce and WordPress work for client projects.",
      bullets: [
        "Built web applications with React, jQuery, JavaScript, CSS and Tailwind on the frontend, Laravel on the backend, MySQL and MongoDB for data, plus OpenAI integration.",
        "Worked on an HRIS system, including its leave management module.",
        "eCommerce projects on WooCommerce, PrestaShop, BigCommerce and Shopify; static landing pages on WordPress.",
        "Maintained 30+ WordPress sites and 3 Shopify stores alongside active custom software development.",
        "Created Figma prototypes to guide frontend implementation.",
      ],
      tech: ["React", "Laravel", "MySQL", "MongoDB", "Tailwind CSS", "Shopify", "WordPress", "Figma"],
    },
    {
      org: "T-Mobile",
      role: "Technical Support",
      period: "Nov 2019 — Jun 2021",
      place: "Cagayan de Oro",
      summary: "Technical support for customers with connectivity issues.",
      bullets: [
        "Resolved customer connectivity issues.",
        "Checked source documents for accuracy and followed internal security procedures.",
      ],
      tech: ["Troubleshooting", "Customer support"],
    },
    {
      org: "AT&T",
      role: "Billing / Sales Representative",
      period: "Jun 2017 — Aug 2019",
      place: "Davao",
      summary: "Billing, sales support and order processing.",
      bullets: [
        "Compiled, prioritized and processed customer orders into the company database.",
        "Answered billing and technical questions about products and services.",
      ],
      tech: ["Billing", "Order processing"],
    },
  ] satisfies Job[],
  clientProjects: [
    {
      name: "Medical Prescription Software",
      status: "Live",
      summary: "Role-based dashboards for doctors, pharmacists and admins.",
      stack: ["React", "Laravel", "AWS", "MySQL"],
      image: "/images/work/greenlife.jpg",
      href: "https://greenlifeclinics.com.au/existing-patient-booking/",
      site: "greenlifeclinics.com.au",
    },
    {
      name: "CleanHealthLab",
      status: "Live",
      summary: "Shopify store for active-form methylation supplements.",
      stack: ["Shopify", "Liquid"],
      image: "/images/work/cleanhealthlab.jpg",
      href: "https://cleanhealthlab.com/",
      site: "cleanhealthlab.com",
    },
    {
      name: "Whiffed Aromas",
      status: "Live",
      summary: "Shopify store for scent diffusers and fragrance oils for homes and businesses.",
      stack: ["Shopify", "Liquid"],
      image: "/images/work/whiffedaromas.jpg",
      href: "https://whiffedaromas.com/",
      site: "whiffedaromas.com",
    },
    {
      name: "Shopify Website",
      status: "Deployed",
      summary: "Custom theme with a “find the right fit” flow built as a Shopify app.",
      stack: ["Shopify", "Liquid", "JavaScript"],
      image: "/images/work/sway.jpg",
      href: "https://sway-co.com/",
      site: "sway-co.com",
    },
    {
      name: "Philippine Consulate Website",
      status: "Staging",
      summary: "Custom WordPress theme for a consulate website.",
      stack: ["WordPress", "PHP", "JavaScript"],
      image: "/images/work/consul.jpg",
      site: "Staging",
    },
    {
      name: "HRIS Management System",
      status: "Acquired",
      summary: "Requests for payroll and attendance, time tracking, compliance and company announcements. This project has been acquired.",
      stack: ["React", "Laravel", "MySQL", "Tailwind"],
      image: "/images/work/hris.jpg",
      site: "hris.fligno.com",
    },
  ] satisfies ClientProject[],
  education: [
    { school: "University of Science and Technology of Southern Philippines", detail: "B.S. Environmental Engineering" },
    { school: "Regional Training Center X (Tagoloan)", detail: "Computer Hardware/Software System — TESDA NC II" },
  ],
} as const;
