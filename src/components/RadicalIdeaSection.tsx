import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function RadicalIdeaSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="py-24 bg-white text-[#002b5c]">
            <div className="container px-4 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden flex items-center justify-center">
                        <img
                            src="/capsule-detail.png"
                            alt="Scientific Capsule"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div ref={ref} className={`flex-1 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <h2 className="font-barlow-condensed text-5xl md:text-7xl font-bold leading-tight mb-8">
                        Our radical idea:<br />
                        supplements should work.
                    </h2>
                    <p className="font-barlow text-lg text-zinc-600 mb-10 max-w-xl">
                        From university-led clinical studies to patented capsule design,
                        our scientists formulate each product for efficacy.
                    </p>
                    <div className="flex gap-12 font-barlow text-sm uppercase tracking-widest font-bold border-b border-zinc-200 pb-2 inline-flex">
                        <a href="#" className="hover:text-primary transition-colors border-b-2 border-[#002b5c]">Our Standards</a>
                        <a href="#" className="hover:text-primary transition-colors">Our Clinical Studies</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
