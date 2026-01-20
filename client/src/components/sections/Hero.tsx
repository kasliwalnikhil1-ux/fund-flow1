import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { DataFlowAnimation } from "@/components/ui/DataFlowAnimation";
import { Link } from "wouter";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#020202] text-center scroll-mt-16">
      {/* Dynamic Background Animation */}
      <DataFlowAnimation />
      
      {/* Visual Depth Gradients - Centered focus */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,2,2,0.4)_50%,rgba(2,2,2,0.9)_80%,rgba(2,2,2,1)_100%)]" />

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-10 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Fundraising Infrastructure
            </div>
            
            {/* Simple but Grabby Headline - Centered */}
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1] mb-10 tracking-tighter">
              Raise capital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30">on autopilot.</span>
            </h1>
            
            {/* Description - Same as before, Centered */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl font-medium">
              We leverage multi-channel intelligence to identify active investors and launch hyper-personalized campaigns that secure <span className="text-white">qualified meetings</span> with the right check-writers.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-24 justify-center">
              <Link href="/login">
                <Button size="lg" className="text-base font-black rounded-full h-16 px-14 bg-white text-black hover:bg-white/90 shadow-[0_20px_45px_-10px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.05] active:scale-[0.95] group">
                  Start Free
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1.5" strokeWidth={3} />
                </Button>
              </Link>
              <a href="https://calendly.com/rajadurgarao567/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-base font-black rounded-full h-16 px-12 bg-white/5 backdrop-blur-2xl border-white/10 hover:bg-white/10 transition-all text-white/90">
                  Live Demo
                </Button>
              </a>
            </div>

            {/* Centered Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-white/5 pt-16 w-full">
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Data</span>
                </div>
                <p className="text-sm text-white/30 leading-relaxed">Cross-referenced signals from 40+ sources.</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Targeted Outreach</span>
                </div>
                <p className="text-sm text-white/30 leading-relaxed">Specific messaging based on thesis match.</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Full Automation</span>
                </div>
                <p className="text-sm text-white/30 leading-relaxed">From first contact to direct scheduling.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
