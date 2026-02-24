import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function BillboardShowcase() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="py-24 bg-zinc-100 flex items-center justify-center overflow-hidden">
            <div className="container px-4">
                <div className="relative group perspective-1000">
                    <div className="relative group">
                        <div className="rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                            <img
                                src="/billboard-mockup.jpg"
                                alt="Inzymo Billboard Layout"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
