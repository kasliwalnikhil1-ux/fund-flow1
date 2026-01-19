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
                    { icon: Globe, label: "Web", color: "bg-blue-500", status: "Scanning..." },
                    { icon: Linkedin, label: "LinkedIn", color: "bg-[#0077b5]", status: "Analyzing..." },
                    { icon: XIcon, label: "X", color: "bg-black", status: "Parsing..." },
                    { icon: Facebook, label: "FB", color: "bg-[#1877f2]", status: "Extracting..." }
                  ].map((platform, i) => (
                    <motion.div
                      key={platform.label}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl ${platform.color} flex items-center justify-center shadow-2xl border border-white/10 relative overflow-hidden`}>
                        {/* Page 1 Style Scanning Beam */}
                        <motion.div 
                          animate={{ y: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                          className="absolute top-0 left-0 w-full h-[2px] bg-white shadow-[0_0_15px_white] z-20"
                        />
                        <platform.icon className="h-6 w-6 lg:h-8 lg:w-8 text-white relative z-10" />
                        <div className="absolute inset-0 bg-black/20" />
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

                {/* 2. NEURAL SYNTHESIS: The AI Core processing signals */}
                <div className="relative flex flex-col items-center justify-center">
                  {/* Floating Signals (Recent Posts, Achievements, etc) */}
                  <div className="absolute -top-12 flex gap-4">
                    {[
                      { icon: Activity, label: "Recent Post", delay: 0 },
                      { icon: Trophy, label: "Achievement", delay: 0.5 },
                      { icon: ThumbsUp, label: "Engagement", delay: 1 }
                    ].map((signal, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          y: [0, 40],
                          scale: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: signal.delay,
                          ease: "easeIn"
                        }}
                        className="px-2 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md flex items-center gap-1"
                      >
                        <signal.icon className="h-2 w-2 text-primary" />
                        <span className="text-[5px] font-black text-white uppercase tracking-tighter">{signal.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    animate={{ 
                      boxShadow: ["0 0 20px rgba(139,92,246,0.2)", "0 0 60px rgba(139,92,246,0.6)", "0 0 20px rgba(139,92,246,0.2)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-black border-2 border-primary/40 backdrop-blur-3xl flex items-center justify-center relative group"
                  >
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2)_0%,transparent_70%)]" />
                    <Cpu className="h-10 w-10 text-primary relative z-10 animate-pulse" />
                    
                    {/* Rotating Tech Rings */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-8px] border border-dashed border-primary/20 rounded-full"
                    />
                  </motion.div>
                  <div className="mt-4 flex flex-col items-center">
                    <span className="text-[8px] font-black text-white uppercase tracking-[0.4em]">Neural Synth Engine</span>
                    <div className="flex gap-0.5 mt-1">
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

                {/* 3. OUTPUT LAYER: The DM Synthesis Dashboard */}
                <div className="relative w-full max-w-[400px]">
                  <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-3xl shadow-[0_0_100px_rgba(139,92,246,0.15)] relative overflow-hidden group">
                    {/* Glowing Accent */}
                    <motion.div 
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-24 -right-24 w-48 h-48 bg-primary rounded-full blur-[80px] pointer-events-none" 
                    />
                    
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30"
                        >
                          <MessageSquare className="h-6 w-6 text-primary shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                        </motion.div>
                        <div className="flex gap-2">
                          <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[8px] font-black text-white/60 uppercase tracking-widest">Synthesis in Progress</span>
                          </motion.div>
                        </div>
                      </div>
                      <div className="text-right">
                        <motion.span 
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-xl font-black text-emerald-400 block leading-none"
                        >
                          99.4%
                        </motion.span>
                        <span className="text-[8px] text-emerald-400/60 uppercase font-black tracking-tighter">Human Score</span>
                      </div>
                    </div>
                    
                    {/* Live Drafting Visualization */}
                    <div className="space-y-4 relative z-10">
                      <div className="bg-black/40 rounded-2xl p-4 border border-white/5 shadow-inner">
                        <div className="flex gap-1.5 mb-4">
                          <div className="w-2 h-2 rounded-full bg-rose-500/40" />
                          <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                        </div>
                        <div className="space-y-2.5">
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: ["0%", "85%", "85%", "95%", "95%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="h-1.5 bg-gradient-to-r from-primary/40 to-primary/10 rounded-full" 
                          />
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: ["0%", "0%", "65%", "65%", "80%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="h-1.5 bg-gradient-to-r from-primary/30 to-primary/5 rounded-full" 
                          />
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: ["0%", "0%", "0%", "45%", "60%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="h-1.5 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full" 
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">Live Synthesis Active</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="h-1 w-16 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="h-full w-full bg-emerald-500/40 shadow-[0_0_10px_#10b981]"
                              />
                           </div>
                           <Star className="h-3 w-3 text-emerald-400 animate-spin-slow" />
                        </div>
                      </div>
                    </div>

                    {/* Background Tech Detail */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent)] pointer-events-none" />
                  </div>
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
