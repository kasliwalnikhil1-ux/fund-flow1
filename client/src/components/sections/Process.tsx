import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Zap, Share2, Calendar } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Investor Data & List Building",
    description: "We use proprietary signals to find investors actively deploying capital in your specific sector and stage.",
    icon: Search,
  },
  {
    number: "02",
    title: "Personalized DMs",
    description: "Our neural engine analyzes every investor profile to craft high-conversion outreach that feels human.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Multi-Channel Outreach",
    description: "We execute coordinated campaigns across Cold Email, LinkedIn, and X for maximum visibility.",
    icon: Share2,
  },
  {
    number: "04",
    title: "Meetings Booked",
    description: "You simply show up to warm conversations. We handle the scheduling and follow-ups end-to-end.",
    icon: Calendar,
  }
];

export function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-24 bg-[#020202] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Our Surgical <span className="text-primary">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            A simple, transparent flow designed to get you in front of the right investors.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[45px] left-0 w-full h-[1px] bg-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    {/* Animated Glow behind number */}
                    <motion.div 
                      animate={{ 
                        scale: hoveredIndex === index ? 1.4 : 1,
                        opacity: hoveredIndex === index ? 0.3 : 0 
                      }}
                      className="absolute inset-0 bg-primary rounded-full blur-xl"
                    />
                    
                    <div className={`w-20 h-20 rounded-full bg-[#020202] border-2 transition-all duration-500 flex items-center justify-center text-2xl font-black font-display relative z-10 ${hoveredIndex === index ? 'border-primary text-primary scale-110' : 'border-white/10 text-white/20'}`}>
                      {step.number}
                    </div>

                    {/* Icon floating indicator */}
                    <motion.div 
                      animate={{ 
                        y: hoveredIndex === index ? -45 : -35,
                        opacity: hoveredIndex === index ? 1 : 0 
                      }}
                      className="absolute -top-1 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] z-20"
                    >
                      <step.icon className="h-4 w-4" />
                    </motion.div>
                  </div>

                  <h3 className={`text-xl font-bold font-display mb-4 transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>

                  {/* Highlight bar below text */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? "40%" : 0 }}
                    className="h-[2px] bg-primary mt-6 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
