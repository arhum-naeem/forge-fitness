import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dumbbell, Users, TrendingUp } from "lucide-react";
import equipmentImg from "@/assets/equipment.webp";

const features = [
  {
    icon: Dumbbell,
    title: "POWER EQUIPMENT",
    description: "Industrial-grade iron. Olympic platforms. Specialty bars. Everything built for serious lifters.",
  },
  {
    icon: Users,
    title: "EXPERT TRAINERS",
    description: "Certified coaches with proven track records. Personalized plans. Relentless accountability.",
  },
  {
    icon: TrendingUp,
    title: "GROWTH METRICS",
    description: "Track every rep, every set, every PR. Data-driven progress you can see and feel.",
  },
];

function FeatureCard({ icon: Icon, title, description, index }: typeof features[0] & { index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative bg-metal-gradient border border-border p-8 transition-all duration-500 hover:border-primary/40 hover-metal-sheen ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
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
          <p className="font-barlow-condensed text-sm uppercase tracking-[0.3em] text-primary mb-3">Why Choose Us</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground">FORGED FOR RESULTS</h2>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>

        {/* Equipment showcase */}
        <div className="relative overflow-hidden border border-border">
          <img
            src={equipmentImg}
            alt="Professional gym equipment in dark lighting"
            className="w-full h-64 md:h-96 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="font-bebas text-3xl md:text-4xl tracking-wider text-foreground">100,000+ LBS</p>
            <p className="font-barlow text-muted-foreground">Of premium iron at your disposal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
