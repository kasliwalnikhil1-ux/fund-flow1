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
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-red-600/25 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/15 rounded-full blur-[180px]" />

      <div className="relative h-full w-full flex items-center justify-center">
        {/* Perspective Grid / Container to match the reference style */}
        <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center perspective-1000">
          
          {/* Central Hub - Enhanced Visibility */}
          <div className="relative z-10 w-48 h-48 rounded-[3rem] bg-card/40 border border-white/20 shadow-[0_0_80px_-12px_rgba(255,255,255,0.15)] backdrop-blur-3xl flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary/40 border-dashed rounded-[3rem]"
            />
            <Search className="h-16 w-16 text-primary drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
          </div>

          {/* Data Sources Orbiting - Larger and clearer */}
          {sources.map((source, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
                x: Math.cos((i * 120 * Math.PI) / 180) * 350,
                y: Math.sin((i * 120 * Math.PI) / 180) * 350,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
              className="absolute flex flex-col items-center gap-2"
            >
              <div className={`p-7 rounded-[2rem] bg-card/50 border border-white/20 shadow-2xl backdrop-blur-2xl ${source.color}`}>
                <source.icon className="h-10 w-10" />
              </div>
            </motion.div>
          ))}

          {/* Floating Investor Cards - Adjusted position and style to match reference image panels */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 100, y: 0, scale: 0.9, rotateY: 35 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotateY: 15 }}
              exit={{ opacity: 0, x: -100, y: 0, scale: 0.9, rotateY: -35 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="absolute right-[10%] top-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-96 p-8 rounded-[2.5rem] bg-card/60 border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] backdrop-blur-3xl overflow-hidden group">
                {/* Background Glow inside card */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-[60px] group-hover:bg-primary/30 transition-colors" />
                
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-2xl text-white tracking-tight">{mockInvestors[activeStep].name}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">{mockInvestors[activeStep].firm}</p>
                  </div>
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between py-5 border-y border-white/5">
                    <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Investment Thesis</span>
                    <span className="text-sm font-bold text-white/80">{mockInvestors[activeStep].stage}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-primary/20 border border-primary/30">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest">{mockInvestors[activeStep].status}</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-500 text-[10px] font-black tracking-[0.15em] bg-yellow-500/10 px-4 py-2 rounded-2xl border border-yellow-500/20">
                      <DollarSign className="h-4 w-4" />
                      QUALIFIED
                    </div>
                  </div>
                </div>

                {/* Glowing Scan Bar - To match the panel style */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
                  <motion.div 
                    className="h-full w-40 bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Multi-Color Particles - more visible */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full blur-[1px] ${
              i % 3 === 0 ? 'bg-red-500/50' : i % 3 === 1 ? 'bg-yellow-400/50' : 'bg-primary/50'
            }`}
            animate={{
              x: [Math.random() * 1600 - 800, Math.random() * 1600 - 800],
              y: [Math.random() * 1200 - 600, Math.random() * 1200 - 600],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
