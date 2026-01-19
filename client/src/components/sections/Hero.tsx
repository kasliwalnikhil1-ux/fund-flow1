import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/abstract_digital_network_background_in_deep_blue.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40 z-10" />
        <img 
          src={heroBg} 
          alt="Network Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now accepting new founders
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
              Connect with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Right Investors</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We help founders identify active investors, run hyper-personalized outreach campaigns, and book qualified meetings—without the grunt work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-base rounded-full h-12 px-8 shadow-lg shadow-primary/25">
                Start Your Campaign
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base rounded-full h-12 px-8 bg-background/50 backdrop-blur-sm">
                View Case Studies
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Targeted Discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Multi-Channel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Pay for Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
