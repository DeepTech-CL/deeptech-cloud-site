"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { Wordmark, btnPrimary } from "./ui";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="DeepTech Cloud home"><Wordmark /></a>
        <ul className="hidden items-center gap-8 text-[14px] text-muted lg:flex">
          {NAV.map((n) => (
            <li key={n.href}><a href={n.href} className="transition hover:text-fg">{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className={`${btnPrimary} hidden !px-5 !py-2 sm:inline-flex`}>Contact us</a>
          <button
            type="button" className="rounded-md p-2 text-fg lg:hidden" aria-expanded={open}
            aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {NAV.map((n) => (
              <li key={n.href} className="border-b border-line/70">
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3.5 text-muted hover:text-fg">{n.label}</a>
              </li>
            ))}
            <li className="py-4"><a href="#contact" onClick={() => setOpen(false)} className={`${btnPrimary} w-full`}>Contact us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
