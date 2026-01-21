import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Mail, Lock, ArrowRight, Github, Chrome, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In mockup mode, we just simulate a login and go to onboarding
    setLocation("/onboarding");
  };

  return (
    <div className="min-h-screen bg-[#020202] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link href="/">
            <div className="inline-flex items-center gap-2 mb-6 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tighter">Lemni</span>
            </div>
          </Link>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Access Pipeline</h1>
          <p className="text-white/40">Secure access to your investor pipeline</p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
          {/* Internal Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <Input 
                    type="email" 
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/[0.02] border-white/10 h-12 pl-12 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-all rounded-xl text-white placeholder:text-white/10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Password</label>
                  <a href="#" className="text-[10px] font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">Forgot?</a>
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors">
                    <Lock className="h-4 w-4" />
                  </div>
                  <Input 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/[0.02] border-white/10 h-12 pl-12 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-all rounded-xl text-white placeholder:text-white/10"
                    required
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Sign In
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                <span className="bg-[#0b0b0b] px-4 text-white/20">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button 
                variant="outline" 
                className="bg-white/[0.02] border-white/10 hover:bg-white/5 hover:text-white text-white/60 rounded-xl h-12 transition-all flex gap-2 w-full"
                onClick={() => setLocation("/")}
              >
                <Chrome className="h-4 w-4" />
                Sign in with Google
              </Button>
            </div>
          </form>
        </div>

        <p className="text-center mt-8 text-white/40 text-sm">
          Don't have an account?{" "}
          <Link href="/login">
            <span className="text-primary font-bold cursor-pointer hover:underline underline-offset-4">Get Started</span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
