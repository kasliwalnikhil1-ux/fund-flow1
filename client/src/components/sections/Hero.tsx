import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { DataFlowAnimation } from "@/components/ui/DataFlowAnimation";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Animation */}
      <DataFlowAnimation />
      
      {/* Gradient Overlay for Text Readability - Updated for deeper theme */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/60 to-background" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md border border-primary/20 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Investor Discovery
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1] mb-8 tracking-tighter">
              The platform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-white">for founders</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Lemni helps you identify and reach the right investors—those actively funding and aligned with your stage and industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-14">
              <Button size="lg" className="text-base font-bold rounded-full h-14 px-12 bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all hover:scale-105 active:scale-95 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-bold rounded-full h-14 px-10 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all shadow-xl">
                Watch Video
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-5 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                <span>Investor Discovery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                <span>Hyper-Personalized</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                <span>Multi-Channel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
