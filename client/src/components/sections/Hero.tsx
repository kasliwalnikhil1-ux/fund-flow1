import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { DataFlowAnimation } from "@/components/ui/DataFlowAnimation";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Animation */}
      <DataFlowAnimation />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Intelligent Investor Discovery
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
              Identify & Reach Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-400">Perfect Investors</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We scrape millions of data points from LinkedIn, X, and the web to find investors actively funding companies exactly like yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-base rounded-full h-14 px-10 shadow-lg shadow-primary/25 hover-elevate group">
                Start Discovery
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base rounded-full h-14 px-10 bg-background/50 backdrop-blur-sm border-border/50">
                How we verify data
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Actively Funding Signals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Verified Contact Data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Hyper-Personalized Content</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
