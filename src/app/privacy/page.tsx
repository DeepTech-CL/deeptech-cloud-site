import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This website is operated by DeepTech Cloud, an early-stage project. This page explains what the site does with your information.</p>
      <h2>What we collect</h2>
      <p>Only what you choose to send us, for example when you email us: your email address and the contents of your message. We use it solely to reply to you.</p>
      <h2>What we don&apos;t do</h2>
      <p>The interactive preview on this site is a prototype. Text you type into it stays in your browser and is not sent to us or to any AI service. Please do not paste real logs or secrets.</p>
      <h2>Hosting</h2>
      <p>This site is served by GitHub Pages and may be fronted by Cloudflare. Those providers process visitor IP addresses and standard request logs under their own privacy policies; we do not receive or use that data.</p>
      <h2>Storage and sharing</h2>
      <p>This website has no forms, accounts or analytics. Emails you send us are held in our mailbox. We do not sell your information.</p>
      <h2>Your choices</h2>
      <p>To ask for access to, correction of, or deletion of your data, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
