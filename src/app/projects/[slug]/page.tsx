import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Shot } from "@/components/Shot";
import { projects } from "@/content/projects";

import styles from "./project.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : { title: "Project not found" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project?.caseStudy) notFound();
  const study = project.caseStudy;
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Header back />
      <main>
        <section className={`wrap ${styles.intro}`}>
          <p className="eyebrow">Case study · {project.tags[0]}</p>
          <h1 className={styles.title}>{study.headline}</h1>
          <p className={styles.lead}>{project.summary}</p>
          <div className={styles.actions}>
            {project.liveUrl ? (
              <a href={project.liveUrl} className="btn" target="_blank" rel="noreferrer">
                Open the live demo
              </a>
            ) : (
              <span className={styles.soon}>Live demo coming soon</span>
            )}
            {project.codeUrl ? (
              <a href={project.codeUrl} className="btnOutline" target="_blank" rel="noreferrer">
                View the code
              </a>
            ) : null}
          </div>
        </section>

        <section className="wrap">
          <dl className={styles.facts}>
            <div>
              <dt>Role</dt>
              <dd>{study.role}</dd>
            </div>
            <div>
              <dt>Built in</dt>
              <dd>{study.builtIn}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{study.stack}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{study.status}</dd>
            </div>
          </dl>
        </section>

        <section className={`wrap ${styles.block}`}>
          <Shot src={project.image} alt={`${project.title} screenshot`} label="Big screenshot: the main screen" ratio="16 / 9" />
        </section>

        <section className={`wrap ${styles.columns}`}>
          <div className={styles.stack}>
            <h2 className={styles.h2}>The problem</h2>
            <p className={styles.body}>{study.problem}</p>
          </div>
          <div className={styles.stack}>
            <h2 className={styles.h2}>What I built</h2>
            <ul className={styles.list}>
              {study.built.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.how}>
          <div className={`wrap ${styles.howInner}`}>
            <h2 className={styles.h2}>How it works</h2>
            <div className={styles.steps}>
              {study.steps.map((step) => (
                <div key={step.title} className={styles.step}>
                  <Shot src={step.image} alt={step.title} label={`Screenshot: ${step.title.replace(/^\d+\.\s*/, "")}`} ratio="4 / 3" />
                  <b>{step.title}</b>
                  <p className={styles.small}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`wrap ${styles.columns}`}>
          <div className={styles.stack}>
            <h2 className={styles.h2}>Hardest part</h2>
            <p className={styles.body}>{study.hardest}</p>
          </div>
          <div className={styles.stack}>
            <h2 className={styles.h2}>What I&apos;d add next</h2>
            <p className={styles.body}>{study.next}</p>
          </div>
        </section>

        {next && next !== project ? (
          <section className={`wrap ${styles.nextWrap}`}>
            <Link href={next.caseStudy ? `/projects/${next.slug}` : "/#work"} className={styles.next}>
              <span>Next project: {next.title}</span>
              <span>See it →</span>
            </Link>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
