import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";
import { 
  Zap, ArrowRight, ArrowLeft, CheckCircle2, 
  Building2, User, Globe, Target, Rocket,
  Search, Briefcase, Plus, Minus, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Onboarding() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    orgName: "",
    experience: "",
    capitalRaised: "",
    sector: "",
    subSector: "",
    stage: "",
    hq: "",
    description: "",
    customers: "",
    isGeneratingRevenue: null as boolean | null,
    arr: "",
    existingInvestors: [] as string[],
    themes: [] as string[],
    similarCompanies: [] as string[],
    timeline: "",
    targetRoundSize: "",
    investorType: ""
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const ProgressIndicator = () => (
    <div className="flex gap-2 mb-12 justify-center">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div 
          key={i}
          className={`h-1 rounded-full transition-all duration-500 ${
            i <= step ? "w-8 bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" : "w-4 bg-white/10"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold tracking-widest uppercase text-white/40">Onboarding</span>
          </div>
          <ProgressIndicator />
        </div>

        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Step 1: Founder Identity */}
            {step === 1 && (
              <motion.div key="step1" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-display font-bold mb-2">What's your name?</h2>
                  <p className="text-white/40">Let's start with the basics.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">First Name</label>
                    <Input 
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="bg-white/[0.02] border-white/10 h-14 rounded-xl focus:ring-primary/50 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Last Name</label>
                    <Input 
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="bg-white/[0.02] border-white/10 h-14 rounded-xl focus:ring-primary/50 text-lg"
                    />
                  </div>
                </div>
                <Button onClick={nextStep} disabled={!formData.firstName || !formData.lastName} className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold group">
                  Continue <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            )}

            {/* Step 2: Organization Setup */}
            {step === 2 && (
              <motion.div key="step2" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="text-center mb-8">
                  <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-display font-bold mb-2">Workspace Setup</h2>
                  <p className="text-white/40">Join or create an organization to get started.</p>
                </div>
                <div className="space-y-4">
                   <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                      <p className="text-white/40 text-sm mb-4">No pending invitations found.</p>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/60 uppercase tracking-widest block text-left ml-1">Company Name</label>
                        <Input 
                          placeholder="e.g. Lemni AI"
                          value={formData.orgName}
                          onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                          className="bg-white/[0.02] border-white/10 h-14 rounded-xl focus:ring-primary/50 text-lg"
                        />
                      </div>
                   </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" onClick={prevStep} className="h-14 px-6 rounded-xl hover:bg-white/5">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.orgName} className="flex-1 h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold group">
                    Create Organization <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Founder Details */}
            {step === 3 && (
              <motion.div key="step3" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="text-center mb-8">
                  <User className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-display font-bold mb-2">Founder Details</h2>
                  <p className="text-white/40">Your background helps us tailor investor matching.</p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Fundraising Experience</label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: 'getting-started', title: 'Getting Started', desc: 'First time raising venture capital' },
                        { id: 'seasoned', title: 'Seasoned', desc: 'Raised 1–2 venture rounds' },
                        { id: 'expert', title: 'Expert', desc: 'Raised 3+ venture rounds' }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setFormData({...formData, experience: opt.id})}
                          className={`p-4 rounded-xl border transition-all text-left group ${
                            formData.experience === opt.id 
                            ? "bg-primary/10 border-primary text-white" 
                            : "bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20"
                          }`}
                        >
                          <div className="font-bold">{opt.title}</div>
                          <div className="text-xs opacity-60">{opt.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Total Capital Raised to Date</label>
                    <Select onValueChange={(val) => setFormData({...formData, capitalRaised: val})}>
                      <SelectTrigger className="bg-white/[0.02] border-white/10 h-14 rounded-xl">
                        <SelectValue placeholder="Select amount" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0b0b0b] border-white/10 text-white">
                        <SelectItem value="none">No amount raised</SelectItem>
                        <SelectItem value="<100k">Less than $100K</SelectItem>
                        <SelectItem value="100k-500k">$100K–$500K</SelectItem>
                        <SelectItem value="500k-2m">$500K–$2M</SelectItem>
                        <SelectItem value="2m-10m">$2M–$10M</SelectItem>
                        <SelectItem value=">10m">More than $10M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" onClick={prevStep} className="h-14 px-6 rounded-xl hover:bg-white/5">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.experience || !formData.capitalRaised} className="flex-1 h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold group">
                    Next <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Company Details */}
            {step === 4 && (
              <motion.div key="step4" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-display font-bold mb-2">Company Details</h2>
                  <p className="text-white/40">Precision data for better investor relevance.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Sector</label>
                      <Select onValueChange={(val) => setFormData({...formData, sector: val})}>
                        <SelectTrigger className="bg-white/[0.02] border-white/10 h-12 rounded-xl">
                          <SelectValue placeholder="Select sector" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0b0b0b] border-white/10 text-white">
                          <SelectItem value="saas">SaaS</SelectItem>
                          <SelectItem value="ai">AI / Machine Learning</SelectItem>
                          <SelectItem value="fintech">Fintech</SelectItem>
                          <SelectItem value="healthtech">Healthtech</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="web3">Web3 / Crypto</SelectItem>
                          <SelectItem value="deeptech">DeepTech</SelectItem>
                          <SelectItem value="climatetech">ClimateTech</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Upcoming Stage</label>
                      <Select onValueChange={(val) => setFormData({...formData, stage: val})}>
                        <SelectTrigger className="bg-white/[0.02] border-white/10 h-12 rounded-xl">
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0b0b0b] border-white/10 text-white">
                          <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="series-a">Series A</SelectItem>
                          <SelectItem value="series-b">Series B</SelectItem>
                          <SelectItem value="series-c">Series C+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Company HQ</label>
                    <Select onValueChange={(val) => setFormData({...formData, hq: val})}>
                      <SelectTrigger className="bg-white/[0.02] border-white/10 h-12 rounded-xl">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0b0b0b] border-white/10 text-white">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="sg">Singapore</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">What product or service do you offer?</label>
                    <Textarea 
                      placeholder="Briefly describe your core value proposition..."
                      className="bg-white/[0.02] border-white/10 min-h-[100px] rounded-xl"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Who are your customers?</label>
                    <Textarea 
                      placeholder="e.g. Enterprise HR departments, Indie developers..."
                      className="bg-white/[0.02] border-white/10 min-h-[80px] rounded-xl"
                      value={formData.customers}
                      onChange={(e) => setFormData({...formData, customers: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Generating revenue?</label>
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setFormData({...formData, isGeneratingRevenue: true})}
                        className={`flex-1 h-12 rounded-xl border-white/10 ${formData.isGeneratingRevenue === true ? "bg-primary/20 border-primary text-white" : "text-white/60"}`}
                      >
                        Yes
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setFormData({...formData, isGeneratingRevenue: false})}
                        className={`flex-1 h-12 rounded-xl border-white/10 ${formData.isGeneratingRevenue === false ? "bg-primary/20 border-primary text-white" : "text-white/60"}`}
                      >
                        No
                      </Button>
                    </div>
                  </div>

                  {formData.isGeneratingRevenue && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
                      <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Current ARR ($)</label>
                      <Input 
                        type="number" 
                        placeholder="e.g. 250000"
                        className="bg-white/[0.02] border-white/10 h-12 rounded-xl"
                        value={formData.arr}
                        onChange={(e) => setFormData({...formData, arr: e.target.value})}
                      />
                    </motion.div>
                  )}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="ghost" onClick={prevStep} className="h-14 px-6 rounded-xl hover:bg-white/5">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.sector || !formData.stage || !formData.hq} className="flex-1 h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold group">
                    Continue <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Data Sources (Existing Investors) */}
            {step === 5 && (
              <motion.div key="step5" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="text-center mb-8">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-display font-bold mb-2">Existing Investors</h2>
                  <p className="text-white/40">Helps us map your network graph for warm intros.</p>
                </div>
                
                <div className="space-y-4">
                   <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                    <Input 
                      placeholder="Search for investors..."
                      className="bg-white/[0.02] border-white/10 h-14 pl-12 rounded-xl focus:ring-primary/50"
                    />
                   </div>

                   <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 border-dashed text-center">
                      <p className="text-white/20 text-sm">Search and select any existing investors or angels.</p>
                   </div>

                   <Button 
                    variant="ghost" 
                    onClick={() => setFormData({...formData, existingInvestors: []})}
                    className="w-full text-primary/60 hover:text-primary text-xs font-bold uppercase tracking-widest"
                   >
                    I don't have any existing investors
                   </Button>
                </div>

                <div className="flex gap-4">
                  <Button variant="ghost" onClick={prevStep} className="h-14 px-6 rounded-xl hover:bg-white/5">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button onClick={nextStep} className="flex-1 h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold group">
                    Continue <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 6: Investment Focus (Themes) */}
            {step === 6 && (
              <motion.div key="step6" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="text-center mb-8">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-display font-bold mb-2">Investing Themes</h2>
                  <p className="text-white/40">Select themes that align with your company.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "MarTech", "AI in Sales", "Customer Support", "B2B Automation", 
                    "Cybersecurity", "Fintech", "HealthTech", "ClimateTech"
                  ].map(theme => (
                    <button
                      key={theme}
                      onClick={() => {
                        const current = formData.themes;
                        if (current.includes(theme)) {
                          setFormData({...formData, themes: current.filter(t => t !== theme)});
                        } else {
                          setFormData({...formData, themes: [...current, theme]});
                        }
                      }}
                      className={`p-4 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${
                        formData.themes.includes(theme)
                        ? "bg-primary/20 border-primary text-white"
                        : "bg-white/[0.02] border-white/10 text-white/40 hover:border-white/20"
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="ghost" onClick={prevStep} className="h-14 px-6 rounded-xl hover:bg-white/5">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button onClick={nextStep} className="flex-1 h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold group">
                    Next <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 7: Round Dynamics */}
            {step === 7 && (
              <motion.div key="step7" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="text-center mb-8">
                  <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-display font-bold mb-2">Round Dynamics</h2>
                  <p className="text-white/40">Critical data for building your outreach list.</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Fundraising Timeline</label>
                    <Select onValueChange={(val) => setFormData({...formData, timeline: val})}>
                      <SelectTrigger className="bg-white/[0.02] border-white/10 h-14 rounded-xl">
                        <SelectValue placeholder="When are you planning to raise?" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0b0b0b] border-white/10 text-white">
                        <SelectItem value="near-term">Near-term (1–3 months)</SelectItem>
                        <SelectItem value="mid-term">Mid-term (3–6 months)</SelectItem>
                        <SelectItem value="later">Later (6+ months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Target Round Size</label>
                    <Select onValueChange={(val) => setFormData({...formData, targetRoundSize: val})}>
                      <SelectTrigger className="bg-white/[0.02] border-white/10 h-14 rounded-xl">
                        <SelectValue placeholder="Select target size" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0b0b0b] border-white/10 text-white">
                        <SelectItem value="<500k">Less than $500K</SelectItem>
                        <SelectItem value="500k-2m">$500K–$2M</SelectItem>
                        <SelectItem value="2m-10m">$2M–$10M</SelectItem>
                        <SelectItem value=">10m">More than $10M</SelectItem>
                        <SelectItem value="20m-50m">$20M–$50M</SelectItem>
                        <SelectItem value=">100m">More than $100M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest ml-1">Investor Type Preference</label>
                    <div className="grid grid-cols-3 gap-3">
                      {["Lead", "Follow-on", "Both"].map(type => (
                        <button
                          key={type}
                          onClick={() => setFormData({...formData, investorType: type})}
                          className={`p-3 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${
                            formData.investorType === type
                            ? "bg-primary/20 border-primary text-white"
                            : "bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="ghost" onClick={prevStep} className="h-14 px-6 rounded-xl hover:bg-white/5">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.timeline || !formData.targetRoundSize || !formData.investorType} className="flex-1 h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold group">
                    Finish Setup <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 8: Completion */}
            {step === 8 && (
              <motion.div key="step8" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center space-y-8 py-10">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary blur-3xl opacity-20" />
                  <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center relative z-10 mx-auto mb-8">
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl font-display font-bold">Welcome to Lemni!</h2>
                  <p className="text-white/60 text-lg max-w-md mx-auto">
                    Your fundraising infrastructure is now active. We've started processing your data to identify the highest-probability investor matches.
                  </p>
                </div>

                <div className="pt-8">
                  <Button onClick={() => setLocation("/")} className="w-full h-16 bg-primary hover:bg-primary/90 rounded-2xl text-xl font-bold shadow-[0_20px_45px_-10px_rgba(139,92,246,0.4)] group">
                    Launch Platform
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
