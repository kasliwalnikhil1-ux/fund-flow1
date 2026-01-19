import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Globe, 
  Linkedin, 
  Facebook, 
  MessageSquare, 
  Mail, 
  Cpu, 
  Zap,
  CheckCircle2,
  Share2,
  FileText,
  MessageCircle,
  Trophy
} from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function OutreachCampaignSection() {
  const [activeTab, setActiveTab] = useState(0);

  const flowIcons = [FileText, MessageCircle, Trophy];

  return (
    <section className="relative min-h-screen bg-[#020202] py-20 overflow-hidden flex flex-col justify-center">
      {/* Matching background effects from previous pages */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Zap className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Phase 03: Hyper-Outreach</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Hyper-Personalized <br />
            <span className="text-primary">Multi-Channel Outreach.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            We don't just send messages. We analyze recent activities across all platforms to craft human-like, high-conversion interactions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Hyper-Personalization Engine */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative aspect-square p-0 rounded-[2.5rem] bg-[#050505] border border-white/5 overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/5 opacity-50" />
            
            {/* Top Bar Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-20 p-8 pb-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-sm">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">NEURAL SYNAPSE</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">Live Personalization Engine</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
              {/* Grand Visual Element: The Core */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Large Rotating Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[80%] h-[80%] border border-white/5 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[60%] h-[60%] border border-primary/10 rounded-full"
                />

                {/* The Central Hub */}
                <div className="relative z-30">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ["0 0 40px rgba(139,92,246,0.1)", "0 0 100px rgba(139,92,246,0.5)", "0 0 40px rgba(139,92,246,0.1)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-b from-primary/30 to-primary/5 border border-primary/40 backdrop-blur-3xl flex flex-col items-center justify-center p-4 text-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)]" />
                    <div className="relative">
                      <Cpu className="h-12 w-12 lg:h-20 lg:w-20 text-primary mb-2 opacity-90 filter drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
                      <motion.div 
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 blur-2xl bg-primary/60"
                      />
                    </div>
                    <span className="text-[10px] lg:text-[12px] font-black text-white uppercase tracking-[0.5em] mb-1 z-10">AI CORE</span>
                    <div className="h-1 w-16 bg-primary/30 rounded-full overflow-hidden z-10">
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="h-full w-full bg-primary shadow-[0_0_10px_#8b5cf6]"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Floating Node Orbits */}
                {[
                  { icon: Globe, label: "WEB", angle: 0, color: "text-blue-400" },
                  { icon: Linkedin, label: "IN", angle: 90, color: "text-blue-600" },
                  { icon: XIcon, label: "X", angle: 180, color: "text-white" },
                  { icon: Facebook, label: "FB", angle: 270, color: "text-blue-500" }
                ].map((node, i) => {
                  const radius = typeof window !== 'undefined' && window.innerWidth < 1024 ? 120 : 170;
                  return (
                    <motion.div
                      key={node.label}
                      animate={{ 
                        rotate: 360,
                      }}
                      transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div 
                        style={{ x: radius }}
                        className="relative"
                      >
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
                          className="w-14 h-14 lg:w-16 lg:h-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-center shadow-2xl group-hover:border-primary/60 transition-all duration-500 hover:scale-110"
                        >
                          <node.icon className={`h-6 w-6 lg:h-7 lg:w-7 ${node.color} mb-1.5`} />
                          <span className="text-[7px] font-black text-white/60 uppercase tracking-widest">{node.label}</span>
                        </motion.div>
                        
                        {/* Connecting Line to Core */}
                        <div className="absolute top-1/2 right-full w-[120px] h-[1px] bg-gradient-to-l from-primary/30 to-transparent -translate-y-1/2 -z-10" />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Flowing Data Stream Particles */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                  <motion.circle 
                    r="2" 
                    fill="#8b5cf6" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <animateMotion dur="3s" repeatCount="indefinite" path="M 10% 50% Q 30% 20%, 50% 50%" />
                  </motion.circle>
                </svg>
              </div>
            </div>

            {/* Bottom Status Panel */}
            <div className="relative z-20 p-8 pt-0">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider block leading-none mb-1">PROCESSED OUTPUT</span>
                      <span className="text-[7px] text-white/30 uppercase font-black tracking-widest">Neural Calibration Active</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[12px] font-black text-emerald-400 block leading-none mb-1">99.4%</span>
                    <span className="text-[6px] text-emerald-400/40 uppercase font-black tracking-tighter">Match Accuracy</span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex gap-2">
                    <div className="h-2 w-1/3 bg-primary/30 rounded-full overflow-hidden">
                       <motion.div 
                         animate={{ x: ["-100%", "100%"] }}
                         transition={{ duration: 1, repeat: Infinity }}
                         className="h-full w-full bg-primary"
                       />
                    </div>
                    <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Multi-Channel Execution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative aspect-[4/3] lg:aspect-square p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Share2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Omni-Channel Flow</h3>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Coordinated outreach across Cold Email, LinkedIn, and X to maximize touchpoints and conversion.
              </p>
            </div>

            <div className="flex-1 relative flex items-center justify-center py-4">
              <div className="grid grid-cols-1 gap-4 w-full px-4">
                {[
                  { icon: Mail, label: "Cold Email", color: "text-rose-400", status: "High Priority" },
                  { icon: Linkedin, label: "LinkedIn Connect", color: "text-blue-400", status: "Social Proof" },
                  { icon: XIcon, label: "X Direct Message", color: "text-white", status: "Intent Signal" }
                ].map((channel, i) => (
                  <motion.div
                    key={channel.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="relative flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group/item overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover/item:bg-primary transition-colors" />
                    
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <channel.icon className={`h-6 w-6 ${channel.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-xs font-bold text-white">{channel.label}</span>
                        <span className="text-[7px] font-black text-primary uppercase tracking-widest">{channel.status}</span>
                      </div>
                      <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 2, delay: 0.5 + i * 0.2 }}
                          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary to-primary/20"
                        />
                      </div>
                    </div>

                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500/60" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Background Glow for Card 2 */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
