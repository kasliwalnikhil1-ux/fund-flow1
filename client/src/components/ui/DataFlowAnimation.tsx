import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Globe, CheckCircle2, User, DollarSign, Facebook, MessageSquareText, Database } from "lucide-react";
import { useEffect, useState } from "react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const investors = [
  { name: "Sarah Chen", firm: "Nexus", stage: "Seed" },
  { name: "Marc A.", firm: "a16z", stage: "Series A" },
  { name: "Elena R.", firm: "Green", stage: "Pre-seed" },
  { name: "David K.", firm: "Sutter", stage: "Seed" },
];

export function DataFlowAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-yellow-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[180px]" />

      <div className="relative h-full w-full flex items-center justify-between px-10 max-w-[1600px] mx-auto">
        
        {/* Left Side: Data Scraping & Personalization */}
        <div className="w-1/3 flex flex-col gap-6 relative">
          <h5 className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Intelligence Engine</h5>
          
          {/* Source Scrapers */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Linkedin, label: "LinkedIn", color: "text-blue-400" },
              { icon: XIcon, label: "X / Twitter", color: "text-white" },
              { icon: Facebook, label: "Facebook", color: "text-blue-600" },
              { icon: Globe, label: "Web Intelligence", color: "text-emerald-400" }
            ].map((source, i) => (
              <motion.div
                key={i}
                animate={{ 
                  x: [0, 10, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-3 rounded-2xl backdrop-blur-xl"
              >
                <source.icon className={`h-5 w-5 ${source.color}`} />
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Scraping {source.label}...</span>
              </motion.div>
            ))}
          </div>

          {/* DM Preparation Animation */}
          <motion.div 
            animate={{ scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 p-6 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageSquareText className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Crafting Personalized DM</span>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full w-1/2 bg-primary"
                />
              </div>
              <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Center: Processing Hub */}
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center relative"
          >
            <Database className="h-8 w-8 text-white/20" />
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>

        {/* Right Side: Multiple Smaller Investor Match Cards */}
        <div className="w-1/3 flex flex-col gap-4 relative">
          <h5 className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-right">Verified Matches</h5>
          
          <div className="space-y-3">
            {investors.map((investor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeStep === i ? 1 : 0.3,
                  x: activeStep === i ? 0 : 20,
                  scale: activeStep === i ? 1.05 : 0.95
                }}
                className={`p-4 rounded-2xl border transition-all duration-500 ${
                  activeStep === i 
                  ? "bg-white/[0.08] border-primary/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]" 
                  : "bg-white/[0.02] border-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <User className="h-4 w-4 text-white/60" />
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-white">{investor.name}</h6>
                      <p className="text-[8px] text-white/30 uppercase tracking-widest">{investor.firm}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle2 className="h-2 w-2 text-emerald-500" />
                      <span className="text-[8px] font-black text-emerald-500 uppercase">{investor.stage}</span>
                    </div>
                    {activeStep === i && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[8px] font-black text-yellow-500 flex items-center gap-0.5"
                      >
                        <DollarSign className="h-2 w-2" /> MATCH
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            animate={{
              x: [Math.random() * 1400 - 700, Math.random() * 1400 - 700],
              y: [Math.random() * 1000 - 500, Math.random() * 1000 - 500],
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}
