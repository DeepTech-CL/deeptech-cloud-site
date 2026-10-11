import type { ReactNode } from "react";
import { SITE } from "@/lib/site";
import { Footer } from "./Footer";
import { Wordmark } from "./ui";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <a href={`${SITE.basePath}/`} aria-label="Back to home"><Wordmark /></a>
          <a href={`${SITE.basePath}/`} className="text-sm font-medium text-muted hover:text-fg">← Back to site</a>
        </div>
      </header>
      <main id="main" className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: October 2026</p>
        <div className="mt-8 space-y-4 leading-relaxed text-muted [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-fg [&_a]:text-accent [&_a]:underline">{children}</div>
      </main>
      <Footer />
    </>
  );
}
