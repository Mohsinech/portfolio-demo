# Portfolio (MilcodeUni reference project)

A personal developer portfolio built with Next.js. This is the reference version MilcodeUni students build and personalize.

## What it covers (MilcodeUni final portfolio requirements)

| Section | Where |
|---|---|
| Identity: name, honest headline, location, introduction | top of the home page |
| Skills you can demonstrate | About |
| At least three projects with screenshots, live links and repos | Selected work (Projects 1–3 + the capstone) |
| Case study: problem, user, solution, responsibilities, decisions, challenges, outcome | `/projects/mawid` |
| Contact: professional email, LinkedIn, GitHub | Let's build something |

## Make it yours

1. Edit **`src/content/site.ts`**: your name, city, intro, about text, skills, email and links. Anything in `[brackets]` is a placeholder.
2. Edit **`src/content/projects.ts`**: your projects, with live and code links.
3. Add files to `public/`:
   - `me.jpg` (4:5) for your photo, then set `photo: "/me.jpg"`
   - `cv.pdf`, or set `cv: null` to hide the button
   - screenshots in `public/projects/` (1600×1000), then set `image: "/projects/mawid.png"`
4. Pick your accent colour in `site.ts` (`accent`).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub, then import the repo on [vercel.com](https://vercel.com). No settings needed.

## What's inside

```
src/app/page.tsx                  home: intro, work, about, contact
src/app/projects/[slug]/page.tsx  case-study page for projects that have one
src/components/                   Header (mobile menu), Footer, Shot (screenshot or placeholder)
src/content/                      your data: site.ts and projects.ts
src/app/globals.css               colours, buttons, header; mobile first
```
