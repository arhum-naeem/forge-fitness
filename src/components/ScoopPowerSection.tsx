import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ScoopPowerSection() {
    const { ref, isVisible } = useScrollAnimation();

    const stats = [
        { label: "Aminoácidos", value: "28g", position: "left" },
        { label: "Proteínas", value: "29g", position: "center" },
        { label: "BCAAs", value: "6g", position: "right" },
    ];

    return (
        <section id="science" className="py-24 bg-black relative overflow-hidden">
            <div className="container px-4 text-center">
                <div ref={ref} className={`${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <h2 className="font-bebas text-4xl md:text-6xl tracking-wider text-[#d4af37] mb-2 uppercase">
                        Maximum Power
                    </h2>
                    <h3 className="font-bebas text-5xl md:text-7xl tracking-widest text-white mb-6 uppercase">
                        In every scoop
                    </h3>
                    <p className="font-barlow text-muted-foreground text-sm uppercase tracking-widest mb-16">
                        Our purest form of Whey Protein
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto min-h-[400px] flex items-end justify-center pt-20">
                    {/* Stats Arc - Tightened Curve */}
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-xl h-[200px]">
                        <svg viewBox="0 0 400 120" className="w-full h-full">
                            <path
                                d="M 50 100 Q 200 10 350 100"
                                fill="none"
                                stroke="white"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                className="opacity-20"
                            />
                        </svg>

                        {/* Stat Bubbles */}
                        <div className="absolute top-[90px] left-[5%] -translate-y-1/2 flex items-center gap-3">
                            <span className="text-white font-barlow text-xs uppercase">Amino Acids</span>
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">28g</div>
                        </div>

                        <div className="absolute top-[0px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                            <span className="text-white font-barlow text-xs uppercase">Proteins</span>
                            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg border-2 border-black ring-1 ring-white">29g</div>
                        </div>

                        <div className="absolute top-[90px] right-[5%] -translate-y-1/2 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">6g</div>
                            <span className="text-white font-barlow text-xs uppercase">BCAAs</span>
                        </div>
                    </div>

                    {/* Product Jars - Moved UP */}
                    <div className="flex justify-center relative z-10 w-full -mb-16">
                        <img
                            src="/product-trio.png"
                            alt="Inzymo Product Trio"
                            className="w-full max-w-xl object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        />
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-[10px] text-muted-foreground font-barlow uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
                        Does not contain<br />
                        Concentrated Whey Protein, Casein, Lactose, Gluten, Artificial Sweeteners, Artificial Flavors, Artificial Colors, Preservatives
                    </p>
                </div>
            </div>
        </section>
    );
}
