import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { projects } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured engineering work"
          title="Case studies from live client engagements."
          description="Not side projects — production platforms, in regulated industries, with real users and real incident cost."
        />

        <div className="space-y-5">
          {projects.map((p, i) => {
            const open = openIdx === i;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="overflow-hidden rounded-2xl border"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full flex-col items-start justify-between gap-4 p-6 text-left sm:flex-row sm:items-center sm:p-8"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                      {p.client}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{p.name}</h3>
                    <p className="mt-2 text-sm" style={{ color: "var(--text-faint)" }}>
                      {p.role}
                    </p>
                  </div>
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {open ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t px-6 pb-8 pt-6 sm:px-8" style={{ borderColor: "var(--border)" }}>
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                          <div>
                            <h4 className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                              Problem
                            </h4>
                            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                              {p.problem}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                              Engineering
                            </h4>
                            <ul className="mt-3 space-y-2">
                              {p.engineering.map((e, j) => (
                                <li key={j} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                                  {e}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
                              Impact
                            </h4>
                            <ul className="mt-3 space-y-2">
                              {p.impact.map((e, j) => (
                                <li key={j} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--teal)" }}>
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--teal)" }} />
                                  <span style={{ color: "var(--text-muted)" }}>{e}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2 border-t pt-6" style={{ borderColor: "var(--border)" }}>
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide"
                              style={{ borderColor: "var(--border)", color: "var(--text-faint)" }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
