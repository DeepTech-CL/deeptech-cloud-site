import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

export function Wordmark({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-[17px] font-semibold tracking-tight ${light ? "text-white" : "text-fg"} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${SITE.basePath}/icon.svg`} alt="" width={26} height={26} className="rounded-md" />
      DeepTech Cloud
    </span>
  );
}

export function Section({
  id, eyebrow, title, intro, children, className = "",
}: { id?: string; eyebrow?: string; title: string; intro?: ReactNode; children?: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="max-w-2xl">
        {eyebrow && <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-accent">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold leading-[1.1] text-fg sm:text-[2.6rem]">{title}</h2>
        {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
      {children && <div className="mt-14">{children}</div>}
    </section>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-btn px-6 py-3 text-sm font-medium text-white transition hover:bg-btn-2 disabled:cursor-not-allowed disabled:opacity-60";
export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-medium text-fg transition hover:border-fg/40";

/** Small window chrome used around illustrative screens. */
export function Window({ title, children, dark = false, className = "" }: { title: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border ${dark ? "border-slate-800 bg-night" : "border-line bg-white"} shadow-[0_24px_60px_-24px_rgba(16,19,26,0.25)] ${className}`}>
      <div className={`flex items-center gap-3 border-b px-4 py-2.5 ${dark ? "border-slate-800" : "border-line bg-soft/60"}`}>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-slate-700" : "bg-line"}`} /><span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-slate-700" : "bg-line"}`} /><span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-slate-700" : "bg-line"}`} />
        </span>
        <span className={`truncate font-mono text-[11px] ${dark ? "text-slate-400" : "text-muted"}`}>{title}</span>
      </div>
      {children}
    </div>
  );
}
