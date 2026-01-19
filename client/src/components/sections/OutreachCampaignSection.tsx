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
  Cpu
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

            <div className="flex-1 relative flex items-center justify-center overflow-hidden py-10">
              {/* Background Scanning Animation Inspired by Page 1 */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf611_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf611_1px,transparent_1px)] bg-[size:40px_40px]" />
                <motion.div 
                  animate={{ 
                    y: ["0%", "100%", "0%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                />
              </div>

              {/* Inspiration-based Mind Map Layout with Sequential Animation */}
              <div className="relative w-full h-full flex flex-col items-center justify-start gap-8 px-4 z-10">
                
                {/* 1. Top Row: Platform Icons (Sources) */}
                <div className="flex justify-center gap-6 lg:gap-10">
                  {[
                    { icon: Globe, label: "Website", color: "bg-blue-500", iconColor: "text-white" },
                    { icon: Linkedin, label: "LinkedIn", color: "bg-[#0077b5]", iconColor: "text-white" },
                    { icon: XIcon, label: "X", color: "bg-black", iconColor: "text-white" },
                    { icon: Facebook, label: "Facebook", color: "bg-[#1877f2]", iconColor: "text-white" }
                  ].map((platform, i) => (
                    <motion.div
                      key={platform.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: "easeOut"
                      }}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${platform.color} flex items-center justify-center shadow-lg border border-white/10 relative overflow-hidden`}
                      >
                        {/* Internal Scanning Beam */}
                        <motion.div 
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className="absolute top-0 left-0 w-full h-full bg-white/20 skew-x-12"
                        />
                        <platform.icon className={`h-6 w-6 lg:h-7 lg:w-7 ${platform.iconColor} relative z-10`} />
                      </motion.div>
                      <span className="text-[10px] font-medium text-white/60 tracking-tight">{platform.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* 2. Middle Row: Signal Cards (Transformation) */}
                <div className="relative flex justify-center gap-4 w-full h-24 lg:h-32 mt-4">
                  {/* Connecting Lines with Flowing Particles */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {[30, 43, 57, 70].map((x, i) => (
                      <g key={i}>
                        <motion.path
                          d={`M ${x}% 0 L ${x}% 20`}
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.5, duration: 1 }}
                        />
                        <motion.circle r="2" fill="#8b5cf6">
                          <animateMotion 
                            dur="2s" 
                            repeatCount="indefinite" 
                            path={`M ${x}% 0 L ${x}% 20`}
                            begin={`${i * 0.2 + 0.5}s`}
                          />
                        </motion.circle>
                      </g>
                    ))}
                  </svg>
                  
                  {[
                    { label: "Recent Posts", icon: Activity, delay: 0.6 },
                    { label: "Achievements", icon: Trophy, delay: 0.8, highlight: true },
                    { label: "Engagement Signals", icon: ThumbsUp, delay: 1.0 }
                  ].map((card, i) => (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: card.delay, duration: 0.5 }}
                      className={`relative w-28 lg:w-36 p-3 rounded-xl border backdrop-blur-md shadow-xl flex flex-col items-center gap-2 overflow-hidden ${
                        card.highlight 
                        ? "bg-white/10 border-white/20 z-10 scale-105" 
                        : "bg-white/5 border-white/10"
                      }`}
                    >
                      {/* Scanning effect on the cards themselves */}
                      <motion.div 
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0"
                      />
                      
                      <span className="text-[8px] lg:text-[10px] font-bold text-white/80 uppercase tracking-tight text-center leading-tight relative z-10">
                        {card.label}
                      </span>
                      <div className="w-full h-8 bg-white/5 rounded-md flex items-center justify-center overflow-hidden relative z-10">
                        <card.icon className={`h-4 w-4 ${card.highlight ? "text-amber-400" : "text-white/40"}`} />
                      </div>
                      {card.highlight && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                          <motion.div 
                            animate={{ y: [0, -5, 0], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex gap-1"
                          >
                            <Trophy className="h-3 w-3 text-amber-400 fill-amber-400" />
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* 3. Bottom Area: The Resulting DM Card (Personalization) */}
                <div className="relative w-full max-w-sm mt-4">
                  {/* Flow Arrow with Pulse Effect */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, y: [0, 5, 0] }}
                      transition={{ delay: 1.2, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
                    className="bg-[#f8f9ff] rounded-2xl p-5 shadow-2xl border border-primary/20 relative overflow-hidden"
                  >
                    {/* Glowing Purple Border from Image */}
                    <motion.div 
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 border-2 border-primary/40 rounded-2xl pointer-events-none" 
                    />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-900 leading-none">Hi [Name]</span>
                          <div className="flex gap-0.5">
                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-gray-300" />)}
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">Direct Message</span>
                      </div>
                    </div>

                    <div className="space-y-3 relative">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                        className="bg-primary/5 rounded-xl p-3 border border-primary/10"
                      >
                        <p className="text-[11px] text-gray-700 leading-relaxed font-medium">
                          Loved your recent post about! <br />
                          Congrats on the [Topic] <br />
                          Achievement!
                        </p>
                      </motion.div>

                      {/* Floating Sparkle Icon (The "Aha" moment) */}
                      <div className="absolute -right-2 top-0">
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 6 }}
                          transition={{ 
                            delay: 2.5, 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 10 
                          }}
                          className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/40"
                        >
                          <Star className="h-6 w-6 text-white fill-white" />
                        </motion.div>
                      </div>

                      <div className="flex justify-end pr-2 opacity-50">
                        <motion.div 
                          whileHover={{ scale: 1.1, x: 5 }}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>

            {/* Bottom Status Panel */}
            <div className="relative z-20 p-8 pt-0">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center"
                    >
                      <MessageSquare className="h-4 w-4 text-emerald-400" />
                    </motion.div>
                    <div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider block leading-none mb-1">CRAFTING HYPER-PERSONALIZED DM</span>
                      <div className="flex gap-2">
                        <span className="text-[6px] text-blue-400 uppercase font-black tracking-widest">Analyzing Activity</span>
                        <span className="text-[6px] text-amber-400 uppercase font-black tracking-widest">Matching Tone</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[12px] font-black text-emerald-400 block leading-none mb-1">99.4%</span>
                    <span className="text-[6px] text-emerald-400/40 uppercase font-black tracking-tighter">Human Score</span>
                  </div>
                </div>
                
                {/* Live Drafting Preview Mockup */}
                <div className="mb-4 bg-black/40 rounded-xl p-3 border border-white/5">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  </div>
                  <div className="space-y-1.5">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "80%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      className="h-1 bg-white/20 rounded-full" 
                    />
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
                      className="h-1 bg-white/10 rounded-full" 
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex gap-2">
                    <div className="h-2 w-1/3 bg-primary/30 rounded-full overflow-hidden">
                       <motion.div 
                         animate={{ x: ["-100%", "100%"] }}
                         transition={{ duration: 1, repeat: Infinity }}
                         className="h-full w-full bg-primary shadow-[0_0_10px_#8b5cf6]"
                       />
                    </div>
                    <div className="h-2 w-2/3 bg-white/10 rounded-full" />
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
