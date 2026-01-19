import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
          <a className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
            <span className="text-primary text-2xl">●</span>
            lemni.
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-medium">Sign In</Button>
          <Button className="font-medium rounded-full px-6">Get Started</Button>
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
                <div className="h-px bg-border my-2" />
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
