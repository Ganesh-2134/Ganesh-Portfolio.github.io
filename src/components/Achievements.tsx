import { motion } from "framer-motion";
import { achievements } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Impact"
          title="Numbers that came from the work, not a slide."
          description="Each figure below traces back to a specific engagement — the pipeline, the dashboard, or the security control that produced it."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-xl border p-6"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "var(--accent)", opacity: 0.08 }}
              />
              <div className="font-display text-3xl font-semibold tracking-tight" style={{ color: "var(--accent)" }}>
                {a.metric}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                {a.label}
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {a.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
