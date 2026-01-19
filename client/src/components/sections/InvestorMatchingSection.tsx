import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Linkedin, 
  Globe, 
  Search, 
  Database, 
  Cpu, 
  Zap, 
  LineChart,
  Target,
  Layout,
  Table,
  Share2
} from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const User = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const DollarSign = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

// Updated data sources as per user request
const dataSources = [
  { name: "LinkedIn", icon: Linkedin, color: "#0077B5" },
  { name: "X", icon: XIcon, color: "#000000" },
  { name: "Sales Nav", icon: Search, color: "#00a0dc" },
  { name: "Apollo.io", icon: Target, color: "#ff8f00" },
  { name: "Bright Data", icon: Globe, color: "#0071C5" },
  { name: "Crunchbase", icon: Database, color: "#0288d1" },
];

const industries = [
  { name: "SaaS", icon: Cpu },
  { name: "Biotech", icon: Zap },
  { name: "EdTech", icon: Share2 },
  { name: "FinTech", icon: DollarSign },
];

export function InvestorMatchingSection() {
  const [step, setStep] = useState(0); // 0: data collection, 1: profile scan, 2: crm storage
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 1) {
      const interval = setInterval(() => {
        setActiveIndustry((prev) => (prev + 1) % industries.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <section className="relative min-h-screen bg-[#020202] py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight"
          >
            Investor-Matched. <br />
            <span className="text-primary">Powered by Intelligence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            We don't just find investors. We verify their activity, analyze and match you with the ones actively funding your sector.
          </motion.p>
        </div>

        {/* Animation Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div 
                key="collection"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Central Database Hub - Database Symbol */}
                <div className="relative z-10 w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.15)]">
                  <div className="flex flex-col items-center justify-center text-emerald-600">
                    <Database className="h-20 w-20" strokeWidth={2.5} />
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-emerald-400/10 rounded-full blur-2xl"
                  />
                </div>

                {/* Orbiting Source Icons (Specific User-Requested Logos) */}
                <div className="absolute inset-0 flex items-center justify-center">
                   {dataSources.map((source, i) => {
                     const radius = 260;
                     const angle = (i * 360) / dataSources.length;
                     return (
                       <motion.div
                         key={source.name}
                         initial={{ opacity: 0, scale: 0 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: i * 0.1 }}
                         className="absolute flex flex-col items-center gap-2"
                         style={{
                           transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`
                         }}
                       >
                         <div className="p-5 rounded-2xl bg-white shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform cursor-pointer border border-black/5">
                           <source.icon className="h-8 w-8 text-black" style={{ color: source.color === '#ffffff' ? '#000' : source.color }} />
                         </div>
                         <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-1">{source.name}</span>
                         <div className="absolute top-1/2 left-1/2 -z-10 w-[1px] h-[280px] bg-white/10 origin-bottom -translate-x-1/2 -translate-y-full" />
                       </motion.div>
                     );
                   })}
                   {/* Orbit Rings */}
                   <div className="absolute w-[520px] h-[520px] border border-dashed border-white/5 rounded-full" />
                </div>
                
                <div className="absolute bottom-0 text-primary font-black uppercase tracking-[0.4em] text-xs">
                   Phase 1: Multi-Source Intelligence Gathering
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div 
                key="profiling"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              >
                <div className="col-span-1 p-8 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden h-[400px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Investor DNA</h4>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Scanning Profiles...</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                     {["LinkedIn Profile", "X / Twitter", "Personal Website"].map((p) => (
                       <div key={p} className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                         <span className="text-sm text-white/70">{p} verified</span>
                       </div>
                     ))}
                  </div>
                  <motion.div 
                    animate={{ y: [0, 300, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1 bg-primary/40 shadow-[0_0_15px_rgba(139,92,246,0.8)] z-20"
                  />
                </div>

                <div className="hidden md:flex flex-col items-center justify-center">
                  <Zap className="h-10 w-10 text-primary animate-pulse" />
                  <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
                </div>

                <div className="col-span-1 p-8 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl h-[400px] flex flex-col justify-center">
                  <h4 className="text-xs font-black text-white/40 uppercase tracking-widest mb-10">Actively Investing In</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {industries.map((ind, i) => (
                      <motion.div 
                        key={ind.name}
                        animate={{ 
                          opacity: activeIndustry === i ? 1 : 0.2,
                          scale: activeIndustry === i ? 1.05 : 1,
                          backgroundColor: activeIndustry === i ? "rgba(139, 92, 246, 0.15)" : "transparent"
                        }}
                        className="p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-3 transition-colors"
                      >
                        <ind.icon className="h-6 w-6 text-primary" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{ind.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-primary font-black uppercase tracking-[0.4em] text-xs">
                   Phase 2: Deep Profile Intelligence & Sector Matching
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="crm"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                className="w-full max-w-2xl text-center"
              >
                <div className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl relative overflow-hidden">
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-[100px]" />
                  <div className="flex flex-col items-center gap-8">
                    <div className="w-24 h-24 rounded-[2rem] bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                      <Database className="h-12 w-12 text-emerald-500" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-3xl font-display font-bold text-white tracking-tight">Synced to your CRM</h4>
                      <p className="text-lg text-white/40 max-w-md mx-auto">
                        Qualified investor profiles, contact data, and match scores delivered directly to your stack.
                      </p>
                    </div>
                    
                    <div className="flex gap-4 mt-4">
                      {["HubSpot", "Salesforce", "Pipedrive"].map((crm, i) => (
                        <motion.div
                          key={crm}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-white/60"
                        >
                          {crm}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-primary font-black uppercase tracking-[0.4em] text-xs">
                   Phase 3: Automated CRM Deployment
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
    </section>
  );
}
