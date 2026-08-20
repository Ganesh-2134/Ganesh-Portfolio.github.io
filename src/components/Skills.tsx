import { motion } from "framer-motion";
import { skills } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical expertise"
          title="The stack, organized by what it does — not just what it's called."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="rounded-xl border p-6"
              style={{ borderColor: "var(--border)", background: "var(--bg)" }}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-base font-semibold">{group.category}</h3>
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide" style={{ color: "var(--text-faint)" }}>
                {group.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border px-2.5 py-1 text-xs transition-colors"
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
