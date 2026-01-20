import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Zap, Share2, Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Onboarding & Strategy",
    description: "We deep dive into your business, pitch deck, and ideal investor profile to build a custom targeting strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "List Building",
    description: "It carefully selects a list of investors who are most relevant, using our own data and insights.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Campaign Launch",
    description: "We launch multi-channel campaigns (Email, LinkedIn, X) with A/B tested messaging to maximize engagement.",
    icon: Share2,
  },
  {
    number: "04",
    title: "Meetings Booked",
    description: "We handle the scheduling coordination. You just check your calendar and show up to pitch.",
    icon: Calendar,
  }
];

export function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="relative min-h-[100vh] lg:h-screen bg-[#020202] py-20 lg:py-0 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col h-full justify-center">
        
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16 shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-tight"
          >
            How it <span className="text-primary">Works.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base lg:text-lg text-white/60 max-w-xl mx-auto leading-relaxed"
          >
            A simple, transparent process designed to get you results fast.
          </motion.p>
        </div>

        <div className="relative flex-1 max-w-5xl mx-auto w-full flex items-center justify-center min-h-[400px]">
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4 lg:gap-6 w-full">
            {steps.map((step, index) => {
              const isHovered = hoveredIndex === index;
              const anyHovered = hoveredIndex !== null;
              
              let rotate = 0;
              let x = 0;
              let y = 0;
              let zIndex = index;
              let scale = 1;

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
                scale = 1.15;
                x = 0;
                y = -30;
              } else {
                if (!isMobile) {
                  const direction = index < hoveredIndex ? -1 : 1;
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
                  key={index}
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
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-[160px] xs:w-[180px] md:w-[220px] lg:w-[240px] aspect-[4/5] p-4 lg:p-5 rounded-[1.5rem] lg:rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-between relative overflow-hidden shadow-2xl cursor-pointer"
                  style={{ transformOrigin: "bottom center" }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                  
                  <div className="text-center relative z-10 w-full">
                    <div className="flex items-center justify-center mb-2">
                      <div className={`w-10 h-10 rounded-full border-2 transition-colors duration-500 flex items-center justify-center text-sm font-black font-display ${isHovered ? 'border-primary text-primary' : 'border-white/10 text-white/20'}`}>
                        {step.number}
                      </div>
                    </div>
                    <h3 className={`text-xs lg:text-sm font-bold transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-white'} tracking-tight`}>
                      {step.title}
                    </h3>
                  </div>

                  <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden py-2">
                    <motion.div 
                      animate={{ 
                        scale: isHovered ? 1.2 : 1,
                        rotate: isHovered ? [0, 5, -5, 0] : 0
                      }}
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-xl"
                    >
                      <step.icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary" />
                    </motion.div>
                  </div>

                  <div className="text-center relative z-10 mt-2">
                    <p className="text-[7px] lg:text-[8px] text-white/40 max-w-[140px] lg:max-w-[160px] leading-tight font-bold uppercase tracking-wider">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] lg:blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-primary/5 rounded-full blur-[120px] lg:blur-[150px]" />
      </div>
    </section>
  );
}
