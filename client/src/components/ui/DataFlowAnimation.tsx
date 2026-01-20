import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Globe, CheckCircle2, User, DollarSign, Facebook, MessageSquareText } from "lucide-react";
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
      {/* Background Glows - Subtle and clean */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-yellow-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[180px]" />

      <div className="relative h-full w-full flex items-center justify-between px-6 lg:px-20 max-w-[1800px] mx-auto">
        
        {/* Left Side: Data Intelligence */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/3 flex flex-col gap-4 relative"
        >
          <h5 className="text-white/20 text-[11px] font-black uppercase tracking-[0.5em] mb-4">Intelligence Engine</h5>
          
          <div className="flex flex-col gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", color: "text-blue-400" },
              { icon: XIcon, label: "X / Twitter", color: "text-white" },
              { icon: Facebook, label: "Facebook", color: "text-blue-600" },
              { icon: Globe, label: "Web Signals", color: "text-emerald-400" }
            ].map((source, i) => (
              <motion.div
                key={i}
                animate={{ 
                  x: [0, 15, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, delay: i * 0.4, repeat: Infinity }}
                className="flex items-center gap-4 bg-white/[0.04] border border-white/5 p-4 rounded-2xl backdrop-blur-2xl"
              >
                <source.icon className={`h-6 w-6 ${source.color}`} />
                <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Scanning {source.label}...</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            animate={{ 
              scale: [0.98, 1.02, 0.98]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-6 p-6 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-3xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageSquareText className="h-5 w-5 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Personalizing Outreach</span>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/3 bg-primary/40 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                />
              </div>
              <div className="h-2 w-3/4 bg-white/5 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Center: Intelligence Hub Connection - Logo/Symbol Removed */}
        <div className="flex flex-col items-center justify-center relative">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-48 h-48 rounded-full border border-dashed border-white/10 flex items-center justify-center relative"
          >
            <div className="absolute inset-8 rounded-full bg-white/[0.02] border border-white/10 backdrop-blur-sm" />
            
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-primary/5 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Connecting Lines Animation */}
          <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <div className="absolute h-[400px] w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        </div>

        {/* Right Side: Investor Matches */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-1/3 flex flex-col gap-4 relative"
        >
          <h5 className="text-white/20 text-[11px] font-black uppercase tracking-[0.5em] mb-4 text-right">Verified Capital</h5>
          
          <div className="space-y-4">
            {investors.map((investor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeStep === i ? 1 : 0.2,
                  x: activeStep === i ? 0 : 30,
                  scale: activeStep === i ? 1.05 : 0.95
                }}
                transition={{ duration: 0.6 }}
                className={`p-5 rounded-3xl border transition-all duration-500 ${
                  activeStep === i 
                  ? "bg-white/[0.08] border-primary/20 shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)] backdrop-blur-3xl" 
                  : "bg-white/[0.02] border-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <User className="h-5 w-5 text-white/60" />
                    </div>
                    <div>
                      <h6 className="text-sm font-bold text-white tracking-tight">{investor.name}</h6>
                      <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black">{investor.firm}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">{investor.stage}</span>
                    </div>
                    {activeStep === i && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[9px] font-black text-yellow-500 flex items-center gap-1"
                      >
                        <DollarSign className="h-3 w-3" /> MATCHED
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              x: [Math.random() * 1800 - 900, Math.random() * 1800 - 900],
              y: [Math.random() * 1200 - 600, Math.random() * 1200 - 600],
              opacity: [0, 0.4, 0],
            }}
            transition={{ duration: Math.random() * 10 + 5, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}
