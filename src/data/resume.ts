export const RESUME = {
  name: "Jerquin Bayudo",
  role: "Full-Stack & Shopify Developer",
  location: "Cagayan de Oro, Philippines",
  quote: "Stay afraid but do it anyway.",
  quoteBy: "Carrie Fisher",
  intro:
    "I build custom, high-performing websites and web apps with Shopify, WordPress, JavaScript, and Laravel. I've led teams, shipped production systems, and made myself useful across eCommerce and custom software.",
  contact: {
    email: "jerquinbayudo@gmail.com",
    phone: "(+63) 961-989-6211",
    location: "Cagayan de Oro, Philippines",
    linkedin: "jerquin-bayudo-834970203",
  },
  experience: [
    {
      title: "Freelance Full-Stack Software Developer",
      org: "Upwork · OnlineJobs",
      period: "Oct 2025 — Present",
      place: "Cagayan de Oro",
      bullets: [
        "Custom Shopify, React, and Laravel builds — concept to deployment.",
        "Direct client work; flexible scope; long-tail maintenance retained.",
      ],
      tags: ["Shopify", "React", "Laravel", "Custom websites"],
    },
    {
      title: "Tech Lead / Software Engineer",
      org: "Fligno Software Inc.",
      period: "Oct 2021 — Oct 2025",
      place: "Cagayan de Oro",
      bullets: [
        "Led a multi-stack team across React/Laravel projects in production.",
        "Shipped Shopify & WordPress builds alongside custom platforms (MySQL/Mongo).",
        "Code review, architecture, mentoring — the unglamorous shipped stuff.",
      ],
      tags: ["React", "Laravel", "MySQL", "MongoDB", "Shopify/WordPress"],
    },
    {
      title: "Technical Support",
      org: "T-Mobile",
      period: "Nov 2019 — Jun 2021",
      place: "Cagayan de Oro",
      bullets: [
        "Frontline connectivity & device troubleshooting for US customers.",
        "Learned: stay calm, fix the actual problem, leave the customer better than you found them.",
      ],
      tags: ["Customer satisfaction", "Troubleshooting"],
    },
    {
      title: "Billing / Sales Representative",
      org: "AT&T",
      period: "Jun 2017 — Aug 2019",
      place: "Davao, PH",
      bullets: [
        "Billing support, sales support, order processing.",
        "Where I picked up the habit of being useful on anything that came in.",
      ],
      tags: ["Billing", "Sales", "Order processing"],
    },
  ],
  projects: [
    {
      name: "WhiffedAromas",
      type: "Shopify",
      blurb: "Premium fragrances & aromatic essentials — eCommerce store.",
      stack: ["Liquid", "JavaScript", "CSS", "Shopify Apps"],
      url: "whiffedaromas.com",
    },
    {
      name: "CleanHealthLab",
      type: "Shopify",
      blurb: "Science-backed wellness supplements — eCommerce.",
      stack: ["Liquid", "JavaScript", "CSS", "Shopify"],
      url: "cleanhealthlab.com",
    },
    {
      name: "Marine Hub — Onyx",
      type: "Web App",
      blurb: "Boat service management — scheduling, maintenance tracking, job assignments.",
      stack: ["Vite", "HonoJS", "Supabase", "Cloudflare", "Postgres"],
      url: "marinehub-v.jerquin.workers.dev",
    },
    {
      name: "SailOnyx Website",
      type: "WordPress",
      blurb: "Redesigned & optimized for speed, SEO, and user experience.",
      stack: ["WordPress", "Custom Plugin"],
      url: "sailonyx.com",
    },
    {
      name: "Greenlife Patient Prescription",
      type: "Healthcare",
      blurb: "Platform for managing prescriptions, medical records, and doctor consultations.",
      stack: ["Next.js", "Laravel", "AWS"],
      url: "patient.greenlifeclinics.com.au",
    },
  ],
  personal: [
    {
      name: "ExamRefresher.com",
      blurb: "Free eLearning web app helping students prepare for professional exams.",
      stack: ["React", "Laravel", "TailwindCSS"],
      url: "examrefresher.com",
    },
    {
      name: "Kapaldo Marketplace",
      blurb: "Marketplace app built with Next.js and Supabase.",
      stack: ["Next.js", "Supabase", "Postgres"],
      url: "kapaldo.com",
    },
  ],
  education: [
    {
      school: "University of Science and Technology in Southern Philippines",
      year: "2014",
      degree: "B.S. Environmental Engineering",
    },
    {
      school: "Regional Training Center X (Tagoloan)",
      year: "2015",
      degree: "Computer Hardware/Software System — TESDA NC 2",
    },
  ],
  skills: {
    Design: [
      "User Experience", "Design System", "Web Design", "Mobile Design",
      "Wireframing", "Prototyping", "Testing",
    ],
    Development: [
      "React", "Next.js", "Laravel / PHP", "Shopify", "Liquid",
      "HTML", "CSS", "jQuery", "JavaScript", "PWA / Offline Apps",
    ],
    Tools: [
      "Figma", "Chakra UI", "Emotion", "Framer", "Tailwind", "Material UI",
      "Git", "Databases", "Docker", "WordPress (Elementor / Beaver / WPBakery)",
    ],
  },
} as const;
