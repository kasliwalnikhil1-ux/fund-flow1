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

            <div className="flex-1 relative flex items-center justify-center overflow-hidden py-10 min-h-[400px]">
              {/* Inspiration: Neural Scanning Storyboard */}
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-12 px-4 z-10">
                
                {/* 1. SCANNING LAYER: Platforms with "Deep-Scan" status */}
                <div className="flex justify-center gap-4 lg:gap-8 relative">
                  {[
                    { icon: Globe, label: "Website", color: "text-blue-400", status: "Scanning..." },
                    { icon: Linkedin, label: "LinkedIn", color: "text-[#0077b5]", status: "Analyzing..." },
                    { icon: XIcon, label: "X", color: "text-white", status: "Parsing..." },
                    { icon: Facebook, label: "Facebook", color: "text-blue-600", status: "Extracting..." }
                  ].map((platform, i) => (
                    <motion.div
                      key={platform.label}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                        {/* Page 1 Style Scanning Beam */}
                        <motion.div 
                          animate={{ y: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                          className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_#8b5cf6] z-20"
                        />
                        <platform.icon className={`h-6 w-6 lg:h-8 lg:w-8 ${platform.color} relative z-10 transition-transform group-hover:scale-110`} />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">{platform.label}</span>
                        <motion.span 
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-[5px] font-bold text-primary uppercase"
                        >
                          {platform.status}
                        </motion.span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 3. FINAL OUTPUT: Crafted Personalized DMs */}
                <div className="w-full max-w-2xl mt-8 relative z-10 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { 
                        platform: "LinkedIn", 
                        icon: Linkedin, 
                        color: "text-[#0077b5]",
                        bg: "bg-[#0077b5]/5",
                        message: "Hey {name}, loved your recent post about {topic}. Your approach to {industry} is unique. Would love to...",
                        tag: "Personalized Hook"
                      },
                      { 
                        platform: "X / Twitter", 
                        icon: XIcon, 
                        color: "text-white",
                        bg: "bg-white/5",
                        message: "Caught your thread on {trend}. Great insights on {keyword}. I've been working on something similar...",
                        tag: "Interest Based"
                      }
                    ].map((dm, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className={`p-4 rounded-2xl ${dm.bg} border border-white/10 backdrop-blur-md relative overflow-hidden group`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <dm.icon className={`h-4 w-4 ${dm.color}`} />
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{dm.platform}</span>
                          </div>
                          <span className="text-[8px] font-black text-primary uppercase tracking-tighter bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">{dm.tag}</span>
                        </div>
                        
                        <div className="relative">
                          <p className="text-[11px] text-white/70 leading-relaxed font-medium italic">
                            "{dm.message}"
                          </p>
                          {/* Typer effect animation placeholder */}
                          <motion.div 
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-1 h-3 bg-primary ml-1 align-middle"
                          />
                        </div>

                        {/* Synthesis Glow */}
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Connection Line from Engine */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 Removed per user request */}
        </div>
      </div>
    </section>
  );
}
