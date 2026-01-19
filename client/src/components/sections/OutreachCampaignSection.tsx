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
            className="group relative aspect-square p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col"
          >
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Personalization Engine</h3>
              </div>
              <p className="text-sm text-white/40 leading-relaxed">
                Scanning recent posts, articles, and social activity to generate unique, context-aware DMs.
              </p>
            </div>

            <div className="flex-1 relative w-full h-full flex items-center justify-center min-h-[300px]">
              {/* Mind Map Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                <defs>
                  <linearGradient id="mind-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.4)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.8)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Lines from Sources to AI Agent */}
                {[0, 1, 2, 3].map((i) => {
                  const startY = 20 + i * 20;
                  const path = `M 15% ${startY}% C 25% ${startY}%, 35% 50%, 50% 50%`;
                  return (
                    <g key={`in-${i}`}>
                      <motion.path
                        d={path}
                        stroke="rgba(139, 92, 246, 0.2)"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                      />
                      {/* Flowing Data Particles */}
                      {[0, 1].map((p) => {
                        const FlowIcon = flowIcons[(i + p) % flowIcons.length];
                        return (
                          <motion.g key={p}>
                            <foreignObject width="20" height="20" x="-10" y="-10">
                              <motion.div
                                animate={{ 
                                  opacity: [0, 1, 0],
                                  scale: [0.5, 1, 0.5]
                                }}
                                transition={{ 
                                  duration: 3, 
                                  repeat: Infinity, 
                                  delay: p * 1.5 + i * 0.4
                                }}
                                className="w-5 h-5 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20"
                              >
                                <FlowIcon className="h-2.5 w-2.5 text-primary" />
                              </motion.div>
                              <animateMotion
                                dur="3s"
                                repeatCount="indefinite"
                                begin={`${p * 1.5 + i * 0.4}s`}
                                path={path}
                              />
                            </foreignObject>
                          </motion.g>
                        );
                      })}
                    </g>
                  );
                })}

                {/* Main Mind-Map Branch: AI Agent to Drafting DM */}
                <motion.path
                  d="M 50% 50% C 65% 50%, 75% 50%, 85% 50%"
                  stroke="url(#mind-grad)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                
                {/* Intelligence Flow from Brain to Card */}
                <motion.circle
                  r="3"
                  fill="#8b5cf6"
                  filter="url(#glow)"
                >
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path="M 50% 50% C 65% 50%, 75% 50%, 85% 50%"
                  />
                </motion.circle>
              </svg>

              {/* Sources - Left Side (Mind Map Nodes) */}
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-6 lg:gap-10 z-20">
                {[
                  { icon: Globe, color: "text-blue-400" },
                  { icon: Linkedin, color: "text-blue-600" },
                  { icon: XIcon, color: "text-white" },
                  { icon: Facebook, color: "text-blue-500" }
                ].map((source, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", delay: i * 0.1 }}
                    className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md relative z-20 hover:border-primary transition-colors cursor-pointer"
                  >
                    <source.icon className={`h-5 w-5 lg:h-6 lg:w-6 ${source.color}`} />
                    <div className="absolute -inset-1 bg-primary/10 rounded-full blur-sm -z-10" />
                  </motion.div>
                ))}
              </div>

              {/* Central AI Agent (Main Hub) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  animate={{ 
                    boxShadow: ["0 0 20px rgba(139,92,246,0.1)", "0 0 60px rgba(139,92,246,0.5)", "0 0 20px rgba(139,92,246,0.1)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary/20 border border-primary/40 flex flex-col items-center justify-center backdrop-blur-xl relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-dashed border-primary/40 rounded-full"
                  />
                  <Cpu className="h-8 w-8 lg:h-10 lg:w-10 text-primary mb-1 animate-pulse" />
                  <span className="text-[7px] lg:text-[8px] font-black text-primary uppercase tracking-[0.3em]">Neural Hub</span>
                </motion.div>
              </div>

              {/* Output: Personalized DM (Final Node) */}
              <div className="absolute left-[85%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="w-48 lg:w-56 bg-white/[0.03] border border-white/10 rounded-[2rem] p-5 lg:p-6 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                      <MessageSquare className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-[8px] lg:text-[9px] font-black text-emerald-400 uppercase tracking-widest block leading-none">Personalized DM</span>
                      <span className="text-[6px] lg:text-[7px] text-white/40 uppercase tracking-tighter">Drafted & Verified</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-white/5 rounded-full" />
                    <div className="h-1.5 w-4/5 bg-white/5 rounded-full" />
                    <div className="h-1.5 w-2/3 bg-primary/20 rounded-full" />
                  </div>
                </motion.div>
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
