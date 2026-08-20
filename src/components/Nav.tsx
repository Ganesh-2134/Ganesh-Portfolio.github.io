import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", `#${id}`);
  };

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backdropFilter: scrolled ? "blur(14px)" : "none",
        background: scrolled ? "color-mix(in srgb, var(--bg) 82%, transparent)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            go("top");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-sm font-semibold tracking-tight"
        >
          GANESH<span style={{ color: "var(--accent)" }}>.</span>M
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="relative rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors"
              style={{ color: active === l.id ? "var(--text)" : "var(--text-muted)" }}
            >
              {l.label}
              {active === l.id && (
                <span
                  className="absolute bottom-0.5 left-3 right-3 h-px"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} toggle={toggle} />
          <a
            href="/Ganesh_M_Resume.pdf"
            download
            className="flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            <Download size={13} /> Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            style={{ borderColor: "var(--border)" }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 md:hidden"
        style={{
          maxHeight: open ? "24rem" : "0px",
          opacity: open ? 1 : 0,
          borderBottom: open ? "1px solid var(--border)" : "none",
          background: "var(--bg)",
        }}
      >
        <div className="container-px mx-auto flex max-w-6xl flex-col gap-1 pb-4">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-md px-2 py-2.5 text-left font-mono text-xs uppercase tracking-widest"
              style={{ color: active === l.id ? "var(--accent)" : "var(--text-muted)" }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="/Ganesh_M_Resume.pdf"
            download
            className="mt-2 flex items-center justify-center gap-1.5 rounded-md border px-3 py-2.5 font-mono text-xs uppercase tracking-widest"
            style={{ borderColor: "var(--border)" }}
          >
            <Download size={13} /> Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
