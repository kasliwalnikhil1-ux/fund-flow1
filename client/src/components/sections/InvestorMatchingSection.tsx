import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Database, 
  Cpu, 
  Zap, 
  Share2,
  Search,
  CheckCircle2,
  ArrowRight
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

        {/* Impactful Three-Phase Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch h-[600px]">
          
          {/* Phase 1: Intelligence Gathering */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden group"
          >
            <div className="text-center relative z-10">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">Phase 01</span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Intelligence Sourcing</h3>
            </div>

            <div className="relative w-full h-48 flex items-center justify-center">
              {/* Database Hub */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Database className="h-10 w-10 text-primary/80" />
              </div>

              {/* Spread Source Icons */}
              {dataSources.map((source, i) => {
                const radius = 70;
                const angle = (i * 360) / dataSources.length;
                const angleRad = (angle - 90) * Math.PI / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <motion.div
                    key={source.name}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute w-10 h-10 rounded-full bg-white/5 border border-white/10 p-2 overflow-hidden"
                    style={{ x, y }}
                  >
                    <img src={source.logo} alt={source.name} className="w-full h-full object-contain grayscale opacity-50" />
                  </motion.div>
                );
              })}
            </div>

            <p className="text-sm text-white/40 text-center relative z-10">
              Gathering signals from Apollo, LinkedIn, and proprietary data lakes.
            </p>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Search className="h-32 w-32 text-white" />
            </div>
          </motion.div>

          {/* Phase 2: Neural Verification */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2.5rem] bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden group"
          >
            <div className="text-center relative z-10">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">Phase 02</span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Thesis Alignment</h3>
            </div>

            <div className="w-full space-y-4 relative z-10">
              {industries.map((ind, i) => (
                <motion.div 
                  key={ind.name}
                  animate={{ 
                    opacity: activeIndustry === i ? 1 : 0.3,
                    scale: activeIndustry === i ? 1.02 : 1,
                    backgroundColor: activeIndustry === i ? "rgba(139, 92, 246, 0.15)" : "rgba(255, 255, 255, 0.02)"
                  }}
                  className="p-4 rounded-2xl border border-white/10 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <ind.icon className="h-5 w-5 text-primary" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{ind.name}</span>
                  </div>
                  {activeIndustry === i && <CheckCircle2 className="h-4 w-4 text-primary" />}
                </motion.div>
              ))}
            </div>

            <div className="text-center relative z-10">
              <div className="text-3xl font-bold text-primary mb-1 tracking-tighter">94.8%</div>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Confidence Match</p>
            </div>
          </motion.div>

          {/* Phase 3: Automated CRM Deployment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden group"
          >
            <div className="text-center relative z-10">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">Phase 03</span>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Instant Sync</h3>
            </div>

            <div className="relative flex flex-col items-center gap-6">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-primary/20 rounded-full"
              />
              <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <div className="flex flex-wrap justify-center gap-2 relative z-10 px-4">
                {["HubSpot", "Salesforce", "Pipedrive"].map(crm => (
                  <span key={crm} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest">
                    {crm}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-white/40 text-center relative z-10">
              Real-time delivery of qualified leads directly to your sales pipeline.
            </p>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ArrowRight className="h-32 w-32 text-white" />
            </div>
          </motion.div>

        </div>

      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
    </section>
  );
}
