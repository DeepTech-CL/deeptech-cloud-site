import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <LegalPage title="Terms of Service">
      <p>By using this website you agree to these terms. The site describes a product that is in early development.</p>
      <h2>No product yet</h2>
      <p>Features shown are planned or illustrative. Sample outputs use fictional data and are not diagnoses. Nothing on this site is a commitment to deliver any feature or date.</p>
      <h2>No warranty</h2>
      <p>The site is provided &quot;as is&quot;, without warranties of any kind. Any AI-generated analysis, when available, is a hypothesis that must be validated by a qualified engineer.</p>
      <h2>Contact</h2>
      <p>Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalPage>
  );
}
