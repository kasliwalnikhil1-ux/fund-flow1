import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Onboarding & Strategy",
    description: "We deep dive into your business, pitch deck, and ideal investor profile to build a custom targeting strategy.",
  },
  {
    number: "02",
    title: "List Building",
    description: "Our team hand-curates a list of high-relevance investors using our proprietary data and signals.",
  },
  {
    number: "03",
    title: "Campaign Launch",
    description: "We launch multi-channel campaigns (Email, LinkedIn, X) with A/B tested messaging to maximize engagement.",
  },
  {
    number: "04",
    title: "Meetings Booked",
    description: "We handle the scheduling coordination. You just check your calendar and show up to pitch.",
  }
];

export function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How it Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, transparent process designed to get you results fast.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background md:bg-transparent pt-8 md:pt-0"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center text-xl font-bold font-display mb-6 relative shadow-lg shadow-primary/10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
