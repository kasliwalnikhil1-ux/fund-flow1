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
              {/* Tree Structure Animation Based on Reference Image */}
              <div className="relative w-full h-full max-h-[350px] flex flex-col items-center justify-center">
                
                {/* Top Row: Sources */}
                <div className="grid grid-cols-4 gap-4 sm:gap-8 mb-20 relative z-20 w-full px-4">
                  {[
                    { icon: Linkedin, color: "text-[#0077B5]", label: "LINKEDIN", delay: 0 },
                    { icon: Globe, color: "text-[#4B5563]", label: "WEBSITE", delay: 0.1 },
                    { icon: Facebook, color: "text-[#1877F2]", label: "FACEBOOK", delay: 0.2 },
                    { icon: XIcon, color: "text-black", label: "X", delay: 0.3 }
                  ].map((source, i) => (
                    <motion.div
                      key={source.label}
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: source.delay }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shadow-lg relative group overflow-hidden">
                        <source.icon className={`h-7 w-7 sm:h-8 sm:w-8 ${source.color}`} />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[8px] sm:text-[9px] font-black text-white uppercase tracking-wider">{source.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* SVG Pipes / Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient id="pipe-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#94a3b8" />
                      <stop offset="100%" stopColor="#64748b" />
                    </linearGradient>
                  </defs>

                  {/* LinkedIn Pipe (Far Left) */}
                  <motion.path
                    d="M 50 80 L 50 180 L 140 180"
                    stroke="#334155"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Website Pipe (Center Left) */}
                  <motion.path
                    d="M 150 80 L 150 140 L 180 140 L 180 160"
                    stroke="#334155"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Facebook Pipe (Center Right) */}
                  <motion.path
                    d="M 250 80 L 250 140 L 220 140 L 220 160"
                    stroke="#334155"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* X Pipe (Far Right) */}
                  <motion.path
                    d="M 350 80 L 350 180 L 260 180"
                    stroke="#334155"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Flowing Activity Icons along the pipes */}
                  {[0, 1, 2, 3].map((i) => {
                    const paths = [
                      "M 50 80 L 50 180 L 140 180",
                      "M 150 80 L 150 140 L 180 140 L 180 160",
                      "M 250 80 L 250 140 L 220 140 L 220 160",
                      "M 350 80 L 350 180 L 260 180"
                    ];
                    const FlowIcon = flowIcons[i % flowIcons.length];
                    return (
                      <motion.g key={i}>
                        <foreignObject width="24" height="24" x="-12" y="-12">
                          <motion.div
                            animate={{ 
                              opacity: [0, 1, 1, 0],
                              scale: [0.6, 1, 1, 0.6]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              delay: i * 0.7,
                              ease: "easeInOut"
                            }}
                            className="w-6 h-6 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center shadow-md"
                          >
                            <FlowIcon className="h-3 w-3 text-primary" />
                          </motion.div>
                          <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            begin={`${i * 0.7}s`}
                            path={paths[i]}
                          />
                        </foreignObject>
                      </motion.g>
                    );
                  })}
                </svg>

                {/* Bottom Center: Personalized DM Terminal */}
                <div className="relative mt-4 z-30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-72 sm:w-80 bg-white border-4 border-slate-200 rounded-3xl p-4 shadow-2xl flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-black text-slate-800 uppercase tracking-widest mb-1">Personalized DM</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase">Generating AI response...</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                       <Linkedin className="h-4 w-4 text-slate-300" />
                    </div>
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
