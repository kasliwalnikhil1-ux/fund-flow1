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

            <div className="flex-1 relative flex items-center justify-center">
              {/* Tree Structure Animation */}
              <div className="relative w-full h-full max-h-[350px]">
                {/* Sources - Moved slightly inwards to reduce edge space */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20">
                  {[
                    { icon: Globe, color: "text-blue-400", label: "Website" },
                    { icon: Linkedin, color: "text-blue-600", label: "LinkedIn" },
                    { icon: XIcon, color: "text-white", label: "X" },
                    { icon: Facebook, color: "text-blue-500", label: "Facebook" }
                  ].map((source, i) => (
                    <motion.div
                      key={source.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 relative"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors backdrop-blur-md">
                        <source.icon className={`h-6 w-6 ${source.color}`} />
                      </div>
                      
                      {/* Connection Line to DM */}
                      <svg className="absolute left-12 top-1/2 w-[calc(100%+80px)] h-[100px] pointer-events-none overflow-visible" style={{ transform: 'translateY(-50%)' }}>
                        <motion.path
                          d={`M 0 50 L 120 ${50 - (i - 1.5) * 60}`}
                          stroke="url(#line-gradient)"
                          strokeWidth="1"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 0.2 }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                        />
                        
                        {/* Flowing Activity Icons */}
                        {[0, 1].map((p) => {
                          const FlowIcon = flowIcons[(i + p) % flowIcons.length];
                          return (
                            <motion.g key={p}>
                              <circle r="2" fill="var(--primary)" opacity="0">
                                <animateMotion
                                  dur={`${3 + Math.random() * 2}s`}
                                  repeatCount="indefinite"
                                  begin={`${p * 1.5 + i * 0.4}s`}
                                  path={`M 0 50 L 120 ${50 - (i - 1.5) * 60}`}
                                />
                              </circle>
                              <foreignObject width="20" height="20" x="-10" y="-10">
                                <motion.div
                                  animate={{ 
                                    opacity: [0, 1, 1, 0],
                                    scale: [0.5, 1, 1, 0.5]
                                  }}
                                  transition={{ 
                                    duration: 3, 
                                    repeat: Infinity, 
                                    delay: p * 1.5 + i * 0.4,
                                    ease: "linear"
                                  }}
                                  className="w-5 h-5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg flex items-center justify-center"
                                >
                                  <FlowIcon className="h-2.5 w-2.5 text-primary" />
                                </motion.div>
                                <animateMotion
                                  dur="3s"
                                  repeatCount="indefinite"
                                  begin={`${p * 1.5 + i * 0.4}s`}
                                  path={`M 0 50 L 120 ${50 - (i - 1.5) * 60}`}
                                />
                              </foreignObject>
                            </motion.g>
                          );
                        })}
                      </svg>
                    </motion.div>
                  ))}
                </div>

                {/* Definitions for SVG gradients */}
                <svg className="absolute w-0 h-0">
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
                      <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Output: Personalized DM - Moved to the right to fill space */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-56 bg-white/[0.05] border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-lg -z-10" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                        <MessageSquare className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block leading-none">AI Agent</span>
                        <span className="text-[7px] text-white/40 uppercase tracking-tighter">Drafting Personalized DM...</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <motion.div 
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="h-2 w-full bg-white/10 rounded-full overflow-hidden"
                      >
                         <div className="h-full w-full bg-primary/40" />
                      </motion.div>
                      <div className="h-2 w-4/5 bg-white/10 rounded-full" />
                      <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    </div>
                    
                    <motion.div 
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="mt-4 flex justify-end"
                    >
                      <div className="px-2 py-1 rounded bg-primary/20 border border-primary/30 text-[6px] font-bold text-primary uppercase">Ready to Send</div>
                    </motion.div>
                  </motion.div>
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
