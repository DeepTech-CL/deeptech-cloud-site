"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Window, btnPrimary } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-gradient-to-b from-blue-tint via-[#f4f6ff] to-paper">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.02fr_1fr]">
        <motion.div initial={{ y: 12 }} animate={{ y: 0 }} transition={{ duration: 0.55 }}>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-accent ring-1 ring-accent/20"><span className="h-1.5 w-1.5 rounded-full bg-teal" />Troubleshooting for engineering &amp; IT support teams</p>
          <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.02] text-fg sm:text-6xl lg:text-[4.1rem]">
            Know what broke, <span className="text-accent">and why.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            DeepTech Cloud reads your logs, error messages and documentation, suggests what most likely went wrong, and
            drafts the incident report. Your engineers check the work and decide what to do.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#contact" className={btnPrimary}>Talk to us <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#how-it-works" className="text-sm font-medium text-fg underline decoration-line decoration-2 underline-offset-[6px] transition hover:decoration-accent">See how it works</a>
          </div>
          <p className="mt-10 max-w-md border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
            We&apos;re early and building this with the people who handle incidents every day. If that&apos;s you, we&apos;d like to hear how you do it today.
          </p>
        </motion.div>

        <motion.figure initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} aria-label="Product screen with sample data">
          <Window title="checkout-api · incident #1042" className="shadow-[0_30px_70px_-20px_rgba(35,64,255,0.35)]">
            <div className="grid grid-cols-1 sm:grid-cols-[1.15fr_1fr]">
              <div className="min-w-0 bg-night p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Logs</p>
                <pre className="mt-2.5 overflow-x-auto font-mono text-[11px] leading-[1.7] text-slate-400">
{`09:36:52 INFO  release v2.18.0
09:41:07 WARN  pool wait 412ms
`}<span className="rounded bg-red-500/20 text-red-300">{`09:41:08 ERROR acquire connection
         timed out (5000ms)  `}</span>{`
`}<span className="rounded bg-red-500/20 text-red-300">{`09:41:08 ERROR POST /v1/orders 503`}</span>{`
09:41:09 WARN  retry 2/5 ord_1042`}
                </pre>
              </div>
              <div className="min-w-0 space-y-3.5 p-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Likely cause</p>
                  <p className="mt-1 text-[13px] font-semibold leading-snug text-violet">Connection pool exhausted after v2.18.0</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Check next</p>
                  <ul className="mt-1 space-y-1 text-[12.5px] leading-snug text-muted">
                    <li>· Pool size, v2.17 vs v2.18</li>
                    <li>· Idle-in-transaction queries</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-teal-tint p-2.5 text-[12px] leading-snug text-muted">
                  <span className="font-medium text-fg">Draft report</span> · 503s on order creation, pool saturated. Awaiting review.
                </div>
              </div>
            </div>
          </Window>
          <figcaption className="mt-3 text-xs text-muted">Illustrative data.</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
