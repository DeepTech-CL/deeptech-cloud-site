import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Demo } from "@/components/Demo";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Company, HowItWorks, Platform, Problem, Roadmap, Solutions, Principles } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Platform />
        <HowItWorks />
        <Demo />
        <Solutions />
        <Principles />
        <Roadmap />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
