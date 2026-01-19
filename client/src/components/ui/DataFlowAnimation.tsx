import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Globe, CheckCircle2, Search, User, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

const sources = [
  { icon: Linkedin, color: "text-blue-500", label: "LinkedIn" },
  { icon: Twitter, color: "text-sky-400", label: "X / Twitter" },
  { icon: Globe, color: "text-purple-500", label: "Web Intelligence" },
];

const mockInvestors = [
  { name: "Sarah Chen", firm: "Nexus Ventures", stage: "Seed - Series A", status: "Actively Funding" },
  { name: "Marc Andreessen", firm: "a16z", stage: "Late Stage", status: "Strategic Only" },
  { name: "Elena Rodriguez", firm: "Green Horizons", stage: "Pre-seed", status: "Actively Funding" },
];

export function DataFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      {/* Background Glows updated to purple/violet */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative h-full w-full flex items-center justify-center">
        {/* Central Hub */}
        <div className="relative z-10 w-32 h-32 rounded-3xl bg-card border border-border/50 shadow-2xl flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-primary/20 border-dashed rounded-3xl"
          />
          <Search className="h-10 w-10 text-primary" />
        </div>

        {/* Data Sources Orbiting */}
        {sources.map((source, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1, 0.8],
              x: Math.cos((i * 120 * Math.PI) / 180) * 180,
              y: Math.sin((i * 120 * Math.PI) / 180) * 180,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute flex flex-col items-center gap-2"
          >
            <div className={`p-4 rounded-2xl bg-card/80 border border-border/50 shadow-xl ${source.color}`}>
              <source.icon className="h-6 w-6" />
            </div>
          </motion.div>
        ))}

        {/* Floating Investor Cards with Purple Tint */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 100, scale: 0.9, rotateY: 30 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, x: -100, scale: 0.9, rotateY: -30 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="absolute right-10 md:right-40 top-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-80 p-6 rounded-2xl bg-card/90 border border-primary/20 shadow-[0_0_80px_-15px_rgba(139,92,246,0.3)] backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-border/50">
                  <User className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-foreground">{mockInvestors[activeStep].name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{mockInvestors[activeStep].firm}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs py-3 border-y border-border/30">
                  <span className="text-muted-foreground uppercase">Target Stage</span>
                  <span className="font-medium text-foreground">{mockInvestors[activeStep].stage}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    <CheckCircle2 className="h-3.3 w-3.3" />
                    {mockInvestors[activeStep].status}
                  </span>
                  <div className="flex items-center gap-1 text-primary text-xs font-bold tracking-tighter">
                    <DollarSign className="h-3 w-3" />
                    MATCHED
                  </div>
                </div>
              </div>

              {/* Glowing Scan Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-0.5 bg-primary/30 rounded-full mt-6 overflow-hidden relative"
              >
                <motion.div 
                  className="absolute inset-0 bg-primary shadow-[0_0_15px_hsl(var(--primary))]"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Decorative Particles (Purple) */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            animate={{
              x: [Math.random() * 1200 - 600, Math.random() * 1200 - 600],
              y: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
