import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "../data/resume";
import InfraTopology from "./InfraTopology";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="grid-overlay pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="container-px relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ background: "var(--teal)" }}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--teal)" }} />
            </span>
            status: operational &middot; {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Engineering AWS infrastructure that ships fast{" "}
            <span style={{ color: "var(--accent)" }}>and stays up.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            AWS DevOps Engineer with {profile.yearsTotal} years in IT and {profile.yearsDevOps} years
            building CI/CD, Terraform, and Kubernetes platforms for insurance, banking, and retail
            workloads — {profile.credential}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-md px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)", color: "#0a0d13" }}
            >
              View engineering work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-md border px-5 py-3 font-mono text-xs font-medium uppercase tracking-widest transition-colors"
              style={{ borderColor: "var(--border)" }}
            >
              Get in touch
            </a>
            <a
              href="/Ganesh_M_Resume.pdf"
              download
              className="flex items-center gap-2 px-2 py-3 font-mono text-xs uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              <Download size={14} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex items-center gap-5"
            style={{ color: "var(--text-faint)" }}
          >
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:opacity-100" style={{ opacity: 0.85 }}>
              <Mail size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:opacity-100" style={{ opacity: 0.85 }}>
              <LinkedinIcon size={18} />
            </a>
            <span className="font-mono text-xs">{profile.phone}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="absolute -top-6 -left-6 hidden h-24 w-24 rounded-full blur-3xl sm:block"
            style={{ background: "var(--accent)", opacity: 0.15 }}
          />
          <div
            className="rounded-2xl border p-6"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-faint)" }}>
              <span>deploy_pipeline.tf</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--teal)" }} />
                live
              </span>
            </div>
            <InfraTopology className="h-auto w-full" />
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-widest md:flex"
        style={{ color: "var(--text-faint)" }}
        aria-label="Scroll to About section"
      >
        scroll
        <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
