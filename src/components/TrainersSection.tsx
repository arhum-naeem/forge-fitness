import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  { name: "BCAA Powder", type: "Supplements", price: "$29.99" },
  { name: "SPARK Pre-Workout", type: "Energy", price: "$34.99" },
  { name: "CleanerInc Detoxing", type: "Health", price: "$24.99" },
  { name: "TEST-UP Booster", type: "Vitality", price: "$39.99" },
  { name: "Creatine Micronized", type: "Strength", price: "$19.99" },
  { name: "BURN Fat Burner", type: "Weight Loss", price: "$32.99" },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden border border-border bg-card transition-all duration-500 hover:border-cyan-500/40 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-square overflow-hidden bg-metal-gradient flex items-center justify-center p-8">
        <div className="w-full h-full border border-dashed border-muted-foreground/30 flex items-center justify-center text-xs text-muted-foreground text-center p-4">
          {product.name}<br />Image Placeholder
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 text-center">
        <h3 className="font-bebas text-xl tracking-wider text-foreground">{product.name}</h3>
        <p className="font-barlow-condensed text-xs uppercase tracking-wider text-cyan-400 mb-1">{product.type}</p>
        <p className="font-barlow text-sm font-bold text-foreground">{product.price}</p>
      </div>

      <div className="absolute top-0 left-0 w-[2px] h-0 bg-cyan-500 transition-all duration-500 group-hover:h-full" />
    </div>
  );
}

export function TrainersSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-24 bg-black/40">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="font-barlow-condensed text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">Professional Quality</p>
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider text-foreground">PRODUCTS OUR</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
