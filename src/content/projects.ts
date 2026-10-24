/**
 * Your projects. The first one with `featured: true` gets the big card.
 * Screenshots: put them in public/projects/ (1600x1000) and set `image`.
 * Until then, a dashed placeholder shows instead (never a stock image).
 */
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
  caseStudy?: {
    headline: string;
    role: string;
    builtIn: string;
    stack: string;
    status: string;
    problem: string;
    built: string[];
    steps: { title: string; text: string; image: string | null }[];
    hardest: string;
    next: string;
  };
};

export const projects: Project[] = [
  {
    slug: "mawid",
    title: "Mawid, a booking SaaS",
    summary:
      "Customers pick a service and book a time. The business manages bookings, services and opening hours from a protected dashboard.",
    week: "Weeks 6–8 · Full-stack",
    tags: ["Next.js", "Supabase", "Auth", "Postgres"],
    image: null,
    liveUrl: null,
    codeUrl: null,
    featured: true,
    caseStudy: {
      headline: "Mawid: online booking for small businesses",
      role: "Design + full-stack build",
      builtIn: "Weeks 6–8 at MilcodeUni",
      stack: "Next.js · Supabase · Vercel",
      status: "Live",
      problem:
        "Many small businesses take bookings by phone or WhatsApp. Messages get lost, two people book the same slot, and the owner has no overview of the week.",
      built: [
        "A public booking page with services and free time slots",
        "Login for business owners (Supabase Auth)",
        "A dashboard to confirm, move or cancel bookings",
        "Services and opening hours the owner can edit",
        "Row Level Security so each business only sees its own data",
      ],
      steps: [
        { title: "1. Pick a service", text: "Prices and durations come from the database.", image: null },
        { title: "2. Choose a free time", text: "Taken slots are hidden, so nobody double-books.", image: null },
        { title: "3. The owner confirms it", text: "New bookings appear in the dashboard straight away.", image: null },
      ],
      hardest: "[In your words: the bug or concept that blocked you, and how you solved it.]",
      next: "[One or two real next steps, e.g. email reminders or online payment.]",
    },
  },
  {
    slug: "landing-page",
    title: "Responsive landing page",
    summary: "A one-page site for a local business, built mobile-first with Flexbox and Grid.",
    week: "Week 2 · HTML + CSS",
    tags: ["HTML", "CSS"],
    image: null,
    liveUrl: null,
    codeUrl: null,
  },
  {
    slug: "quiz",
    title: "Quiz with form validation",
    summary: "DOM, events and a form that checks every answer before it submits.",
    week: "Week 3 · JavaScript",
    tags: ["JavaScript", "DOM"],
    image: null,
    liveUrl: null,
    codeUrl: null,
  },
  {
    slug: "api-app",
    title: "API app",
    summary: "Fetches live data from a public API, with loading and error states. Deployed from GitHub.",
    week: "Week 4 · JavaScript + API",
    tags: ["JavaScript", "Fetch", "API"],
    image: null,
    liveUrl: null,
    codeUrl: null,
  },
];
