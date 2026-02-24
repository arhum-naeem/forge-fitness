import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dumbbell, Zap, TrendingUp, FlaskConical, CircleSlash, GlassWater } from "lucide-react";

export function MarketConcentration() {
    const { ref, isVisible } = useScrollAnimation();

    const features = [
        {
            icon: Dumbbell,
            title: "Muscle Mass",
            description: "With 29g of protein, it supports the gain and maintenance of lean mass.",
        },
        {
            icon: Zap,
            title: "Ultra-Fast Absorption",
            description: "Your muscles receive essential nutrients at the ideal time.",
        },
        {
            icon: TrendingUp,
            title: "Low Carb and Fat",
            description: "Very low fat and carbohydrate content.",
        },
        {
            icon: FlaskConical,
            title: "Rich in Amino Acids",
            description: "Stimulates protein synthesis and post-workout regeneration.",
        },
        {
            icon: CircleSlash,
            title: "Reduced Hunger",
            description: "Promotes prolonged satiety with low fat content.",
        },
        {
            icon: GlassWater,
            title: "Irresistible Flavor",
            description: "Unmatched creaminess and taste.",
        },
    ];

    return (
        <section id="quality" className="py-24 bg-black">
            <div className="container px-4 flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side: Image of Athlete */}
                <div className="flex-1 relative">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl group border border-border">
                        <img
                            src="/athlete-man.jpg"
                            alt="Inzymo Athlete"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-60" />
                    </div>
                    {/* Decorative Glow */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
                </div>

                {/* Right Side: Features Grid */}
                <div className="flex-[1.5]">
                    <div ref={ref} className={`mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase tracking-tight">
                            One of the <span className="text-white font-bold">highest protein</span> concentrations<br />
                            <span className="text-white">on the market!</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="bg-[#1a1a1a] p-6 rounded-2xl border border-zinc-800/50 hover:border-primary/20 transition-all group"
                            >
                                <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 mb-4 group-hover:text-primary transition-colors">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-bebas text-xl text-white mb-2 uppercase tracking-wider">{feature.title}</h4>
                                <p className="font-barlow text-sm text-zinc-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
