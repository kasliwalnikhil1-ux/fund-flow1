import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";
import { 
  Users, User, Database, Bookmark, UserCircle, 
  GitBranch, Network, Settings, LogOut, Search,
  Filter, Sparkles, MoreVertical, CheckCircle2,
  ChevronDown, ChevronRight, LayoutDashboard,
  ShieldCheck, ExternalLink, Zap, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Platform() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("investors-db");

  const investors = [
    { name: "Y Combinator", hq: "United States", deals3m: 232, deals12m: 926, leads12m: 542, leadRate: "40.86%", relevance: "Strong", color: "bg-orange-500" },
    { name: "FasterCapital", hq: "United Arab Emirates", deals3m: 102, deals12m: 406, leads12m: 369, leadRate: "80.24%", relevance: "Strong", color: "bg-emerald-500" },
    { name: "Antler", hq: "Singapore", deals3m: 34, deals12m: 309, leads12m: 99, leadRate: "43.01%", relevance: "Strong", color: "bg-rose-500" },
    { name: "Techstars", hq: "United States", deals3m: 55, deals12m: 219, leads12m: 60, leadRate: "51.54%", relevance: "Strong", color: "bg-blue-500" },
    { name: "Plug and Play", hq: "United States", deals3m: 42, deals12m: 167, leads12m: 19, leadRate: "11.26%", relevance: "Strong", color: "bg-green-500" }
  ];

  const NavItem = ({ icon: Icon, label, id, subItems }: any) => {
    const isActive = activeTab.startsWith(id);
    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <div className="mb-2">
        <button
          onClick={() => {
            setActiveTab(id);
            setIsExpanded(!isExpanded);
          }}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isActive ? "bg-primary/10 text-primary" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          <Icon className="h-4 w-4" />
          <span className="flex-1 text-left">{label}</span>
          {subItems && (
            isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />
          )}
        </button>
        {subItems && isExpanded && (
          <div className="ml-7 mt-1 space-y-1 border-l border-gray-100 pl-3">
            {subItems.map((item: any) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left py-1.5 text-xs font-medium transition-colors block ${
                  activeTab === item.id ? "text-primary" : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-white text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span>Lemni</span>
          </div>

          <nav className="flex-1">
            <NavItem 
              icon={Users} 
              label="Investors" 
              id="investors" 
              subItems={[
                { id: "investors-db", label: "Database" },
                { id: "investors-viewed", label: "Viewed" },
                { id: "investors-shortlisted", label: "Shortlisted" }
              ]} 
            />
            <NavItem 
              icon={User} 
              label="People" 
              id="people" 
              subItems={[
                { id: "people-db", label: "Database" },
                { id: "people-viewed", label: "Viewed" },
                { id: "people-shortlisted", label: "Shortlisted" }
              ]} 
            />
            <NavItem icon={Bookmark} label="Saved List" id="saved" />
            <NavItem icon={UserCircle} label="Fundraise Profile" id="profile" />
            <NavItem icon={GitBranch} label="Pipeline" id="pipeline" />
            <NavItem icon={Network} label="My Network" id="network" />
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-gray-50 space-y-4">
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500">
            <Settings className="h-4 w-4" />
            <span>Usage</span>
          </div>
          <button 
            onClick={() => setLocation("/")}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-rose-500 hover:bg-rose-50 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-gray-50 flex items-center justify-between px-8 shrink-0 bg-white z-10">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search for Investors, Companies or People"
                className="bg-gray-50 border-none h-10 pl-10 rounded-xl w-full text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="h-10 px-4 rounded-xl border-gray-100 text-sm font-semibold">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Upgrade Plan
            </Button>
            <Button className="h-10 px-6 rounded-xl bg-[#2D2D2D] hover:bg-black text-white text-sm font-bold shadow-lg shadow-black/5">
              Start $1 Trial
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-8 custom-scrollbar bg-[#FAFAFB]">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-gray-200">
              {["Investor Search", "Company Search", "People Search", "Saved Lists"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 text-sm font-semibold transition-colors relative ${
                    tab === "Investor Search" ? "text-primary" : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {tab === "Investor Search" && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>

            {/* Filter/Search Bar */}
            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-11 w-11 p-0 rounded-xl border-gray-200 bg-white">
                <Filter className="h-4 w-4 text-gray-600" />
              </Button>
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <span className="text-sm text-gray-400">Identify investors that focus on Pre-Seed in Asia that have exposure to B2B Software...</span>
                </div>
                <Input 
                  className="h-11 bg-white border-gray-200 rounded-xl pl-4 pr-32 focus:ring-primary/20"
                />
                <div className="absolute right-1 top-1 bottom-1 flex items-center gap-1">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 gap-2 h-9">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Search
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400">
                    <UserCircle className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-gray-400">
              <span>0 filters applied</span>
              <span>Showing 1 - 5 of 170,420 results</span>
            </div>

            {/* Table Card */}
            <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-50 flex items-center justify-between">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                  <Input 
                    placeholder="Search Investors"
                    className="h-9 bg-gray-50 border-none pl-10 rounded-lg text-xs"
                  />
                </div>
                <Button className="bg-[#2D2D2D] hover:bg-black text-white h-9 px-4 rounded-lg text-xs gap-2">
                  Actions <ChevronDown className="h-3.5 w-3.5" />
                </Button>
              </div>

              <Table>
                <TableHeader className="bg-gray-50/50">
                  <TableRow className="hover:bg-transparent border-gray-100">
                    <TableHead className="w-12"></TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Investor</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Relevance</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Investor HQs (Country)</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-gray-400 text-right">3mo Deal Count</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-gray-400 text-right">12mo Deal Count</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-gray-400 text-right">12mo Lead Co...</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-gray-400 text-right">% Lead</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {investors.map((inv, i) => (
                    <TableRow key={inv.name} className="border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <TableCell>
                        <div className="w-5 h-5 rounded border border-gray-200 flex items-center justify-center bg-white cursor-pointer hover:border-primary/50 transition-colors" />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarFallback className={`${inv.color} text-white text-[10px] font-bold`}>
                              {inv.name.substring(0, 1)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-gray-900">{inv.name}</span>
                            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 fill-emerald-500/10" />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none px-2.5 py-0.5 text-[10px] font-bold rounded-full">
                          Strong
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">{inv.hq}</TableCell>
                      <TableCell className="text-sm font-semibold text-gray-700 text-right">{inv.deals3m}</TableCell>
                      <TableCell className="text-sm font-semibold text-gray-700 text-right">{inv.deals12m}</TableCell>
                      <TableCell className="text-sm font-semibold text-gray-700 text-right">{inv.leads12m}</TableCell>
                      <TableCell className="text-sm font-bold text-gray-900 text-right">{inv.leadRate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Locked Content Overlay */}
              <div className="relative py-20 px-4 bg-gradient-to-t from-white via-white/95 to-transparent flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 shadow-sm mb-2">
                   <ShieldCheck className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Unlock Access by Upgrading your Plan</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto mb-4">
                  Get full access to the world's most comprehensive investor database and advanced AI search capabilities.
                </p>
                <Button className="h-12 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-xl shadow-primary/20 gap-3 group">
                   <Zap className="h-4 w-4" />
                   Start $1 Trial
                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
