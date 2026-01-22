import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-20 relative overflow-hidden text-center md:text-left">
          {/* Abstract Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 md:mb-6 tracking-tight">
                Stop chasing investors. Let us bring them to you.
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-xl mb-0 max-w-xl">
                Get warm conversations, higher response rates, and more meetings—without spending hours on outreach.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:min-w-[200px] md:w-auto">
              <a href="https://calendly.com/rajadurgarao567/30min" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" variant="secondary" className="w-full h-14 px-8 text-lg font-semibold shadow-xl">
                  Get Started Now
                </Button>
              </a>
              <p className="text-xs text-primary-foreground/60 text-center">
                No long-term contracts. Results guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
