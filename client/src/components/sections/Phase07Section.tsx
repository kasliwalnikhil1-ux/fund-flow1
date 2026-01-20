import { motion } from "framer-motion";
import { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  PieChart,
  LineChart,
  ArrowUpRight,
  Globe,
  Lock,
  Search,
  CheckCircle2,
  Share2,
  Mail,
  Linkedin
} from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const cards = [
  {
    id: 0,
    title: "Targeted Investor Discovery",
    icon: Search,
    description: "WE IDENTIFY AND SHORTLIST INVESTORS WHO ARE ACTIVELY DEPLOYING CAPITAL IN YOUR SPECIFIC INDUSTRY AND STAGE.",
    content: (
      <div className="w-full h-full flex flex-col justify-center px-2 py-4 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          {[
            { stage: "Pre-Seed Match", check: "$500K - $1M", color: "text-blue-400" },
            { stage: "Seed Match", check: "$1M - $5M", color: "text-emerald-400" },
            { stage: "Series A Match", check: "$10M - $30M", color: "text-primary" }
          ].map((m, i) => (
            <motion.div
              key={m.stage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: [0, 1, 0.4], x: 0 }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
              className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className={`text-[8px] font-bold uppercase tracking-wider ${m.color}`}>{m.stage}</span>
                <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
              </div>
              <div className="text-[10px] font-bold text-white/90">{m.check}</div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          animate={{ y: [-100, 100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-0.5 bg-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.5)] z-0"
        />
      </div>
    )
  },
  {
    id: 1,
    title: "Hyper-Personalized Outreach",
    icon: Zap,
    description: "WE ANALYZE INVESTOR PROFILES ACROSS LINKEDIN, X, AND WEB TO CRAFT MESSAGES THAT ACTUALLY GET READ.",
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center p-4">
        <div className="relative w-full space-y-3">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-xl bg-white/[0.05] border border-primary/20 backdrop-blur-md relative"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[7px] font-bold text-white/60 uppercase tracking-widest">Personalized DM</span>
            </div>
            <div className="space-y-1.5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-1 bg-white/10 rounded-full"
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="h-1 bg-white/10 rounded-full"
              />
            </div>
          </motion.div>
          <div className="flex justify-center">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-[8px] font-bold text-primary uppercase"
            >
              Tailored Insight Found
            </motion.div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Multi-Channel Engagement",
    icon: ShieldCheck,
    description: "COORDINATED TOUCHPOINTS ACROSS EMAIL, LINKEDIN, AND X TO MAXIMIZE VISIBILITY AND RESPONSE RATES.",
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center px-2 py-4">
        <div className="relative w-full flex justify-center items-center h-32">
          {/* Central Hub */}
          <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center relative z-10">
            <Share2 className="h-5 w-5 text-primary" />
          </div>
          
          {/* Channels */}
          {[
            { icon: Mail, color: "text-rose-400", delay: 0, x: -40, y: -40 },
            { icon: Linkedin, color: "text-blue-400", delay: 0.5, x: 40, y: -20 },
            { icon: XIcon, color: "text-white", delay: 1, x: -30, y: 40 }
          ].map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: ch.delay, duration: 0.5 }}
              className="absolute"
              style={{ x: ch.x, y: ch.y }}
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                <ch.icon className={`h-4 w-4 ${ch.color}`} />
              </div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: ch.delay + 0.3 }}
                className="absolute top-1/2 left-1/2 h-px bg-primary/20 -z-10 origin-left"
                style={{ rotate: Math.atan2(-ch.y, -ch.x) * 180 / Math.PI }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Meeting Setup",
    icon: Search,
    description: "WE HANDLE THE BACK-AND-FORTH SCHEDULING SO YOU SIMPLY SHOW UP TO WARM CONVERSATIONS.",
    content: (
      <div className="w-full h-full flex flex-col justify-center px-2 py-4">
        <div className="space-y-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <div className="text-[9px] font-bold text-white uppercase">Meeting Booked</div>
              <div className="text-[7px] text-emerald-400 font-medium">Verified Calendar Invite</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-[9px] font-bold text-white uppercase">Positive Reply</div>
              <div className="text-[7px] text-primary/80 font-medium">Intent Signal Detected</div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }
];

export function Phase07Section() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative min-h-[100vh] lg:h-screen bg-[#020202] py-20 lg:py-0 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col h-full justify-center">
        
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16 shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight"
          >
            Everything you need <br className="hidden md:block" />
            <span className="text-primary">to raise capital.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            Stop spraying and praying. We run a surgical process to get you in front of the right check-writers.
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
              let zIndex = index;
              let scale = 1;

              let y = 0;
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
                zIndex = 10;
                scale = 1.15;
                x = 0;
                y = -30;
              } else {
                if (!isMobile) {
                  const direction = index < hoveredCard ? -1 : 1;
                  x = direction * 80;
                  rotate = direction * 12;
                  scale = 0.85;
                  zIndex = 1;
                } else {
                  scale = 0.95;
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
                    opacity: anyHovered && !isHovered && isMobile ? 0.5 : 1
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
                    </div>
                    <h3 className="text-xs lg:text-sm font-bold text-white mb-1 tracking-tight">{card.title}</h3>
                  </div>

                  <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden py-2">
                    {card.content}
                  </div>

                  <div className="text-center relative z-10 mt-2">
                    <p className="text-[7px] lg:text-[8px] text-white/40 max-w-[140px] lg:max-w-[160px] leading-tight font-bold uppercase tracking-wider">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] lg:blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] lg:blur-[150px]" />
      </div>
    </section>
  );
}
