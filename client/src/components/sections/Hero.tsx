import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { DataFlowAnimation } from "@/components/ui/DataFlowAnimation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#020202]">
      {/* Dynamic Background Animation */}
      <DataFlowAnimation />
      
      {/* Visual Depth Gradients */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,transparent_0%,rgba(2,2,2,0.3)_40%,rgba(2,2,2,0.9)_80%,rgba(2,2,2,1)_100%)]" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-10 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI-Powered Investor Discovery
            </div>
            
            {/* Reduced Font Size for Better Balance */}
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-10 tracking-tight">
              Scale your fundraising <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/30">without the grind.</span>
            </h1>
            
            {/* Optimized Description */}
            <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 max-w-xl font-medium">
              We leverage multi-channel intelligence to identify active investors and launch hyper-personalized campaigns that secure <span className="text-white">qualified meetings</span> with the right check-writers.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-20">
              <Button size="lg" className="text-base font-black rounded-full h-16 px-12 bg-white text-black hover:bg-white/90 shadow-[0_15px_35px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] active:scale-[0.97] group">
                Start Fundraising
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-black rounded-full h-16 px-10 bg-white/5 backdrop-blur-2xl border-white/10 hover:bg-white/10 transition-all text-white/90">
                How it works
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/5 pt-12">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Data</span>
                </div>
                <p className="text-sm text-white/30 leading-relaxed">Cross-referenced signals from LinkedIn, X, and direct news.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Targeted Outreach</span>
                </div>
                <p className="text-sm text-white/30 leading-relaxed">Highly specific messaging based on recent investment thesis.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Full Automation</span>
                </div>
                <p className="text-sm text-white/30 leading-relaxed">From first contact to scheduling, we handle the logistics.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
