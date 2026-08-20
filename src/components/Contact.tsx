import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "../data/resume";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="noise relative overflow-hidden rounded-3xl border p-10 sm:p-16"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "var(--accent)", opacity: 0.12 }}
          />
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
            Contact
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Let's build something reliable.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Open to Senior AWS DevOps and Platform Engineering roles — in India, and remote or
            relocation-based opportunities across Germany and the Netherlands.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-md px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)", color: "#0a0d13" }}
            >
              <Mail size={15} /> Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest"
              style={{ borderColor: "var(--border)" }}
            >
              <LinkedinIcon size={15} /> LinkedIn
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div
            className="mt-12 grid grid-cols-1 gap-4 border-t pt-8 font-mono text-xs sm:grid-cols-3"
            style={{ borderColor: "var(--border)", color: "var(--text-faint)" }}
          >
            <div className="flex items-center gap-2">
              <Mail size={13} /> {profile.email}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={13} /> {profile.location}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--teal)" }} />
              Available for opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
