import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Globe, CheckCircle2, Search, User, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

const sources = [
  { icon: Linkedin, color: "text-blue-400", label: "LinkedIn" },
  { icon: Twitter, color: "text-sky-400", label: "X / Twitter" },
  { icon: Globe, color: "text-purple-400", label: "Web Intelligence" },
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
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background Glows with Yellow, Red, and Purple (Vibrant & Clean) */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[180px]" />

      <div className="relative h-full w-full flex items-center justify-center">
        {/* Central Hub */}
        <div className="relative z-10 w-40 h-40 rounded-[2.5rem] bg-card/80 border border-white/10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] backdrop-blur-2xl flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-primary/30 border-dashed rounded-[2.5rem]"
          />
          <Search className="h-12 w-12 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
        </div>

        {/* Data Sources Orbiting */}
        {sources.map((source, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [0.7, 1.1, 0.7],
              x: Math.cos((i * 120 * Math.PI) / 180) * 250,
              y: Math.sin((i * 120 * Math.PI) / 180) * 250,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            className="absolute flex flex-col items-center gap-2"
          >
            <div className={`p-5 rounded-3xl bg-card/60 border border-white/10 shadow-2xl backdrop-blur-md ${source.color}`}>
              <source.icon className="h-8 w-8" />
            </div>
          </motion.div>
        ))}

        {/* Floating Investor Cards - Shifted for better visibility */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 50, y: 50, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, x: -50, y: -50, scale: 0.8, rotateY: -45 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="absolute right-[5%] md:right-[15%] top-1/4 z-20"
          >
            <div className="w-80 p-7 rounded-3xl bg-card/90 border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5),0_0_40px_-10px_rgba(139,92,246,0.2)] backdrop-blur-3xl">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/5">
                  <User className="h-7 w-7 text-white/80" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-white">{mockInvestors[activeStep].name}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{mockInvestors[activeStep].firm}</p>
                </div>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-center justify-between py-4 border-y border-white/5">
                  <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Stage</span>
                  <span className="text-sm font-semibold text-white/90">{mockInvestors[activeStep].stage}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/20 border border-primary/30">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[10px] font-black text-primary uppercase tracking-wider">{mockInvestors[activeStep].status}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-yellow-500 text-[10px] font-black tracking-widest bg-yellow-500/10 px-3 py-1.5 rounded-xl border border-yellow-500/20">
                    <DollarSign className="h-3 w-3" />
                    MATCHED
                  </div>
                </div>
              </div>

              {/* Glowing Scan Line (More visible) */}
              <div className="h-1 bg-white/5 rounded-full mt-8 overflow-hidden relative">
                <motion.div 
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Multi-Color Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full blur-[1px] ${
              i % 3 === 0 ? 'bg-red-500/40' : i % 3 === 1 ? 'bg-yellow-400/40' : 'bg-primary/40'
            }`}
            animate={{
              x: [Math.random() * 1400 - 700, Math.random() * 1400 - 700],
              y: [Math.random() * 1200 - 600, Math.random() * 1200 - 600],
              opacity: [0, 0.7, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
