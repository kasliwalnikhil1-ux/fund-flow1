import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Database, 
  Cpu, 
  Zap, 
  Share2,
  CheckCircle2,
  Database as DatabaseIcon,
  ShieldCheck,
  ZapIcon,
  Search
} from "lucide-react";

// Local assets
import linkedinLogo from "@assets/icons8-linkedin-48_1768852688743.png";
import xLogo from "@assets/icons8-x-50_1768852688746.png";
import salesNavLogo from "@assets/download_(1)_1768852688690.jpeg";
import apolloLogo from "@assets/download_1768852688742.png";
import crunchbaseLogo from "@assets/download_1768852688740.jpeg";

const UserIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const dataSources = [
  { name: "LinkedIn", logo: linkedinLogo },
  { name: "X", logo: xLogo },
  { name: "Sales Nav", logo: salesNavLogo },
  { name: "Apollo.io", logo: apolloLogo },
  { name: "Crunchbase", logo: crunchbaseLogo },
];

const industries = [
  { name: "SaaS", icon: Cpu },
  { name: "Biotech", icon: Zap },
  { name: "EdTech", icon: Share2 },
];

export function InvestorMatchingSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

        {/* Deck of Cards Layout */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 max-w-7xl mx-auto min-h-[700px]">
          
          {/* Card 1: Intelligence Gathering */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            whileHover={{ y: -20, rotate: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex-1 p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            
            <div className="text-center relative z-10 w-full">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Phase 01</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Intelligence Sourcing</h3>
            </div>

            {/* Orbit Animation from Before */}
            <div className="relative w-full h-64 flex items-center justify-center scale-90">
              <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
                <DatabaseIcon className="h-10 w-10 text-primary/80" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-primary rounded-3xl blur-2xl"
                />
              </div>

              {dataSources.map((source, i) => {
                const radius = 100;
                const angle = (i * 360) / dataSources.length;
                const angleRad = (angle - 90) * Math.PI / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <div key={source.name} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute pointer-events-auto"
                      style={{ x, y }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-white/10 overflow-hidden">
                        <img src={source.logo} alt={source.name} className="w-7 h-7 object-contain opacity-80" />
                      </div>
                    </motion.div>
                    
                    {/* Particles */}
                    <motion.div
                      initial={{ x, y, opacity: 0 }}
                      animate={{ x: [x, 0], y: [y, 0], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "easeIn" }}
                      className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full blur-[1px]"
                    />
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-white/40 text-center relative z-10 max-w-[250px] leading-relaxed">
              Consolidating signals from multiple verified channels into a single source of truth.
            </p>
          </motion.div>

          {/* Card 2: Neural Verification */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -30 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex-1 p-10 rounded-[3rem] bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden group shadow-2xl z-20"
          >
            <div className="text-center relative z-10 w-full">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Phase 02</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Thesis Alignment</h3>
            </div>

            {/* DNA Scan Animation from Before */}
            <div className="w-full h-64 flex flex-col justify-center relative px-4">
              <div className="space-y-3 relative z-10">
                {industries.map((ind, i) => (
                  <motion.div 
                    key={ind.name}
                    animate={{ 
                      opacity: activeIndustry === i ? 1 : 0.2,
                      scale: activeIndustry === i ? 1.05 : 1,
                      backgroundColor: activeIndustry === i ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.03)"
                    }}
                    className="p-4 rounded-2xl border border-white/10 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <ind.icon className="h-5 w-5 text-primary" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">{ind.name}</span>
                    </div>
                    {activeIndustry === i && <CheckCircle2 className="h-4 w-4 text-primary" />}
                  </motion.div>
                ))}
              </div>
              {/* Scan Line */}
              <motion.div 
                animate={{ y: [-100, 100, -100] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-0.5 bg-primary/40 shadow-[0_0_15px_#8b5cf6] z-0"
              />
            </div>

            <div className="text-center relative z-10">
              <div className="text-5xl font-display font-bold text-primary mb-2 tracking-tighter">94.8%</div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Confidence Match</p>
            </div>
          </motion.div>

          {/* Card 3: CRM Deployment */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            whileHover={{ y: -20, rotate: -1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex-1 p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
            
            <div className="text-center relative z-10 w-full">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <ZapIcon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Phase 03</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Instant Sync</h3>
            </div>

            {/* CRM Sync Animation from Before */}
            <div className="relative w-full h-64 flex flex-col items-center justify-center gap-8">
              <div className="relative flex items-center justify-center scale-110">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 border border-dashed border-primary/30 rounded-full"
                />
                <div className="w-20 h-20 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                  <Database className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 relative z-10 px-4">
                {["HubSpot", "Salesforce", "Pipedrive"].map((crm, i) => (
                  <motion.span 
                    key={crm}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[9px] font-black text-white/40 uppercase tracking-widest"
                  >
                    {crm}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="text-sm text-white/40 text-center relative z-10 max-w-[250px] leading-relaxed">
              Real-time delivery of qualified leads directly to your sales ecosystem.
            </p>
          </motion.div>

        </div>

      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px]" />
    </section>
  );
}
