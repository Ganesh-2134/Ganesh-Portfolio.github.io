import { motion } from "framer-motion";
import { summary, profile } from "../data/resume";

const pillars = [
  {
    label: "Automation-first",
    text: "If a task repeats twice, it becomes Terraform, a pipeline stage, or a Boto3 script — not a runbook someone has to remember.",
  },
  {
    label: "Reliability by design",
    text: "Observability isn't bolted on after launch. Dashboards, alarms, and SLO tracking get built alongside the infrastructure they watch.",
  },
  {
    label: "Enterprise-tested",
    text: "Shipped inside regulated, high-traffic environments — insurance, banking, retail — where drift and downtime carry real cost.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-xs lg:mx-0"
          >
            <div
              className="absolute -inset-3 rounded-2xl border"
              style={{ borderColor: "var(--border)" }}
              aria-hidden
            />
            <picture>
              <source srcSet="/ganesh-portrait.webp" type="image/webp" />
              <img
                src="/ganesh-portrait.png"
                alt="Portrait of Ganesh M"
                width={900}
                height={1099}
                className="relative w-full rounded-xl border object-cover grayscale-[15%]"
                style={{ borderColor: "var(--border)" }}
                loading="lazy"
              />
            </picture>
            <div
              className="absolute -bottom-4 -right-4 rounded-lg border px-3 py-2 font-mono text-[10px] uppercase tracking-widest shadow-lg"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              {profile.credential}
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 font-display text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              I keep infrastructure boring — on purpose.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-balance leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {summary}
            </motion.p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="rounded-xl border p-5"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <div className="font-display text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {p.label}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
