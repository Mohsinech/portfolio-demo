import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Shot } from "@/components/Shot";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

import styles from "./page.module.css";

function ProjectLinks({ liveUrl, codeUrl }: { liveUrl: string | null; codeUrl: string | null }) {
  return (
    <div className={styles.links}>
      {liveUrl ? (
        <a href={liveUrl} target="_blank" rel="noreferrer">
          Live demo
        </a>
      ) : (
        <span className={styles.soon}>Live demo soon</span>
      )}
      {codeUrl ? (
        <a href={codeUrl} target="_blank" rel="noreferrer">
          Code
        </a>
      ) : null}
    </div>
  );
}

export default function Home() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const others = projects.filter((project) => project !== featured);

  return (
    <>
      <Header />
      <main>
        <section className={`wrap ${styles.hero}`}>
          <div className={styles.heroText}>
            {site.available ? (
              <span className={styles.badge}>
                <span className={styles.dot} aria-hidden="true" />
                {site.availableText}
              </span>
            ) : null}
            <h1 className={styles.title}>
              Hi, I&apos;m {site.name}.<br />I build fast, friendly <span className="accent">websites</span>.
            </h1>
            <p className={styles.lead}>
              {site.role} based in {site.city}, {site.country}. {site.intro}
            </p>
            <div className={styles.actions}>
              <a href="#work" className="btn">
                See my work
              </a>
              <a href="#contact" className="btnOutline">
                Get in touch
              </a>
            </div>
          </div>
          <div className={styles.photo}>
            {site.photo ? (
              <Image src={site.photo} alt={site.name} fill sizes="(max-width: 760px) 100vw, 420px" priority />
            ) : (
              <span>
                Your photo
                <br />
                (4:5, friendly, good light)
              </span>
            )}
          </div>
        </section>

        <section id="work" className={styles.work}>
          <div className={`wrap ${styles.workInner}`}>
            <div className={styles.sectionHead}>
              <div className={styles.stack}>
                <p className="eyebrow">Selected work</p>
                <h2 className={styles.h2}>Things I&apos;ve built</h2>
              </div>
              <p className={styles.sectionIntro}>Each one is live and on GitHub. Click through, try them, read the code.</p>
            </div>

            {featured ? (
              <article className={styles.featured}>
                <Shot src={featured.image} alt={`${featured.title} screenshot`} label={`Screenshot: ${featured.title}`} />
                <div className={styles.featuredBody}>
                  <span className={styles.featuredTag}>Featured · {featured.week}</span>
                  <h3 className={styles.featuredTitle}>{featured.title}</h3>
                  <p className={styles.body}>{featured.summary}</p>
                  <div className="tags">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    {featured.caseStudy ? <Link href={`/projects/${featured.slug}`}>Read the case study</Link> : null}
                  </div>
                  <ProjectLinks liveUrl={featured.liveUrl} codeUrl={featured.codeUrl} />
                </div>
              </article>
            ) : null}

            <div className={styles.grid}>
              {others.map((project) => (
                <article key={project.slug} className={styles.card}>
                  <Shot src={project.image} alt={`${project.title} screenshot`} label={`Screenshot: ${project.title}`} />
                  <p className={styles.week}>{project.week}</p>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.small}>{project.summary}</p>
                  <ProjectLinks liveUrl={project.liveUrl} codeUrl={project.codeUrl} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={`wrap ${styles.about}`}>
          <div className={styles.stack}>
            <p className="eyebrow">About</p>
            <h2 className={styles.h2Small}>From zero code to shipping real apps.</h2>
            {site.about.map((paragraph) => (
              <p key={paragraph} className={styles.body}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.skills}>
            {(Object.entries(site.skills) as [string, string[]][]).map(([group, items]) => (
              <div key={group} className={styles.skillGroup}>
                <h3 className={styles.skillTitle}>{group}</h3>
                <div className="tags">
                  {items.map((item) => (
                    <span key={item} className={styles.skill}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contactWrap}>
          <div className={`wrap`}>
            <div className={styles.contact}>
              <div className={styles.stack}>
                <h2 className={styles.contactTitle}>Let&apos;s build something.</h2>
                <p className={styles.contactText}>Have a project or a role in mind? I usually reply within a day.</p>
              </div>
              <div className={styles.actions}>
                <a href={`mailto:${site.email}`} className="btn">
                  {site.email}
                </a>
                <a href={site.links.github} className="btnLight" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={site.links.linkedin} className="btnLight" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
