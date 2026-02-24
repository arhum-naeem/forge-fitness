import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className={`container px-4 text-center relative z-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-foreground mb-4">
          READY TO <span className="text-gradient-neon">BREAK LIMITS</span>?
        </h2>
        <p className="font-barlow text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Your transformation starts with a single step. Book your free trial session today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Start Free Trial
          </Button>
          <Button variant="metal" size="xl">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
