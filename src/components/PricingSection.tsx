import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: 49,
    period: "/month",
    features: ["Full gym access", "Locker room", "Basic app tracking", "2 group classes/week"],
    popular: false,
  },
  {
    name: "WARRIOR",
    price: 89,
    period: "/month",
    features: ["Everything in Starter", "Unlimited classes", "1 PT session/month", "Nutrition guidance", "Progress analytics"],
    popular: true,
  },
  {
    name: "ELITE",
    price: 149,
    period: "/month",
    features: ["Everything in Warrior", "4 PT sessions/month", "Custom meal plans", "Recovery zone access", "Priority booking"],
    popular: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative flex flex-col bg-metal-gradient border transition-all duration-500 hover-metal-sheen ${
        plan.popular ? "border-primary shadow-neon-red scale-[1.02]" : "border-border hover:border-primary/30"
      } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {plan.popular && (
        <div className="absolute -top-px left-0 right-0 h-[2px] bg-primary" />
      )}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-barlow-condensed uppercase tracking-widest flex items-center gap-1">
          <Zap className="w-3 h-3" /> Most Popular
        </div>
      )}
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="font-bebas text-2xl tracking-wider text-muted-foreground mb-2">{plan.name}</h3>
        <div className="mb-6">
          <span className="font-bebas text-5xl text-foreground">${plan.price}</span>
          <span className="font-barlow text-muted-foreground">{plan.period}</span>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3 font-barlow text-sm text-secondary-foreground">
              <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <Button variant={plan.popular ? "hero" : "metal"} size="lg" className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-24 bg-metal-gradient">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-barlow-condensed text-sm uppercase tracking-[0.3em] text-primary mb-3">Membership Plans</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground mb-8">CHOOSE YOUR PATH</h2>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-8">
            <div className="text-center">
              <div className="font-bebas text-4xl md:text-5xl text-primary">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="font-barlow text-sm text-muted-foreground uppercase tracking-wider">Expert Trainers</p>
            </div>
            <div className="text-center">
              <div className="font-bebas text-4xl md:text-5xl text-accent">
                <AnimatedCounter end={10} suffix="K+" />
              </div>
              <p className="font-barlow text-sm text-muted-foreground uppercase tracking-wider">Transformations</p>
            </div>
            <div className="text-center">
              <div className="font-bebas text-4xl md:text-5xl text-neon-blue">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="font-barlow text-sm text-muted-foreground uppercase tracking-wider">Weekly Classes</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
