import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { roles } from "../data/resume";
import SectionHeading from "./SectionHeading";

export default function Timeline() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 md:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Career journey"
          title="A decade in IT, six years deep in AWS."
          description="From on-the-ground network support to owning production infrastructure for regulated enterprises — each role added a layer of the platform I now build."
        />

        <div className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 hidden w-px sm:block"
            style={{ background: "var(--border)" }}
            aria-hidden
          />
          <ol className="space-y-4">
            {roles.map((role, i) => {
              const open = openIdx === i;
              return (
                <motion.li
                  key={role.company + role.dates}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative sm:pl-8"
                >
                  <span
                    className="absolute left-0 top-6 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 sm:block"
                    style={{
                      background: role.current ? "var(--accent)" : "var(--bg)",
                      borderColor: "var(--accent)",
                    }}
                    aria-hidden
                  />
                  <div
                    className="overflow-hidden rounded-xl border"
                    style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                  >
                    <button
                      onClick={() => setOpenIdx(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full flex-col gap-3 p-5 text-left sm:flex-row sm:items-center sm:justify-between sm:p-6"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-semibold">{role.title}</h3>
                          {role.current && (
                            <span
                              className="rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest"
                              style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                          {role.company}
                          {role.client ? ` · ${role.client}` : ""}
                        </p>
                        <div
                          className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-wide"
                          style={{ color: "var(--text-faint)" }}
                        >
                          <span>{role.dates}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} /> {role.location}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={18}
                        className="shrink-0 transition-transform duration-300"
                        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "var(--text-faint)" }}
                      />
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
                          <div className="border-t px-5 pb-6 pt-5 sm:px-6" style={{ borderColor: "var(--border)" }}>
                            {role.clientContext && (
                              <p className="mb-4 text-sm italic" style={{ color: "var(--text-faint)" }}>
                                {role.clientContext}
                              </p>
                            )}
                            <ul className="space-y-2.5">
                              {role.points.map((p, j) => (
                                <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                                  {p}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {role.stack.map((s) => (
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
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
