import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, MessageSquareText, Share2, CalendarCheck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Search,
    title: "Targeted Investor Discovery",
    description: "We identify and shortlist investors who are actively deploying capital in your specific industry and stage.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: MessageSquareText,
    title: "Hyper-Personalized Outreach",
    description: "We analyze investor profiles across LinkedIn, X, and web to craft messages that actually get read.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Share2,
    title: "Multi-Channel Engagement",
    description: "Coordinated touchpoints across Email, LinkedIn, and X to maximize visibility and response rates.",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    icon: CalendarCheck,
    title: "Meeting Setup",
    description: "We handle the back-and-forth scheduling so you simply show up to warm conversations.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export function Services() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything you need to raise capital
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop spraying and praying. We run a surgical process to get you in front of the right check-writers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors group bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.bg} ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mb-2 font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
