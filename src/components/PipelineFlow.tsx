import { motion } from "framer-motion";
import { pipelineStages } from "../data/resume";

export default function PipelineFlow() {
  return (
    <section className="py-20 md:py-24" aria-label="Deployment pipeline flow">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full animate-pulse-slow" style={{ background: "var(--teal)" }} />
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--text-faint)" }}>
            How a change reaches production
          </p>
        </div>

        <div
          className="relative overflow-x-auto rounded-2xl border p-6 sm:p-10"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <div className="flex min-w-[720px] items-center justify-between sm:min-w-0">
            {pipelineStages.map((stage, i) => (
              <div key={stage} className="flex flex-1 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full border font-mono text-[10px]"
                    style={{
                      borderColor: i === pipelineStages.length - 1 ? "var(--accent)" : "var(--border)",
                      background: "var(--bg)",
                      color: "var(--text)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                    {stage}
                  </span>
                </motion.div>
                {i < pipelineStages.length - 1 && (
                  <div className="relative mx-1 h-px flex-1 sm:mx-2" style={{ background: "var(--border)" }}>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "repeating-linear-gradient(90deg, var(--accent) 0 6px, transparent 6px 14px)",
                        opacity: 0.7,
                        animation: "bg-flow 1s linear infinite",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
