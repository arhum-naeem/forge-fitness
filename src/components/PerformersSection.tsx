import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const performers = [
    {
        name: "Steven Bartlett",
        role: "Award Winning Podcaster behind The Diary of a CEO",
        quote: "Huel is an ally on my busiest days",
        image: "/steven.avif",
    },
    {
        name: "Alex Rodriguez",
        role: "Former Elite Athlete & World Series Champion",
        quote: "I travel a lot, Huel makes it easy to stay fueled. It's one of my go to drinks.",
        image: "/alex.avif",
    },
    {
        name: "Gary Neville",
        role: "Premier League Hall of Fame Player + Entrepreneur",
        quote: "I always have a couple in the fridge at home — it's my go-to when I realize I haven't eaten.",
        image: "/gary.avif",
    },
    {
        name: "Gracie Norton",
        role: "Nutrition & Wellness Podcaster + Creator",
        quote: "A good source of fiber with 42 vitamins and minerals.",
        image: "/gracie.avif",
    },
    {
        name: "Idris Elba",
        role: "Actor, Producer + Entrepreneur",
        quote: "I've been a Hueligan for several years now",
        image: "/idris.avif",
    },
];

export function PerformersSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="inspiration" className="py-24 bg-[#f8f5f0] text-black overflow-hidden">
            <div className="container px-4">
                <div ref={ref} className={`mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                    <h2 className="font-barlow-condensed text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
                        Recommended by top <span className="italic font-serif">performers</span> &<br />
                        nutrition experts
                    </h2>
                    <p className="font-barlow text-lg text-zinc-600">
                        See what makes Huel the global leader in complete nutrition
                    </p>
                </div>

                <div className="relative group">
                    <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
                        {performers.map((p, i) => (
                            <div
                                key={i}
                                className="min-w-[300px] md:min-w-[380px] aspect-[4/5] relative rounded-xl overflow-hidden snap-center group/card bg-zinc-200"
                            >
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-barlow font-bold text-xl">{p.name}</h3>
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 fill-blue-400" />
                                    </div>
                                    <p className="font-barlow text-[10px] text-zinc-300 uppercase underline mb-3">
                                        {p.role}
                                    </p>
                                    <p className="font-barlow text-sm leading-snug">
                                        "{p.quote}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-end gap-3 mt-8">
                        <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 transition-colors">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
