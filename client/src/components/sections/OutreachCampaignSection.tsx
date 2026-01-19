import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Globe, 
  Linkedin, 
  Facebook, 
  MessageSquare, 
  Mail, 
  User,
  Zap,
  CheckCircle2,
  Share2,
  FileText,
  MessageCircle,
  Trophy,
  Activity,
  ThumbsUp,
  Star,
  Cpu,
  Send
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
            className="group relative h-full p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/5 opacity-50" />
            
            <div className="relative z-20">
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

            <div className="flex-1 relative flex flex-col items-center justify-center py-6">
              {/* Inspiration: Neural Scanning Storyboard */}
              <div className="w-full flex flex-col items-center gap-8 px-4 z-10">
                
                {/* 1. SCANNING LAYER: Platforms with "Deep-Scan" status */}
                <div className="flex justify-center gap-4 lg:gap-6 w-full relative">
                  {[
                    { icon: Globe, label: "Website", color: "text-blue-400", status: "Scanning...", signals: [{ icon: Activity, label: "Recent Post", delay: 0 }] },
                    { icon: Linkedin, label: "LinkedIn", color: "text-[#0077b5]", status: "Analyzing...", signals: [{ icon: Trophy, label: "Achievement", delay: 0.8 }] },
                    { icon: XIcon, label: "X", color: "text-white", status: "Parsing...", signals: [{ icon: ThumbsUp, label: "Engagement", delay: 1.5 }] },
                    { icon: Facebook, label: "Facebook", color: "text-blue-600", status: "Extracting...", signals: [] }
                  ].map((platform, i) => (
                    <motion.div
                      key={platform.label}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2 flex-1 max-w-[80px] relative"
                    >
                      {/* Falling Signals for this specific icon */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-full h-32 pointer-events-none z-0">
                        <AnimatePresence>
                          {platform.signals.map((signal, sIndex) => (
                            <motion.div
                              key={`${platform.label}-signal-${sIndex}`}
                              initial={{ opacity: 0, y: 0, scale: 0.5 }}
                              animate={{ 
                                opacity: [0, 1, 1, 0],
                                y: [0, 80],
                                scale: [0.5, 1, 1, 0.5]
                              }}
                              transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                delay: signal.delay,
                                ease: "linear"
                              }}
                              className="absolute left-1/2 -translate-x-1/2 px-2 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md flex items-center gap-1.5 shadow-lg shadow-primary/5 whitespace-nowrap"
                            >
                              <signal.icon className="h-2 w-2 text-primary" />
                              <span className="text-[6px] font-black text-white uppercase tracking-tighter">{signal.label}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      <div className="w-full aspect-square rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group z-10">
                        {/* Precision light line scan (Page 1 Style) */}
                        <motion.div 
                          animate={{ y: ["-100%", "200%"] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                          className="absolute inset-x-0 h-[1px] bg-primary/40 shadow-[0_0_12px_#8b5cf6] z-30 pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
                        <platform.icon className={`h-6 w-6 lg:h-8 lg:w-8 ${platform.color} relative z-10 transition-transform group-hover:scale-110 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]`} />
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <span className="text-[7px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">{platform.label}</span>
                        <motion.span 
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-[5px] font-bold text-primary uppercase whitespace-nowrap"
                        >
                          {platform.status}
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 2. NEURAL SYNTHESIS: The AI Core processing signals */}
                <div className="relative flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ 
                      boxShadow: ["0 0 20px rgba(139,92,246,0.2)", "0 0 60px rgba(139,92,246,0.6)", "0 0 20px rgba(139,92,246,0.2)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 rounded-full bg-black border-2 border-primary/40 backdrop-blur-3xl flex items-center justify-center relative group"
                  >
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)]" />
                    <Cpu className="h-8 w-8 text-primary relative z-10 animate-pulse" />
                    
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-8px] border border-dashed border-primary/20 rounded-full"
                    />
                  </motion.div>
                  <div className="mt-4 flex flex-col items-center gap-2">
                    <span className="text-[8px] font-black text-white uppercase tracking-[0.4em]">Neural Synth Engine</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3].map(i => (
                        <motion.div 
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          className="w-1 h-1 rounded-full bg-primary" 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Personalized Outreach Snippets */}
                <div className="w-full flex flex-col gap-3">
                  {[
                    {
                      platform: "LINKEDIN",
                      icon: Linkedin,
                      tag: "PERSONALIZED HOOK",
                      content: "\"Hey {name}, loved your recent post about {topic}. Your approach to {industry} is unique. Would love to...\"",
                      color: "text-blue-400"
                    },
                    {
                      platform: "X / TWITTER",
                      icon: XIcon,
                      tag: "INTEREST BASED",
                      content: "\"Caught your thread on {trend}. Great insights on {keyword}. I've been working on something similar...\"",
                      color: "text-white"
                    }
                  ].map((snippet, i) => (
                    <motion.div
                      key={snippet.platform}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <snippet.icon className={`w-3.5 h-3.5 ${snippet.color}`} />
                          <span className="text-[9px] font-bold text-white tracking-wider">{snippet.platform}</span>
                        </div>
                        <span className="text-[7px] font-black text-primary/60 uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10">
                          {snippet.tag}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/60 font-medium italic leading-relaxed">
                        {snippet.content}
                      </p>
                    </motion.div>
                  ))}
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
