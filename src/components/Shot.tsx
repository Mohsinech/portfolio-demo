import Image from "next/image";

/** A real screenshot, or an honest dashed placeholder. */
export function Shot({ src, alt, label, ratio = "16 / 10" }: { src: string | null; alt: string; label: string; ratio?: string }) {
  return (
    <div className="shot" style={{ aspectRatio: ratio }}>
      {src ? <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" /> : <span>{label}</span>}
    </div>
  );
}
