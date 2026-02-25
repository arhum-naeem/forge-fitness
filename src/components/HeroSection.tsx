import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.webp";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 container flex flex-col lg:flex-row items-center justify-between gap-16 px-4">
        <div className="flex-1 text-center lg:text-left">
          <p className="font-barlow-condensed text-sm md:text-base uppercase tracking-[0.4em] text-primary mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Premium Gym Experience
          </p>
          <h1
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wider mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            ENERGY<br />
            <span className="text-gradient-metal">BOOSTER</span><br />
            <span className="text-primary">SUPPLEMENTS</span>
          </h1>
          <p
            className="font-barlow text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Fuel your muscles, build your power. Premium grade supplements for elite performance.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Button variant="hero" size="xl">
              Shop Now
            </Button>
            <Button variant="outline" size="xl" className="border-primary text-primary hover:bg-primary/10">
              View Articles
            </Button>
          </div>
        </div>

        <div className="flex-1 relative aspect-square w-full max-w-xl mx-auto lg:mx-0">
          <img
            src="/hero-spark.png"
            alt="Inzymo Spark"
            className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(50,150,255,0.3)]"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
