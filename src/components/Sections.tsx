import { Mail } from "lucide-react";
import { Section, Window } from "./ui";

export function Problem() {
  const items = [
    ["The clues are scattered.", "Logs in one tool, runbooks in another, the last incident in someone's notes. Every investigation starts by collecting context."],
    ["We solve the same thing twice.", "A new engineer hits an error the team fixed last quarter, and nobody can find how."],
    ["The write-up comes last, and late.", "When the fire is out, people are tired. The report gets rushed, or never written."],
  ];
  return (
    <Section eyebrow="Why we're building this" title="Most of an incident is spent figuring out what you're looking at.">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-3">
        {items.map(([t, d]) => (
          <div key={t} className="border-t border-fg pt-5">
            <h3 className="text-lg font-semibold leading-snug">{t}</h3>
            <p className="mt-3 leading-relaxed text-muted">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Row({ n, title, body, flip = false, children }: { n: string; title: string; body: string; flip?: boolean; children: React.ReactNode }) {
  return (
    <div className="grid items-center gap-10 border-t border-line py-14 first:border-t-0 md:grid-cols-2 md:gap-16">
      <div className={flip ? "md:order-2" : ""}>
        <p className="font-mono text-xs text-accent">{n}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted">{body}</p>
      </div>
      <div className={`min-w-0 ${flip ? "md:order-1" : ""}`}>{children}</div>
    </div>
  );
}

export function Platform() {
  return (
    <div className="border-y border-line bg-soft/60">
      <Section
        id="platform" eyebrow="Platform" title="From a wall of errors to a clear next step."
        intro="What we're building, feature by feature. Screens on this page show illustrative sample data."
      >
        <div>
          <Row n="01" title="Log analysis that shows what matters" body="Paste logs or error messages and see the related errors grouped, the first failure marked, and the lines worth reading highlighted.">
            <Window title="Log analysis" dark>
              <div className="overflow-x-auto p-3 font-mono text-[11px] leading-[1.75] text-slate-400">
                {[
                  ["09:41:07  WARN   db pool wait 412ms (20/20)", false],
                  ["09:41:08  ERROR  acquire connection timed out", true],
                  ["09:41:08  INFO   GET /health 200", false],
                  ["09:41:09  ERROR  acquire connection timed out", true],
                  ["09:41:10  ERROR  POST /v1/orders 503", true],
                ].map(([l, err]) => (
                  <div key={l as string} className={`whitespace-pre rounded px-1.5 ${err ? "bg-red-500/15 text-red-300" : ""}`}>{l as string}</div>
                ))}
              </div>
              <p className="border-t border-slate-800 px-4 py-2.5 font-mono text-[11px] text-slate-500">3 related errors · first seen 09:41:08</p>
            </Window>
          </Row>
          <Row flip n="02" title="Find the right doc without the tab hunt" body="Ask in plain language. Get the section of your runbooks or product docs that applies, with the source shown so you can read it yourself.">
            <Window title="Knowledge search">
              <div className="space-y-3 p-4">
                <p className="rounded-md border border-line bg-paper px-3 py-2 text-sm text-fg">connection pool timeout after deploy</p>
                {[["runbooks/database.md", "Resizing the connection pool"], ["postmortems/2025-11.md", "Pool exhaustion after a config change"]].map(([src, t]) => (
                  <div key={src} className="rounded-md border border-line p-3">
                    <p className="font-mono text-[11px] text-accent">{src}</p>
                    <p className="mt-1 text-sm font-medium">{t}</p>
                  </div>
                ))}
              </div>
            </Window>
          </Row>
          <Row n="03" title="A root-cause draft you can edit" body="Symptoms, evidence, possible causes and what to check next, in one structured document. Observed facts and suggestions are kept apart.">
            <Window title="Root-cause analysis · draft">
              <dl className="space-y-3 p-4 text-[13px] leading-snug">
                {[["Symptoms", "503s on POST /v1/orders from 09:41."], ["Evidence", "Pool at 20/20; timeouts follow the v2.18.0 rollout."], ["Possible cause", "Connections held longer after the release (unverified)."], ["Next steps", "Diff pool config; inspect idle transactions."]].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3">
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </Window>
          </Row>
          <Row flip n="04" title="Updates people can actually read" body="Turn your notes into a clear summary for your team, or a plain-language explanation for a customer. Edit it, then send it your way.">
            <Window title="Customer update · draft">
              <div className="space-y-3 p-4 text-[13px] leading-relaxed text-muted">
                <p className="text-fg">Subject: Order creation errors this morning</p>
                <p>Between 09:41 and 10:05 some orders failed to submit. The cause was a database connection limit reached after our latest release. We&apos;ve adjusted it and are monitoring closely.</p>
              </div>
            </Window>
          </Row>
        </div>
      </Section>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    ["Add what you have", "Logs, error messages, incident notes."],
    ["Pull in context", "Relevant documentation and past incidents."],
    ["Get a first read", "Likely causes and checks, with the evidence."],
    ["Review and share", "Edit the findings, then export the report."],
  ];
  return (
    <Section id="how-it-works" eyebrow="How it works" title="Four steps. You stay in charge.">
      <ol className="grid gap-y-8 md:grid-cols-4">
        {steps.map(([t, d], i) => (
          <li key={t} className="relative pr-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fg text-sm font-medium text-white">{i + 1}</span>
              <span aria-hidden="true" className="hidden h-px flex-1 bg-line md:block" />
            </div>
            <h3 className="mt-5 font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
          </li>
        ))}
      </ol>
      <p className="mt-12 max-w-2xl border-l-2 border-accent pl-4 text-[15px] leading-relaxed text-muted">
        <span className="font-medium text-fg">Engineers make the final call.</span> The assistant suggests; people verify before anything is changed or shared.
      </p>
    </Section>
  );
}

export function Solutions() {
  const items = [
    ["SaaS engineering", "Triage production errors faster and keep investigation notes consistent across the team."],
    ["IT support", "Make sense of error messages and recurring tickets with less manual searching."],
    ["DevOps & SRE", "Line up deploys, config changes and log patterns while an incident is still open."],
    ["Technical support", "Turn engineering findings into explanations a customer can follow."],
    ["Incident management", "Draft timelines, summaries and post-incident reports from evidence you already have."],
  ];
  return (
    <div className="border-y border-line bg-soft/60">
      <Section id="solutions" eyebrow="Solutions" title="For the people who get the page.">
        <ul className="grid gap-x-16 md:grid-cols-2">
          {items.map(([t, d]) => (
            <li key={t} className="border-t border-line py-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 leading-relaxed text-muted">{d}</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

export function Principles() {
  const items = [
    ["Evidence first", "Every finding should point back to the log line or document it came from."],
    ["People decide", "Suggestions are for engineers to evaluate. Nothing is applied automatically."],
    ["Careful with data", "Technical data is sensitive. We aim to handle as little as we can and to be clear about it."],
    ["Facts and guesses, kept apart", "What was observed and what the AI suggests are always shown separately."],
  ];
  return (
    <Section
      eyebrow="Principles" title="How we think about building this."
      intro="We're an early-stage company, and we don't claim certifications or compliance standards we haven't earned."
    >
      <ol className="grid gap-x-16 md:grid-cols-2">
        {items.map(([t, d], i) => (
          <li key={t} className="flex gap-5 border-t border-line py-6">
            <span className="font-mono text-sm text-accent">0{i + 1}</span>
            <div><h3 className="font-semibold">{t}</h3><p className="mt-2 leading-relaxed text-muted">{d}</p></div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Roadmap() {
  const phases = [
    ["Now", "Define the workflow", "Work out which troubleshooting steps matter most and check them with engineers."],
    ["Next", "Build the first version", "An MVP for log analysis and root-cause report drafts."],
    ["Then", "Connect your knowledge", "Documentation search and answers that cite their sources."],
    ["After", "Work with real teams", "Pilot with early users, measure results, improve reliability."],
  ];
  return (
    <div className="border-y border-line bg-soft/60">
      <Section id="roadmap" eyebrow="Roadmap" title="Where we're headed." intro="Our current plan. It will change as we learn, and it isn't a promise of dates.">
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute left-[7px] top-2 hidden h-px w-[calc(100%-1rem)] bg-line md:block" />
          {phases.map(([when, t, d], i) => (
            <li key={t} className="relative">
              <span className={`relative z-10 block h-[15px] w-[15px] rounded-full border-2 ${i === 0 ? "border-accent bg-accent" : "border-fg/40 bg-paper"}`} />
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">{when}</p>
              <h3 className="mt-1.5 font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}

export function Company() {
  return (
    <Section id="company" eyebrow="Company" title="A small team working on a practical problem.">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="max-w-xl space-y-4 leading-relaxed text-muted">
          <p>
            DeepTech Cloud is building an AI assistant for technical troubleshooting. We think investigating a problem
            should feel organised and explainable, not like searching for a needle in a stack of logs.
          </p>
          <p>
            We&apos;re at the start: defining the workflow, building the first version, and learning from the engineers and
            support teams who handle incidents every day.
          </p>
        </div>
        <div className="self-start border-t border-fg pt-5">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-accent font-semibold text-white">DS</span>
            <div><p className="font-semibold">Deep Saha</p><p className="text-sm text-muted">Founder</p></div>
          </div>
          <a className="mt-4 inline-flex items-center gap-2 text-sm text-fg underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-accent" href="mailto:deep@deeptechcloud.online">
            <Mail size={15} aria-hidden="true" /> deep@deeptechcloud.online
          </a>
        </div>
      </div>
    </Section>
  );
}
