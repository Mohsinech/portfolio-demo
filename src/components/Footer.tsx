import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footerInner">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Built with Next.js · Deployed on Vercel</span>
      </div>
    </footer>
  );
}
