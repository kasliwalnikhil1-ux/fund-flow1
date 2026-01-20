import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Features
      </a>
      <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        How it Works
      </a>
      <a href="#results" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Results
      </a>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-white tracking-tighter">Lemni</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="font-medium text-white/60 hover:text-white transition-colors">Sign In</Button>
          </Link>
          <Link href="/login">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all hover:scale-105">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <NavItems />
                <div className="h-px bg-white/10 my-2" />
                <Link href="/login">
                  <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">Sign In</Button>
                </Link>
                <Link href="/login">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">Get Started</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
