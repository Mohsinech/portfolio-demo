"use client";

import { useState } from "react";
import Link from "next/link";

import { site } from "@/content/site";

export function Header({ back = false }: { back?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <nav className="wrap nav" aria-label="Main">
        <Link href="/" className="logo">
          {site.handle}
          <span className="accent">.</span>dev
        </Link>
        {back ? (
          <Link href="/#work" className="navLink">
            ← All work
          </Link>
        ) : (
          <>
            <button
              type="button"
              className="menuButton"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpen((value) => !value)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
            <div id="menu" className="navLinks" data-open={open}>
              <a href="/#work" className="navLink" onClick={() => setOpen(false)}>
                Work
              </a>
              <a href="/#about" className="navLink" onClick={() => setOpen(false)}>
                About
              </a>
              <a href="/#contact" className="navLink" onClick={() => setOpen(false)}>
                Contact
              </a>
              {site.links.cv ? (
                <a href={site.links.cv} className="pill" download>
                  Download CV
                </a>
              ) : null}
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
