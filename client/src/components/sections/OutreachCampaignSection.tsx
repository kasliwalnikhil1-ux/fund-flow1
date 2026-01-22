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
    <section id="outreach" className="relative min-h-screen bg-[#020202] py-20 overflow-hidden flex flex-col justify-center scroll-mt-16">
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
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Phase 05 & Phase 06</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Hyper-Personalized <br className="hidden md:block" />
            <span className="text-primary">Multi-Channel Outreach.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4 md:px-0"
          >
            We don't just send messages. We analyze recent activities across all platforms to craft human-like, high-conversion interactions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {/* Card 1: Hyper-Personalization Engine */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative h-auto min-h-[500px] md:h-full p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/5 opacity-50" />
            
            <div className="relative z-20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-sm">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">PHASE 05</h3>
                    <p className="text-xs font-medium text-white/60 leading-tight max-w-[200px] mt-1">We scan multiple data points to craft a high-converting, human outreach strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative flex flex-col items-center justify-center py-2">
              {/* Inspiration: Neural Scanning Storyboard */}
              <div className="w-full flex flex-col items-center gap-6 px-4 z-10 scale-[0.95]">
                
                {/* 1. SCANNING LAYER: Platforms with "Deep-Scan" status */}
                <div className="flex justify-center gap-4 lg:gap-6 w-full relative">
                  {[
                    { icon: Globe, label: "Website", color: "text-blue-400", signal: { icon: Activity, label: "Recent Post" } },
                    { icon: Linkedin, label: "LinkedIn", color: "text-[#0077b5]", signal: { icon: Trophy, label: "Achievement" } },
                    { icon: XIcon, label: "X", color: "text-white", signal: { icon: ThumbsUp, label: "Engagement" } },
                    { icon: Facebook, label: "Facebook", color: "text-blue-600", signal: { icon: Activity, label: "Signal" } }
                  ].map((platform, i) => (
                    <motion.div
                      key={platform.label}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2 flex-1 max-w-[80px] relative"
                    >
                      {/* Randomized Falling Signals with specific labels */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-10 w-full h-32 pointer-events-none z-0">
                        <AnimatePresence>
                          {[0].map((sIndex) => (
                            <motion.div
                              key={`${platform.label}-signal-${sIndex}`}
                              initial={{ opacity: 0, y: 0, scale: 0.5 }}
                              animate={{ 
                                opacity: [0, 1, 1, 0],
                                y: [0, 100],
                                scale: [0.5, 1, 1, 0.5],
                                x: [Math.random() * 20 - 10, Math.random() * 20 - 10]
                              }}
                              transition={{ 
                                duration: 3 + Math.random() * 2, 
                                repeat: Infinity, 
                                delay: i * 1.2 + Math.random(),
                                ease: "linear"
                              }}
                              className="absolute left-1/2 -translate-x-1/2 px-2 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md flex items-center gap-1.5 shadow-lg shadow-primary/5 whitespace-nowrap"
                            >
                              <platform.signal.icon className="h-2 w-2 text-primary" />
                              <span className="text-[6px] font-black text-white uppercase tracking-tighter">{platform.signal.label}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      <div className="w-full aspect-square rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group z-10">
                        {/* Phase 2 Style Scanning Beam - Thicker and more intense */}
                        <motion.div 
                          animate={{ y: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_#8b5cf6,0_0_40px_rgba(139,92,246,0.4)] z-30 pointer-events-none opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                        <platform.icon className={`h-6 w-6 lg:h-8 lg:w-8 ${platform.color} relative z-10 transition-transform group-hover:scale-110 drop-shadow-[0_0_12px_rgba(139,92,246,0.4)]`} />
                        
                        {/* Background mesh/grid detail like Phase 2 */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:8px_8px]" />
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <span className="text-[7px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">{platform.label}</span>
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

          {/* Card 2: Omni-Channel Execution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative h-auto min-h-[500px] md:h-full p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/5 opacity-50" />
            
            <div className="relative z-20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-sm">
                    <Share2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">PHASE 06</h3>
                    <p className="text-xs font-medium text-white/60 leading-tight max-w-[200px] mt-1">
                      Coordinated outreach across Cold Email, LinkedIn, X, and WhatsApp for maximum touchpoints.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative flex flex-col items-center justify-center py-4">
              <div className="w-full max-w-[320px] relative min-h-[320px]">
                {/* Decision Node: Top */}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mx-auto w-fit px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-12 relative z-20"
                >
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3 text-primary" />
                    <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Target Investor</span>
                  </div>
                </motion.div>

                {/* Main Stem Line */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-[180px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent -z-10" />

                {/* Flow Channels with Connected Lines */}
                <div className="relative space-y-8">
                  {[
                    { icon: Mail, label: "Cold Email", color: "text-rose-400", side: "left", delay: 0.2 },
                    { icon: Linkedin, label: "LinkedIn Connect", color: "text-blue-400", side: "right", delay: 0.4 },
                    { icon: XIcon, label: "X Direct Message", color: "text-white", side: "left", delay: 0.6 }
                  ].map((channel, i) => (
                    <div key={channel.label} className="relative">
                      {/* Branching Line from Stem to Card */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "48px" }}
                        transition={{ delay: channel.delay, duration: 0.5 }}
                        className={`absolute top-1/2 h-[1px] bg-primary/30 -z-10 ${channel.side === "left" ? "right-1/2" : "left-1/2"}`}
                      />
                      
                      <motion.div
                        initial={{ opacity: 0, x: channel.side === "left" ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: channel.delay + 0.2 }}
                        className={`flex items-center gap-3 p-3 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl relative overflow-hidden group/item hover:border-primary/40 transition-colors w-[180px] ${channel.side === "left" ? "mr-auto" : "ml-auto"}`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                          <channel.icon className={`h-4 w-4 ${channel.color}`} />
                        </div>
                        <span className="text-[9px] font-bold text-white/90">{channel.label}</span>
                        
                        <motion.div 
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className="ml-auto"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                        </motion.div>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* Action button mock */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-12 mx-auto w-fit px-6 py-2.5 rounded-full bg-primary shadow-[0_0_25px_rgba(139,92,246,0.5)] flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all"
                >
                  <Send className="h-3 w-3 text-white" />
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">Launch Sequence</span>
                </motion.div>
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
