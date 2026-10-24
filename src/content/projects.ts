/**
 * Your projects. The first one with `featured: true` gets the big card.
 * Screenshots: put them in public/projects/ (1600x1000) and set `image`.
 * Until then, a dashed placeholder shows instead (never a stock image).
 */
export type CaseStudy = {
  headline: string;
  role: string;
  builtIn: string;
  stack: string;
  status: string;
  /** The MilcodeUni case-study fields, in this order. */
  problem: string;
  user: string;
  solution: string;
  responsibilities: string[];
  decisions: string[];
  challenges: string;
  outcome: string;
  steps: { title: string; text: string; image: string | null }[];
  next: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  week: string;
  tags: string[];
  image: string | null;
  liveUrl: string | null;
  codeUrl: string | null;
  featured?: boolean;
  /** Optional case-study page at /projects/<slug>. */
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "mawid",
    title: "Mawid, a booking SaaS",
    summary:
      "Customers pick a service and book a time. The business manages bookings, services and opening hours from a protected dashboard.",
    week: "Capstone · Weeks 6–8",
    tags: ["Next.js", "TypeScript", "Supabase", "Auth"],
    image: null,
    liveUrl: null,
    codeUrl: null,
    featured: true,
    caseStudy: {
      headline: "Mawid: online booking for small businesses",
      role: "Design + full-stack build",
      builtIn: "Weeks 6–8 at MilcodeUni",
      stack: "Next.js · TypeScript · Supabase · Vercel",
      status: "Live",
      problem:
        "Many small businesses take bookings by phone or WhatsApp. Messages get lost, two people book the same slot, and the owner has no overview of the week.",
      user: "Owners of small service businesses (barbers, salons, coaches) and their customers, mostly on phones.",
      solution:
        "One booking link per business. Customers see only free times and send a request; the owner confirms it and manages everything from a dashboard.",
      responsibilities: [
        "Designed the screens and the database (businesses, services, opening hours, bookings)",
        "Built the public booking flow with server-side validation",
        "Added sign-up, sign-in and a protected dashboard with Supabase Auth",
        "Wrote Row Level Security so each owner only sees their own data",
        "Deployed to Vercel and documented the setup",
      ],
      decisions: [
        "Stored dates and times as the shop's local time to avoid timezone bugs",
        "Checked overlaps in a server action, plus a unique index as a safety net",
        "Exposed taken times through a view, so customers never see other people's names",
      ],
      challenges: "[In your words: the bug or concept that blocked you, and how you solved it.]",
      outcome: "[What works now, who tested it, and what you learned.]",
      steps: [
        { title: "1. Pick a service", text: "Prices and durations come from the database.", image: null },
        { title: "2. Choose a free time", text: "Taken times are crossed out, so nobody double-books.", image: null },
        { title: "3. The owner confirms it", text: "New requests appear in the dashboard straight away.", image: null },
      ],
      next: "[One or two real next steps, e.g. WhatsApp reminders the day before.]",
    },
  },
  {
    slug: "service-explorer",
    title: "Service explorer (React)",
    summary: "Loads services, filters them by category and search, opens details and keeps a selection list.",
    week: "Project 3 · Week 5",
    tags: ["React", "Vite", "fetch", "useState"],
    image: null,
    liveUrl: null,
    codeUrl: null,
  },
  {
    slug: "booking-website",
    title: "Interactive booking website",
    summary: "Service selection, live totals, form validation, a saved draft and a ready-to-send WhatsApp booking.",
    week: "Project 2 · Weeks 3–4",
    tags: ["JavaScript", "DOM", "Forms", "localStorage"],
    image: null,
    liveUrl: null,
    codeUrl: null,
  },
  {
    slug: "landing-page",
    title: "Business landing page",
    summary: "A responsive website for a service business, built mobile-first with semantic HTML, Flexbox and Grid.",
    week: "Project 1 · Weeks 1–2",
    tags: ["HTML", "CSS"],
    image: null,
    liveUrl: null,
    codeUrl: null,
  },
];
