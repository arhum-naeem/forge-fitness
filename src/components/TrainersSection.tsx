import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trainer1 from "@/assets/trainer-1.webp";
import trainer2 from "@/assets/trainer-2.webp";
import trainer3 from "@/assets/trainer-3.webp";

const trainers = [
  {
    name: "MARCUS COLE",
    specialty: "Strength & Powerlifting",
    experience: "12 years",
    image: trainer1,
  },
  {
    name: "SOFIA REYES",
    specialty: "HIIT & Functional Training",
    experience: "8 years",
    image: trainer2,
  },
  {
    name: "JAKE WESTON",
    specialty: "CrossFit & Endurance",
    experience: "10 years",
    image: trainer3,
  },
];

function TrainerCard({ trainer, index }: { trainer: typeof trainers[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/40 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={trainer.image}
          alt={`${trainer.name} - ${trainer.specialty}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <h3 className="font-bebas text-2xl tracking-wider text-foreground">{trainer.name}</h3>
        <p className="font-barlow-condensed text-sm uppercase tracking-wider text-primary mb-1">{trainer.specialty}</p>
        <p className="font-barlow text-sm text-muted-foreground">{trainer.experience} experience</p>
      </div>

      {/* Side accent */}
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-500 group-hover:h-full" />
    </div>
  );
}

export function TrainersSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trainers" className="py-24">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-barlow-condensed text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Team</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground">ELITE COACHES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <TrainerCard key={trainer.name} trainer={trainer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
