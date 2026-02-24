import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bebas text-2xl tracking-widest text-foreground mb-4">
              INZY<span className="text-primary">MO</span>
            </h3>
            <p className="font-barlow text-sm text-muted-foreground leading-relaxed">
              Industrial-grade fitness. Built for those who refuse to settle.
            </p>
          </div>
          <div>
            <h4 className="font-barlow-condensed text-sm uppercase tracking-widest text-foreground mb-4">Programs</h4>
            <ul className="space-y-2">
              {["Strength Training", "HIIT Classes", "Personal Training", "Nutrition Coaching"].map(item => (
                <li key={item}>
                  <a href="#programs" className="font-barlow text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-barlow-condensed text-sm uppercase tracking-widest text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Contact"].map(item => (
                <li key={item}>
                  <a href="#" className="font-barlow text-sm text-muted-foreground hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-barlow-condensed text-sm uppercase tracking-widest text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="font-barlow text-xs text-muted-foreground uppercase tracking-wider">
            © 2026 Inzymo. All rights reserved. Built with iron and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
