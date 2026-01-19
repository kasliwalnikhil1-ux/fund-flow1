import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Database, 
  Cpu, 
  Zap, 
  Share2,
  CheckCircle2,
  Search,
  ZapIcon,
  ShieldCheck
} from "lucide-react";

// Local assets
import linkedinLogo from "@assets/icons8-linkedin-48_1768852688743.png";
import xLogo from "@assets/icons8-x-50_1768852688746.png";
import salesNavLogo from "@assets/download_(1)_1768852688690.jpeg";
import apolloLogo from "@assets/download_1768852688742.png";
import crunchbaseLogo from "@assets/download_1768852688740.jpeg";

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 0,
      title: "Intelligence Sourcing",
      phase: "Phase 01",
      icon: Search,
      description: "Consolidating signals from multiple verified channels.",
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
            <Database className="h-8 w-8 text-primary/80" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-primary rounded-2xl blur-2xl"
            />
          </div>
          {dataSources.map((source, i) => {
            const radius = 65;
            const angle = (i * 360) / dataSources.length;
            const angleRad = (angle - 90) * Math.PI / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            return (
              <div key={source.name} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div className="absolute pointer-events-auto" style={{ x, y }}>
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
      title: "Thesis Alignment",
      phase: "Phase 02",
      icon: ShieldCheck,
      description: "Verifying investment patterns with 94.8% precision.",
      content: (
        <div className="w-full h-full flex flex-col justify-center relative px-6">
          <div className="space-y-3 relative z-10">
            {industries.map((ind, i) => (
              <div 
                key={ind.name}
                className="p-3.5 rounded-2xl border border-white/10 flex items-center justify-between bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <ind.icon className="h-4 w-4 text-primary" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{ind.name}</span>
                </div>
                {i === 0 && <CheckCircle2 className="h-4 w-4 text-primary" />}
              </div>
            ))}
          </div>
          <motion.div 
            animate={{ y: [-80, 80, -80] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-0.5 bg-primary/40 shadow-[0_0_15px_#8b5cf6] z-0"
          />
        </div>
      )
    },
    {
      id: 2,
      title: "Instant Sync",
      phase: "Phase 03",
      icon: ZapIcon,
      description: "Real-time delivery to your sales ecosystem.",
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
          <div className="relative flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-24 h-24 border border-dashed border-primary/30 rounded-full"
            />
            <div className="w-14 h-14 rounded-[1.2rem] bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
              <Database className="h-7 w-7 text-primary" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 relative z-10 px-4">
            {["HubSpot", "Salesforce", "Pipedrive"].map((crm) => (
              <span 
                key={crm}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[8px] font-black text-white/40 uppercase tracking-widest"
              >
                {crm}
              </span>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#020202] py-24 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Investor-Matched. <br />
            <span className="text-primary">Powered by Intelligence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            We don't just find investors. We verify their activity, analyze and match you with the ones actively funding your sector.
          </motion.p>
        </div>

        {/* Deck of Cards Container */}
        <div className="relative h-[600px] max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex flex-row justify-center items-center gap-4 lg:gap-8">
            {cards.map((card, index) => {
              // Calculate tilt and position based on hover
              const isHovered = hoveredCard === index;
              const anyHovered = hoveredCard !== null;
              
              let rotate = 0;
              let x = 0;
              let zIndex = index;
              let scale = 1;

              if (!anyHovered) {
                // Fan out effect initially
                rotate = (index - 1) * 8;
                x = (index - 1) * 60;
              } else if (isHovered) {
                rotate = 0;
                zIndex = 10;
                scale = 1.05;
              } else {
                // Push other cards away
                const direction = index < hoveredCard ? -1 : 1;
                x = direction * 40;
                rotate = direction * 5;
                scale = 0.95;
                zIndex = 1;
              }

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50, rotate: (index - 1) * 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{ 
                    rotate, 
                    x, 
                    zIndex,
                    scale,
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-[300px] aspect-[4/5] p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden shadow-2xl cursor-pointer"
                  style={{ transformOrigin: "bottom center" }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                  
                  <div className="text-center relative z-10 w-full">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <card.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-[8px] font-black text-primary uppercase tracking-[0.4em]">{card.phase}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                  </div>

                  <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden py-4">
                    {card.content}
                  </div>

                  <div className="text-center relative z-10 mt-4 flex flex-col items-center gap-2">
                    <p className="text-[10px] text-white/40 max-w-[200px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
    </section>
  );
}
