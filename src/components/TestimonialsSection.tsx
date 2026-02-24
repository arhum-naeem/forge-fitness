import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Optimizing your performance in every session",
    excerpt: "Learn how to fuel your body for maximum output and sustainable growth.",
    category: "Training",
    image: "/optimizing-your-performance.avif",
  },
  {
    title: "The science of recovery: Why rest is part of training",
    excerpt: "Discover the metabolic processes that rebuild your muscles while you sleep.",
    category: "Science",
    image: "/science-of-recovery.avif",
  },
  {
    title: "Nutritional timing: When to take your supplements",
    excerpt: "Maximize the efficiency of your Inzymo products with proper timing.",
    category: "Nutrition",
    image: "/nutritional-timing.avif",
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="articles" className="py-24">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-barlow-condensed text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">Recent Articles</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground">ARTICLES</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div
              key={article.title}
              className="group bg-card border border-border overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-barlow-condensed mb-2 block">{article.category}</span>
                <h3 className="font-bebas text-xl tracking-wider text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                <p className="font-barlow text-sm text-muted-foreground mb-6">
                  {article.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto text-cyan-400 hover:text-cyan-300">Read more →</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
