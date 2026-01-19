import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
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

// Local assets from attached_assets
import linkedinLogo from "@assets/icons8-linkedin-48_1768851532438.png";
import xLogo from "@assets/icons8-x-48_1768852504235.png";
import salesNavLogo from "@assets/download_(1)_1768851727203.jpeg";
import apolloLogo from "@assets/download_(1)_1768851727228.png";
import crunchbaseLogo from "@assets/download_1768851727230.jpeg";
import brightDataLogo from "@assets/download_1768851727230.png";

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

const dataSources = [
  { name: "LinkedIn", logo: linkedinLogo },
  { name: "X", logo: xLogo },
  { name: "Sales Nav", logo: salesNavLogo },
  { name: "Apollo.io", logo: apolloLogo },
  { name: "Bright Data", logo: brightDataLogo },
  { name: "Crunchbase", logo: crunchbaseLogo },
];

const industries = [
  { name: "SaaS", icon: Cpu },
  { name: "Biotech", icon: Zap },
  { name: "EdTech", icon: Share2 },
  { name: "FinTech", icon: DollarSign },
];

export function InvestorMatchingSection() {
  const [step, setStep] = useState(0); 
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

        <div className="relative h-[600px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div 
                key="collection"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Central Database Hub */}
                <div className="relative z-10 w-32 h-32 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                  <div className="flex flex-col items-center justify-center text-primary/80">
                    <Database className="h-12 w-12" strokeWidth={1.5} />
                  </div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-primary rounded-3xl blur-2xl"
                  />
                </div>

                {/* Orbiting Source Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                   {dataSources.map((source, i) => {
                     const radius = 200; 
                     const angle = (i * 360) / dataSources.length;
                     const angleRad = (angle - 90) * Math.PI / 180;
                     
                     const x = Math.cos(angleRad) * radius;
                     const y = Math.sin(angleRad) * radius;

                     return (
                       <div key={source.name} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                         <motion.div
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ delay: i * 0.1 }}
                           className="absolute pointer-events-auto"
                           style={{ x, y }}
                         >
                           <div className="flex flex-col items-center gap-2">
                             <div className="w-14 h-14 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center group hover:scale-105 transition-transform cursor-pointer overflow-hidden">
                               <img 
                                 src={source.logo} 
                                 alt={source.name} 
                                 className={`w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity ${source.name === 'Apollo.io' ? 'scale-125' : ''}`} 
                               />
                             </div>
                           </div>
                         </motion.div>

                         {/* Moving Data Particles toward Database */}
                         <motion.div
                            initial={{ x, y, opacity: 0 }}
                            animate={{ 
                              x: [x, 0],
                              y: [y, 0],
                              opacity: [0, 0.5, 0]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: i * 0.5,
                              ease: "easeIn" 
                            }}
                            className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
                         />
                       </div>
                     );
                   })}
                   <div className="absolute w-[400px] h-[400px] border border-white/[0.03] rounded-full" />
                </div>
                
                <div className="absolute bottom-0 text-white/20 font-bold uppercase tracking-[0.4em] text-[10px]">
                   Phase 1: Multi-Source Intelligence Gathering
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div 
                key="profiling"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              >
                <div className="col-span-1 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden h-[400px] flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <User className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Investor DNA</h4>
                      <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Scanning Profiles...</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                     {["LinkedIn Profile", "X / Twitter", "Personal Website"].map((p) => (
                       <div key={p} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shadow-[0_0_8px_rgba(139,92,246,0.3)]" />
                         <span className="text-sm text-white/50">{p} verified</span>
                       </div>
                     ))}
                  </div>
                  <motion.div 
                    animate={{ y: [0, 300, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1 bg-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.4)] z-20"
                  />
                </div>

                <div className="hidden md:flex flex-col items-center justify-center">
                  <Zap className="h-8 w-8 text-primary/40 animate-pulse" />
                  <div className="w-px h-20 bg-gradient-to-b from-primary/20 to-transparent" />
                </div>

                <div className="col-span-1 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl h-[400px] flex flex-col justify-center">
                  <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-10">Actively Investing In</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {industries.map((ind, i) => (
                      <motion.div 
                        key={ind.name}
                        animate={{ 
                          opacity: activeIndustry === i ? 1 : 0.2,
                          scale: activeIndustry === i ? 1.02 : 1,
                          backgroundColor: activeIndustry === i ? "rgba(139, 92, 246, 0.1)" : "transparent"
                        }}
                        className="p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-3 transition-colors"
                      >
                        <ind.icon className="h-5 w-5 text-primary/60" />
                        <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">{ind.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/20 font-bold uppercase tracking-[0.4em] text-[10px]">
                   Phase 2: Deep Profile Intelligence & Sector Matching
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="crm"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="w-full max-w-2xl text-center"
              >
                <div className="p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl relative overflow-hidden">
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 blur-[100px]" />
                  <div className="flex flex-col items-center gap-8">
                    <div className="w-20 h-20 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.05)]">
                      <Database className="h-10 w-10 text-primary/60" />
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
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 }}
                          className="px-6 py-2 rounded-xl bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-white/40"
                        >
                          {crm}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-white/20 font-bold uppercase tracking-[0.4em] text-[10px]">
                   Phase 3: Automated CRM Deployment
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
    </section>
  );
}
