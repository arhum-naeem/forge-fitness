import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dumbbell, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import equipmentImg from "@/assets/equipment.webp";

const features = [
  {
    icon: Dumbbell,
    title: "100% PURE",
    description: "Pure whey protein isolate. No fillers, no additives. Just raw power.",
  },
  {
    icon: Users,
    title: "ZERO SUGAR",
    description: "Keto-friendly and perfect for lean muscle growth without the unnecessary carbs.",
  },
  {
    icon: TrendingUp,
    title: "MAX ABSORPTION",
    description: "Micro-filtered for rapid digestion and immediate muscle recovery support.",
  },
];

function FeatureCard({ icon: Icon, title, description, index }: typeof features[0] & { index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative bg-metal-gradient border border-border p-8 transition-all duration-500 hover:border-primary/40 hover-metal-sheen ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 border border-primary/30 bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-bebas text-2xl tracking-wider mb-3 text-foreground">{title}</h3>
      <p className="font-barlow text-muted-foreground leading-relaxed">{description}</p>
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section header */}
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-barlow-condensed text-sm uppercase tracking-[0.3em] text-primary mb-3">Premium Supplements</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground">INZYMO ISOLATE WHEY</h2>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>

        {/* Product showcase */}
        <div className="relative overflow-hidden border border-border bg-metal-gradient p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="font-bebas text-4xl mb-4 text-cyan-400">SUPPLEMENT OUR PROTEIN</h3>
            <p className="font-barlow text-muted-foreground mb-6">
              It is a dietary supplement based on 100% pure whey protein isolate, without flavors or additives.
              32 grams of protein per serving.
            </p>
            <ul className="space-y-2 text-sm font-barlow-condensed text-muted-foreground mb-8">
              <li>• Low fat</li>
              <li>• Without sugar</li>
              <li>• No preservatives</li>
              <li>• Pure amino acids</li>
            </ul>
            <Button variant="hero">Buy Now - $45.99</Button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-80 bg-zinc-900 border border-border shadow-neon-blue flex items-center justify-center p-4">
              <span className="text-muted-foreground text-center">Inzymo Whey Isolate<br />(Image Placeholder)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
