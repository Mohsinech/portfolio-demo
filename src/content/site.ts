/**
 * EVERYTHING about you lives here. Change these values, nothing else is required.
 * Anything in [brackets] is a placeholder: replace it before you share your site.
 */
export const site = {
  name: "[Your Name]",
  /** Shown in the logo: yourname.dev */
  handle: "yourname",
  role: "Junior web developer",
  city: "[Your city]",
  country: "Morocco",
  /** Your accent color. Try #2F4BFF, #E4572E, #0F766E or #7C3AED. */
  accent: "#2F4BFF",
  available: true,
  availableText: "Open to junior roles and freelance projects",
  intro: "I build with React, Next.js and Supabase, from the first sketch to a live, working product.",
  /** Put your photo at public/me.jpg (4:5) and set this to "/me.jpg". */
  photo: null as string | null,
  about: [
    "[Two or three sentences in your own words: what you did before, why you started coding, what you love building now.]",
    "I learned web development at MilcodeUni, an 8-week live bootcamp taught in Darija and English.",
  ],
  skills: {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    Backend: ["Supabase", "Postgres", "Auth", "REST APIs"],
    Tools: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
  } as Record<string, string[]>,
  email: "[your@email.com]",
  links: {
    github: "https://github.com/[username]",
    linkedin: "https://www.linkedin.com/in/[username]",
    /** Put your CV at public/cv.pdf, or set to null to hide the button. */
    cv: "/cv.pdf" as string | null,
  },
  url: "https://yourname.dev",
};
