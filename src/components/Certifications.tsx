import { motion } from "framer-motion";
import { BadgeCheck, Clock } from "lucide-react";
import { certifications, education } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Certifications" title="Credentials, current and in progress." />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border p-6"
              style={{
                borderColor: c.status === "active" ? "var(--accent)" : "var(--border)",
                background: "var(--bg)",
              }}
            >
              <div className="flex items-center justify-between">
                {c.status === "active" ? (
                  <BadgeCheck size={20} style={{ color: "var(--accent)" }} />
                ) : (
                  <Clock size={20} style={{ color: "var(--text-faint)" }} />
                )}
                <span
                  className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest"
                  style={{
                    background: c.status === "active" ? "var(--accent-soft)" : "transparent",
                    color: c.status === "active" ? "var(--accent)" : "var(--text-faint)",
                    border: c.status === "active" ? "none" : "1px solid var(--border)",
                  }}
                >
                  {c.status === "active" ? "Active" : "Planned"}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug">{c.name}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                {c.issuer}
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wide" style={{ color: "var(--text-faint)" }}>
                {c.date}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-1 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
              Education
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
              {education.degree} · {education.school}
            </p>
          </div>
          <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
            {education.dates}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
