import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Activity, Microscope, FlaskConical } from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Strengthen Muscles",
    description: "Supports lean muscle maintenance and recovery with high-quality protein collagen.",
    side: "left" as const,
  },
  {
    icon: FlaskConical,
    title: "Extend Vitality",
    description: "Promotes healthy aging by supporting joints, skin firmness, and overall vitality.",
    side: "left" as const,
  },
  {
    icon: Microscope,
    title: "Lab Tested",
    description: "Clinically tested for purity, safety, and effectiveness you can trust.",
    side: "right" as const,
  },
  {
    icon: Zap,
    title: "Boost Energy",
    description: "Helps maintain daily energy levels supports an active lifestyle.",
    side: "right" as const,
  },
];

function BenefitItem({ icon: Icon, title, description }: typeof benefits[0]) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
      <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-barlow-condensed text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="font-barlow text-sm text-muted-foreground leading-relaxed max-w-xs">{description}</p>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const leftBenefits = benefits.filter(b => b.side === "left");
  const rightBenefits = benefits.filter(b => b.side === "right");

  return (
    <section id="benefits" className="py-24 bg-black">
      <div className="container px-4">
        <h2 className="font-barlow-condensed text-4xl md:text-5xl text-center text-foreground mb-20 uppercase tracking-widest">
          COLLAGEN BENEFITS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-16">
            {leftBenefits.map((benefit, i) => (
              <BenefitItem key={i} {...benefit} />
            ))}
          </div>

          {/* Center Column - Product Image */}
          <div ref={ref} className={`relative flex justify-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-20" />
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              <img
                src="/collagen-jar.png"
                alt="Inzymo Protein Collagen"
                className="w-full h-full object-contain scale-125 drop-shadow-[0_0_30px_rgba(151,255,51,0.2)]"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16 md:text-right">
            {rightBenefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
                <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-barlow-condensed text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="font-barlow text-sm text-muted-foreground leading-relaxed max-w-xs">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
