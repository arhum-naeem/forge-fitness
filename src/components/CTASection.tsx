import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card/50 border-t border-border">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-bebas text-5xl tracking-wider text-foreground">
            IN TOUCH <span className="text-cyan-400">GET</span>
          </h2>
          <p className="font-barlow text-muted-foreground mt-2">
            Leave you about name to representative from our team will get back to you answer your positive.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black/40 border border-border p-3 text-sm font-barlow focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-black/40 border border-border p-3 text-sm font-barlow focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-black/40 border border-border p-3 text-sm font-barlow focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <Button variant="hero" className="h-full">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
