import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap" style={{ paddingBlock: 96, display: "flex", flexDirection: "column", gap: 16 }}>
      <h1 style={{ fontSize: 48 }}>Page not found</h1>
      <Link href="/" className="btn" style={{ alignSelf: "flex-start" }}>
        Back home
      </Link>
    </main>
  );
}
