import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { InvestorMatchingSection } from "@/components/sections/InvestorMatchingSection";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <InvestorMatchingSection />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
