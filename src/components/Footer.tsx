import { SITE } from "@/lib/site";
import { Wordmark } from "./ui";

export function Footer() {
  const B = SITE.basePath;
  const link = "text-muted transition hover:text-fg";
  return (
    <footer id="site-footer" className="border-t border-line bg-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Troubleshooting software for engineering and IT support teams.
          </p>
        </div>
        <nav aria-label="Footer" className="contents">
          <ul className="space-y-2.5 text-sm">
            <li className="font-semibold text-fg">Product</li>
            <li><a className={link} href={`${B}/#platform`}>Platform</a></li>
            <li><a className={link} href={`${B}/#how-it-works`}>How it works</a></li>
            <li><a className={link} href={`${B}/#solutions`}>Solutions</a></li>
            <li><a className={link} href={`${B}/#roadmap`}>Roadmap</a></li>
          </ul>
          <ul className="space-y-2.5 text-sm">
            <li className="font-semibold text-fg">Company</li>
            <li><a className={link} href={`${B}/#company`}>About</a></li>
            <li><a className={link} href={`${B}/#contact`}>Contact</a></li>
            <li><a className={link} href={`${B}/privacy/`}>Privacy Policy</a></li>
            <li><a className={link} href={`${B}/terms/`}>Terms of Service</a></li>
          </ul>
        </nav>
        <div className="space-y-2.5 text-sm">
          <p className="font-semibold text-fg">Get in touch</p>
          <p><a className={link} href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p><a className={link} href={SITE.url}>deeptechcloud.online</a></p>
        </div>
      </div>
      <p className="border-t border-line py-6 text-center text-xs text-muted">© {new Date().getFullYear()} DeepTech Cloud. All rights reserved.</p>
    </footer>
  );
}
