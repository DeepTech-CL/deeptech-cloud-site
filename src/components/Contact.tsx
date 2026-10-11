import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-20 pt-4 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-6xl rounded-2xl bg-night px-6 py-14 sm:px-12 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-[1.1] text-white sm:text-5xl">Tell us how your team handles incidents.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            We&apos;re shaping DeepTech Cloud with input from engineers and support teams. Tell us about your tools, your
            on-call reality, and what slows you down. We read every message and reply personally.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Hello%20DeepTech%20Cloud`}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-night transition hover:bg-slate-200"
          >
            {SITE.email} <ArrowRight size={16} aria-hidden="true" />
          </a>
          <p className="mt-6 text-xs text-slate-400">
            We use your message only to reply to you. <a className="underline" href={`${SITE.basePath}/privacy/`}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
}
