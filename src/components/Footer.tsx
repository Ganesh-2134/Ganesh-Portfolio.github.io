import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest sm:flex-row" style={{ color: "var(--text-faint)" }}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React · Vite · Tailwind</span>
      </div>
    </footer>
  );
}
