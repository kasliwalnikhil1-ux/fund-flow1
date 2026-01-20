import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Database, 
  CheckCircle2, 
  Search, 
  ZapIcon, 
  Globe, 
  Linkedin, 
  UserCheck,
  Target,
  Send
} from "lucide-react";

// Local assets
import linkedinLogo from "@assets/icons8-linkedin-48_1768852688743.png";
import xLogo from "@assets/icons8-x-50_1768852688746.png";
import salesNavLogo from "@assets/download_(1)_1768852688690.jpeg";
import apolloLogo from "@assets/download_1768852688742.png";
import crunchbaseLogo from "@assets/download_1768852688740.jpeg";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const dataSources = [
  { name: "LinkedIn", logo: linkedinLogo },
  { name: "X", logo: xLogo },
  { name: "Sales Nav", logo: salesNavLogo },
  { name: "Apollo.io", logo: apolloLogo },
  { name: "Crunchbase", logo: crunchbaseLogo },
];

const scanSources = [
  { name: "Portfolio Website", icon: Globe },
  { name: "LinkedIn Profile", icon: Linkedin },
  { name: "X Analysis", icon: XIcon },
];

const matchProfiles = [
  { initials: "JS", name: "Jason Schmidt", fund: "Schmidt Ventures", stage: "Pre-Seed / SaaS", check: "$250K - $1M", fit: "98%" },
  { initials: "AL", name: "Amanda Lee", fund: "Horizon Capital", stage: "Seed / AI", check: "$500K - $2M", fit: "96%" },
  { initials: "MR", name: "Mark Rossi", fund: "Nexus Fund", stage: "Series A / Fintech", check: "$1M - $5M", fit: "94%" }
];

export function InvestorMatchingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scanIndex, setScanIndex] = useState(0);
  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanIndex((prev) => (prev + 1) % scanSources.length);
    }, 2000);
    
    const profileInterval = setInterval(() => {
      setProfileIndex((prev) => (prev + 1) % matchProfiles.length);
    }, 3000);

    return () => {
      clearInterval(scanInterval);
      clearInterval(profileInterval);
    };
  }, []);

  const cards = [
    {
      id: 0,
      title: "Intelligence Sourcing",
      phase: "Phase 01",
      icon: Search,
      description: "COLLECTING VERIFIED SIGNALS",
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
            <Database className="h-6 w-6 text-primary/80" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-primary rounded-xl blur-xl"
            />
          </div>
          {dataSources.map((source, i) => {
            const radius = 60;
            const angle = (i * 360) / dataSources.length;
            const angleRad = (angle - 90) * Math.PI / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            return (
              <div key={source.name} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  className="absolute pointer-events-auto" 
                  style={{ x, y }}
                  animate={{ 
                    x: [x, x + Math.random() * 5, x - Math.random() * 5, x],
                    y: [y, y + Math.random() * 5, y - Math.random() * 5, y]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center border border-white/10 overflow-hidden">
                    <img src={source.logo} alt={source.name} className="w-4 h-4 object-contain opacity-80" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x, y, opacity: 0 }}
                  animate={{ x: [x, 0], y: [y, 0], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "easeIn" }}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
                />
              </div>
            );
          })}
        </div>
      )
    },
    {
      id: 1,
      title: "Neural Deep-Scan",
      phase: "Phase 02",
      icon: UserCheck,
      description: "ANALYZING INVESTOR INTENT",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center relative px-2">
          <div className="w-full space-y-1.5 relative z-10">
            {scanSources.map((source, i) => (
              <motion.div 
                key={source.name}
                animate={{ 
                  opacity: scanIndex === i ? 1 : 0.2,
                  scale: scanIndex === i ? 1 : 0.95,
                  backgroundColor: scanIndex === i ? "rgba(139, 92, 246, 0.1)" : "rgba(255, 255, 255, 0.02)"
                }}
                className="p-1.5 rounded-lg border border-white/10 flex items-center justify-between backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className={`p-1 rounded bg-white/5 border border-white/10 ${scanIndex === i ? 'text-primary border-primary/20' : 'text-white/40'}`}>
                    <source.icon className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-white uppercase tracking-wider block leading-none">{source.name}</span>
                    {scanIndex === i && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[6px] text-primary font-bold uppercase tracking-tighter block mt-0.5"
                      >
                        Checking Industry Fit...
                      </motion.span>
                    )}
                  </div>
                </div>
                {scanIndex === i && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="flex items-center gap-1"
                   >
                     <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                   </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            animate={{ y: [-50, 50, -50] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent shadow-[0_0_10px_rgba(139,92,246,0.6)] z-0"
          />
          
          <div className="mt-2 text-center p-1.5 rounded-lg bg-primary/5 border border-primary/10 backdrop-blur-md relative overflow-hidden w-full">
            <div className="relative z-10">
              <div className="text-[10px] font-display font-bold text-white tracking-tighter uppercase">Industry Match</div>
              <div className="text-[5px] text-primary font-black uppercase tracking-[0.2em]">Active Sector Funder</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Precision Matching",
      phase: "Phase 03",
      icon: Target,
      description: "VERIFYING SECTOR ALIGNMENT",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center p-2 relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={profileIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-3 relative overflow-hidden group"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center">
                     <span className="text-white font-bold text-xs">{matchProfiles[profileIndex].initials}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[9px] font-bold text-white mb-0.5">{matchProfiles[profileIndex].name}</div>
                  <div className="h-1 w-12 bg-white/5 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 mb-3">
                 <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[5px] text-white/40 uppercase font-black mb-0.5">Thesis</div>
                    <div className="text-[7px] text-white font-bold">{matchProfiles[profileIndex].stage}</div>
                 </div>
                 <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[5px] text-white/40 uppercase font-black mb-0.5">Avg Check</div>
                    <div className="text-[7px] text-white font-bold">{matchProfiles[profileIndex].check}</div>
                 </div>
              </div>

              <div className="flex items-center justify-between p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                 <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[7px] font-black text-emerald-400 uppercase tracking-widest">Matched</span>
                 </div>
                 <span className="text-[8px] font-bold text-emerald-400">{matchProfiles[profileIndex].fit} Fit</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )
    },
    {
      id: 3,
      title: "CRM Deployment",
      phase: "Phase 04",
      icon: ZapIcon,
      description: "SYNCING OUTREACH SIGNALS",
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
          <div className="relative flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-20 h-20 border border-dashed border-primary/30 rounded-full"
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: ["0 0 20px rgba(139,92,246,0.1)", "0 0 40px rgba(139,92,246,0.3)", "0 0 20px rgba(139,92,246,0.1)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10"
            >
              <Database className="h-6 w-6 text-primary" />
            </motion.div>

            {/* Data Collection Particles */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ 
                  x: [0, 40, 80], 
                  y: [0, -20, -40],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.6,
                  ease: "easeOut" 
                }}
                className="absolute z-20"
              >
                <Send className="h-3 w-3 text-primary/60" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[8px] font-bold text-white uppercase tracking-[0.2em]">Data Pushed to CRM</span>
            <span className="text-[6px] font-bold text-emerald-400 uppercase tracking-[0.2em] animate-pulse">Ready for Outreach</span>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="relative min-h-screen bg-[#020202] py-8 lg:py-0 overflow-hidden flex flex-col justify-center scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col h-full justify-center">
        
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12 shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tight"
          >
            Your Ideal Investor. <br />
            <span className="text-primary text-2xl md:text-4xl lg:text-5xl">Verified & Outreach-Ready.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            Our neural engine verifies activity and intent, matching you with the investors actively funding your sector right now.
          </motion.p>
        </div>

        {/* Deck of Cards Container */}
        <div className="relative flex-1 max-w-5xl mx-auto w-full flex items-center justify-center min-h-[450px] lg:min-h-[500px]">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap justify-center items-center gap-6 lg:gap-6 w-full relative h-full py-10 lg:py-0">
            {cards.map((card, index) => {
              const isHovered = hoveredCard === index;
              const anyHovered = hoveredCard !== null;
              
              let rotate = 0;
              let x = 0;
              let y = 0;
              let zIndex = index;
              let scale = 1;

              // Responsive animation logic
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

              if (!anyHovered) {
                if (isMobile) {
                  rotate = (index - 1.5) * 4;
                  x = (index - 1.5) * 20;
                  y = Math.abs(index - 1.5) * 8;
                  scale = 0.95;
                } else {
                  rotate = (index - 1.5) * 12;
                  x = (index - 1.5) * 60; 
                  y = Math.abs(index - 1.5) * 15;
                }
              } else if (isHovered) {
                rotate = 0;
                zIndex = 20;
                scale = 1.15;
                x = 0;
                y = -30;
              } else {
                if (!isMobile) {
                  const direction = index < hoveredCard ? -1 : 1;
                  x = direction * 30;
                  rotate = direction * 4;
                  scale = 0.9;
                  zIndex = 1;
                } else {
                  scale = 0.95;
                  opacity: 0.5;
                }
              }

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ 
                    rotate, 
                    x, 
                    y,
                    zIndex,
                    scale,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-[160px] xs:w-[180px] md:w-[220px] lg:w-[240px] aspect-[4/5] p-4 lg:p-5 rounded-[1.5rem] lg:rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden shadow-2xl cursor-pointer"
                  style={{ transformOrigin: "bottom center" }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                  
                  <div className="text-center relative z-10 w-full">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                        <card.icon className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-primary" />
                      </div>
                      <span className="text-[6px] lg:text-[7px] font-black text-primary uppercase tracking-[0.4em]">{card.phase}</span>
                    </div>
                    <h3 className="text-xs lg:text-sm font-bold text-white mb-1 tracking-tight">{card.title}</h3>
                  </div>

                  <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden py-2">
                    {card.content}
                  </div>

                  <div className="text-center relative z-10 mt-2">
                    <p className="text-[7px] lg:text-[8px] text-white/40 max-w-[140px] lg:max-w-[160px] leading-tight">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      <div className="absolute top-0 right-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] lg:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] lg:blur-[150px]" />
    </section>
  );
}
