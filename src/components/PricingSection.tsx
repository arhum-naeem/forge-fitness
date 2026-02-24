import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="relative border-2 border-cyan-500/20 p-2 inline-block mb-6">
            <div className="w-full h-full bg-cyan-500/10 p-8">
              <span className="text-cyan-400 font-bebas text-xl">PROMOTIONAL IMAGE</span>
            </div>
          </div>
        </div>

        <div ref={ref} className={`flex-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-bebas text-6xl md:text-7xl tracking-wider text-foreground mb-4">
            .Fuel Your <span className="text-cyan-400">Muscles</span><br />
            Build Your Power
          </h2>
          <p className="font-barlow text-muted-foreground text-lg mb-8">
            Our supplements are designed to push you beyond your limits. Pure ingredients, scientific formulas, and extreme results.
          </p>
          <Button variant="hero" size="xl">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
