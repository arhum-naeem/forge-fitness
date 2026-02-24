import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Weight Loss", "Wellness", "Skin", "Hair"];

const products = [
  {
    name: "Inzymo Spark",
    image: "/INZYMO-SPARK.jpg",
    description: "Ultimate pre-workout formula for explosive energy and laser-sharp focus.",
    price: "$54.99",
    rating: "4.9 (1.2K)",
    category: "Performance",
  },
  {
    name: "Inzymo Isolate",
    image: "/INZYMO-ISOLATE.jpg",
    description: "Ultra-pure whey isolate for rapid muscle recovery and lean mass growth.",
    price: "$64.99",
    rating: "4.8 (2.1K)",
    category: "Muscle",
  },
  {
    name: "Inzymo Burn",
    image: "/INZYMO-BURN.jpg",
    description: "Advanced thermogenic fat burner to ignite metabolism and define muscle.",
    price: "$49.99",
    rating: "4.7 (850)",
    category: "Weight Loss",
  },
  {
    name: "Inzymo Creatine",
    image: "/INZYMO-CREATINE.jpg",
    description: "Pure micronized creatine monohydrate for maximum power and strength.",
    price: "$34.99",
    rating: "4.9 (3.5K)",
    category: "Performance",
  },
  {
    name: "Inzymo TestUp",
    image: "/INZYMO-TESTUP.jpg",
    description: "Natural performance booster to optimize vitality and strength levels.",
    price: "$59.99",
    rating: "4.6 (600)",
    category: "Muscle",
  },
  {
    name: "Inzymo BCAA",
    image: "/BCAA.jpg",
    description: "Branch Chain Amino Acids to prevent muscle breakdown and speed up recovery.",
    price: "$39.99",
    rating: "4.8 (1.1K)",
    category: "Recovery",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/40 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-square bg-[#0a1510] flex items-center justify-center p-8 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-barlow-condensed text-xl font-bold text-foreground mb-2">{product.name}</h3>
        <p className="font-barlow text-xs text-muted-foreground mb-4 flex-1">{product.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="font-barlow-condensed text-lg font-bold text-foreground">{product.price}</span>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-barlow">
            <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
            {product.rating}
          </div>
        </div>

        <Button variant="outline" className="w-full border-foreground font-barlow-condensed uppercase tracking-widest hover:bg-foreground hover:text-black transition-all">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export function TrainersSection() {
  const [activeCategory, setActiveCategory] = useState("Weight Loss");
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="products" className="py-24 bg-black">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="mb-16 rounded-3xl overflow-hidden border border-border shadow-2xl">
            <img
              src="/product-range.png"
              alt="Inzymo Product Range"
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
          <h2 className="font-barlow-condensed text-4xl md:text-5xl tracking-wider text-foreground mb-6 uppercase">
            Our Best-Selling Products
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["All", "Performance", "Muscle", "Recovery", "Wellness"].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full border text-xs font-barlow font-medium transition-all ${activeCategory === cat || (cat === "All" && activeCategory === "Weight Loss")
                  ? "bg-white text-black border-white"
                  : "border-border text-muted-foreground hover:border-primary/40"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
