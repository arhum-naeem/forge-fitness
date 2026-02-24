import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This place changed everything. The intensity, the coaches, the culture — it's not a gym, it's a proving ground.",
    name: "DEREK M.",
    result: "Lost 45 lbs in 6 months",
  },
  {
    quote: "I've trained at dozens of gyms. Nothing comes close to the equipment quality and coaching expertise here.",
    name: "SARAH K.",
    result: "Competed in first powerlifting meet",
  },
  {
    quote: "The data tracking and personalized programming took my training from guesswork to science. PR after PR.",
    name: "JAMES L.",
    result: "Added 100 lbs to total in 4 months",
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 bg-metal-gradient">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-barlow-condensed text-sm uppercase tracking-[0.3em] text-primary mb-3">Testimonials</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground">FORGED IN IRON</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();
            return (
              <div
                key={t.name}
                ref={cardRef}
                className={`relative bg-card border border-border p-8 transition-all duration-500 hover:border-primary/30 ${
                  cardVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <blockquote className="font-barlow text-secondary-foreground leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-bebas text-lg tracking-wider text-foreground">{t.name}</p>
                  <p className="font-barlow text-sm text-accent">{t.result}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
