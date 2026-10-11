"use client";
import { useRef, useState } from "react";
import { Loader2, Play, RotateCcw } from "lucide-react";
import { SAMPLE_LOG, SAMPLE_RESULT } from "@/lib/sample";
import { Section, btnPrimary, btnSecondary } from "./ui";

type State = "idle" | "loading" | "done";
const MAX_CHARS = 4000;

export function Demo() {
  const [log, setLog] = useState(SAMPLE_LOG);
  const [state, setState] = useState<State>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const empty = log.trim().length === 0;

  function analyze() {
    if (empty) return;
    setState("loading");
    // Simulated delay only. No network request is made and no AI model is called.
    timer.current = setTimeout(() => setState("done"), 900);
  }
  function reset() {
    if (timer.current) clearTimeout(timer.current);
    setLog(SAMPLE_LOG);
    setState("idle");
  }

  return (
    <Section
      eyebrow="Product preview" title="Try a sample investigation."
      intro="Press Analyze to walk through the workflow with a sample incident. Everything here stays in your browser."
    >
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_60px_-24px_rgba(16,19,26,0.25)]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-soft/60 px-4 py-2.5">
          <span className="font-mono text-[11px] text-muted">workspace · sample incident</span>
          <span className="text-[11px] text-muted">Illustrative data</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="min-w-0 border-b border-line p-5 lg:border-b-0 lg:border-r">
            <label htmlFor="log-input" className="font-mono text-[11px] uppercase tracking-widest text-muted">Logs and error messages</label>
            <textarea
              id="log-input" value={log} maxLength={MAX_CHARS} spellCheck={false}
              onChange={(e) => { setLog(e.target.value); if (state === "done") setState("idle"); }}
              className="mt-2 h-64 w-full resize-y rounded-lg bg-night p-3 font-mono text-xs leading-6 text-slate-300"
              aria-describedby="log-help"
            />
            <p id="log-help" className="mt-2 text-xs text-muted">Sample data. Please don&apos;t paste real logs or secrets. {log.length}/{MAX_CHARS}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={analyze} disabled={empty || state === "loading"} className={btnPrimary}>
                {state === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
                {state === "loading" ? "Analyzing…" : "Analyze"}
              </button>
              <button type="button" onClick={reset} className={btnSecondary}><RotateCcw size={16} /> Reset sample</button>
            </div>
            {empty && <p role="alert" className="mt-3 text-sm text-amber-700">Add some log text to analyze.</p>}
          </div>

          <div className="min-w-0 p-5" aria-live="polite">
            {state === "idle" && <p className="flex min-h-40 items-center justify-center text-center text-sm text-muted">Results appear here. Press Analyze to see a sample.</p>}
            {state === "loading" && <p className="flex min-h-40 items-center justify-center gap-2 text-sm text-muted"><Loader2 className="animate-spin" size={16} /> Preparing sample findings…</p>}
            {state === "done" && <Result />}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Result() {
  const r = SAMPLE_RESULT;
  const h = "font-mono text-[11px] uppercase tracking-widest text-muted";
  return (
    <div className="space-y-5 text-sm">
      <div>
        <h3 className={h}>Observed</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">{r.findings.map((f) => <li key={f.text}>{f.text}</li>)}</ul>
      </div>
      <div className="rounded-lg border border-line bg-soft p-4">
        <h3 className={h}>Likely cause · unverified</h3>
        <p className="mt-2 font-semibold text-fg">{r.hypothesis.title}</p>
        <p className="mt-1 text-muted">{r.hypothesis.body}</p>
      </div>
      <div>
        <h3 className={h}>Suggested checks</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-muted">{r.checks.map((c) => <li key={c}>{c}</li>)}</ol>
      </div>
      <div>
        <h3 className={h}>Draft incident report</h3>
        <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-lg border border-line bg-soft p-3 font-mono text-xs leading-6 text-muted">{r.report}</pre>
      </div>
    </div>
  );
}
