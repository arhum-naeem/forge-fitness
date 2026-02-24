import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-gym.webp";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Dark industrial gym interior with heavy barbells and chalk dust"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4">
        <p className="font-barlow-condensed text-sm md:text-base uppercase tracking-[0.4em] text-primary mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Premium Gym Experience
        </p>
        <h1
          className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wider mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          ENERGY<br />
          <span className="text-gradient-metal">BOOSTER</span><br />
          <span className="text-cyan-400">SUPPLEMENTS</span>
        </h1>
        <p
          className="font-barlow text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Fuel your muscles, build your power. Premium grade supplements for elite performance.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <Button variant="hero" size="xl">
            Shop Now
          </Button>
          <Button variant="outline" size="xl" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10">
            View Articles
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
