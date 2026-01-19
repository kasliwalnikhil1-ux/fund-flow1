import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { DataFlowAnimation } from "@/components/ui/DataFlowAnimation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#050505]">
      {/* Dynamic Multi-Color Animation Background */}
      <DataFlowAnimation />
      
      {/* Vignette & Gradient Overlays for Depth */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_30%_50%,transparent_0%,rgba(5,5,5,0.4)_50%,rgba(5,5,5,1)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 z-10 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-10 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Verified Outreach Infrastructure
            </div>
            
            <h1 className="text-6xl md:text-[9rem] font-display font-bold leading-[0.85] mb-12 tracking-[-0.04em]">
              The engine <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40">for fundraising</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-14 max-w-2xl font-medium">
              We engineer hyper-personalized outreach campaigns that connect founders with the <span className="text-white">perfect investors</span>—those actively writing checks in your category today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-20">
              <Button size="lg" className="text-base font-black rounded-full h-16 px-14 bg-white text-black hover:bg-white/90 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.03] active:scale-[0.98] group">
                Launch Campaign
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1.5" strokeWidth={3} />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-black rounded-full h-16 px-12 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all shadow-2xl uppercase tracking-widest text-white/80">
                View Thesis
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-white/5 pt-12">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-xs font-black uppercase tracking-widest">Active Discovery</span>
                </div>
                <p className="text-sm text-white/30 font-medium">Real-time capital deployment signals from 40+ sources.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-xs font-black uppercase tracking-widest">Hyper-Personalized</span>
                </div>
                <p className="text-sm text-white/30 font-medium">Messages crafted from specific investor interviews & thesis.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={3} />
                  <span className="text-xs font-black uppercase tracking-widest">Warm Setup</span>
                </div>
                <p className="text-sm text-white/30 font-medium">Direct scheduling into your calendar with qualified leads.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
