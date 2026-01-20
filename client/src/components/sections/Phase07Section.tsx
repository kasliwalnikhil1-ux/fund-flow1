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
  Search
} from "lucide-react";

const performanceMetrics = [
  { label: "Reply Rate", value: "32%", change: "+12%" },
  { label: "Meeting Rate", value: "8%", change: "+4%" },
];

const cards = [
  {
    id: 0,
    title: "Targeted Investor Discovery",
    icon: Search,
    description: "WE IDENTIFY AND SHORTLIST INVESTORS WHO ARE ACTIVELY DEPLOYING CAPITAL IN YOUR SPECIFIC INDUSTRY AND STAGE.",
    content: (
      <div className="w-full h-full flex flex-col justify-center px-2 py-4">
        <div className="space-y-3">
          {performanceMetrics.map((metric, i) => (
            <div 
              key={metric.label}
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[8px] text-white/40 uppercase font-bold tracking-wider">{metric.label}</span>
                <span className="text-[9px] text-emerald-400 font-bold">{metric.change}</span>
              </div>
              <div className="text-sm font-bold text-white mb-2">{metric.value}</div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: metric.value }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          ))}
        </div>
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
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-primary/10" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/30"
          />
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-xl relative z-10">
            <Zap className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="mt-6 text-center">
          <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Neural Analysis</div>
          <div className="text-[8px] text-primary font-black uppercase mt-1 tracking-tighter">Active Scaling</div>
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
        <div className="w-full space-y-2.5">
          {[
            { label: "IP Warmup", status: "Active", icon: Globe },
            { label: "SPF/DKIM", status: "Verified", icon: Lock },
          ].map((item, i) => (
            <div 
              key={item.label}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                <item.icon className="h-3.5 w-3.5 text-white/60" />
              </div>
              <div className="flex-1">
                <div className="text-[9px] font-bold text-white">{item.label}</div>
                <div className="text-[7px] text-emerald-400 font-black uppercase tracking-widest">{item.status}</div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
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
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
              <PieChart className="h-3 w-3 text-primary" />
            </div>
            <span className="text-[8px] text-white/60 font-bold uppercase tracking-wider">Lead Activity</span>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-primary/60"
              />
            </div>
            <div className="h-1.5 w-2/3 bg-white/10 rounded-full" />
          </div>
          <motion.div 
            animate={{ x: [-150, 250] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <div className="text-[7px] text-white/40 uppercase font-black mb-0.5 tracking-tighter">Hot Leads</div>
            <div className="text-xs font-bold text-white">142</div>
          </div>
          <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <div className="text-[7px] text-white/40 uppercase font-black mb-0.5 tracking-tighter">Interested</div>
            <div className="text-xs font-bold text-white">89</div>
          </div>
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
        <div className="relative flex-1 max-w-5xl mx-auto w-full flex items-center justify-center min-h-[400px]">
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 lg:gap-6 w-full">
            {cards.map((card, index) => {
              const isHovered = hoveredCard === index;
              const anyHovered = hoveredCard !== null;
              
              let rotate = 0;
              let x = 0;
              let zIndex = index;
              let scale = 1;

              // Responsive animation logic
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

              if (!anyHovered) {
                if (isMobile) {
                  rotate = 0;
                  x = 0;
                } else {
                  rotate = (index - 1.5) * 6;
                  x = (index - 1.5) * 40; 
                }
              } else if (isHovered) {
                rotate = 0;
                zIndex = 10;
                scale = 1.1;
                x = 0;
              } else {
                if (!isMobile) {
                  const direction = index < hoveredCard ? -1 : 1;
                  x = direction * 30;
                  rotate = direction * 4;
                  scale = 0.9;
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
