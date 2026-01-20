import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { InvestorMatchingSection } from "@/components/sections/InvestorMatchingSection";
import { OutreachCampaignSection } from "@/components/sections/OutreachCampaignSection";
import { Phase07Section } from "@/components/sections/Phase07Section";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <InvestorMatchingSection />
        <OutreachCampaignSection />
        <Phase07Section />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
