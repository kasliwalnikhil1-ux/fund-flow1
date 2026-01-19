import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Linkedin, 
  Globe, 
  CheckCircle2, 
  Search, 
  Database, 
  Cpu, 
  Zap, 
  Filter, 
  Layers,
  LineChart,
  Target
} from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// High-fidelity logos/icons for data sources
const dataSources = [
  { name: "LinkedIn", icon: Linkedin, color: "#0077B5" },
  { name: "Sales Navigator", icon: Search, color: "#00a0dc" },
  { name: "X", icon: XIcon, color: "#ffffff" },
  { name: "Crunchbase", icon: Database, color: "#0288d1" },
  { name: "PitchBook", icon: LineChart, color: "#e53935" },
  { name: "Apollo", icon: Target, color: "#ff8f00" },
];

const industries = ["SaaS", "Biotech", "EdTech", "FinTech", "AI", "CleanTech"];

export function InvestorMatchingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#020202] py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intro Text */}
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Surgical Precision. <br />
            <span className="text-primary">Matched on Autopilot.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-xl"
          >
            We don't just find investors. We verify their activity, analyze their thesis, and match you with the ones actively funding your sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Data Source Aggregation */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Background Data Stream Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
            </div>

            {/* Source Icons Orbiting a Central Engine */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-white/10 rounded-full"
              />
              
              <div className="z-10 bg-card/80 border border-white/10 p-8 rounded-3xl backdrop-blur-3xl shadow-2xl">
                <Cpu className="h-12 w-12 text-primary animate-pulse" />
              </div>

              {dataSources.map((source, i) => (
                <motion.div
                  key={source.name}
                  animate={{ 
                    rotate: -360,
                  }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute"
                  style={{
                    transform: `rotate(${i * (360 / dataSources.length)}deg) translateY(-140px)`
                  }}
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl group hover:border-primary/50 transition-colors">
                      <source.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{source.name}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Verification & Sector Matching */}
          <div className="relative">
            <div className="space-y-8">
              {/* Profile Analysis Panel */}
              <motion.div 
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl"
                whileHover={{ borderColor: "rgba(139, 92, 246, 0.3)" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Filter className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Neural Thesis Analysis</h4>
                    <p className="text-sm text-white/40">Analyzing recent check sizes & sector focus</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {industries.map((ind, i) => (
                    <motion.div 
                      key={ind}
                      animate={{ 
                        opacity: activeIndustry === i ? 1 : 0.3,
                        scale: activeIndustry === i ? 1.05 : 1,
                        backgroundColor: activeIndustry === i ? "rgba(139, 92, 246, 0.1)" : "rgba(255, 255, 255, 0.02)"
                      }}
                      className="p-4 rounded-2xl border border-white/5 flex items-center justify-between"
                    >
                      <span className="text-xs font-bold text-white/80 tracking-widest uppercase">{ind}</span>
                      {activeIndustry === i && (
                        <motion.div 
                          layoutId="active-ind"
                          className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,1)]"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Match Output */}
              <motion.div 
                className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-3xl overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4">
                  <Zap className="h-5 w-5 text-primary animate-bounce" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Active Signal Detected</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <Layers className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-white/80">Investment Probability</span>
                    </div>
                    <span className="text-sm font-black text-primary">94.8%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm font-medium text-white/80">Thesis Alignment</span>
                    </div>
                    <span className="text-sm font-black text-emerald-500">VERIFIED</span>
                  </div>
                </div>

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]" />
    </section>
  );
}
