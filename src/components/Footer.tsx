import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-border">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bebas text-4xl tracking-widest text-foreground mb-6">
              INZY<span className="text-cyan-400">MO</span>
            </h3>
            <div className="flex gap-4">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-barlow-condensed text-sm uppercase tracking-widest text-foreground mb-6">Contact us</h4>
            <ul className="space-y-3 font-barlow text-sm text-muted-foreground">
              <li>+1 234 567 890</li>
              <li>contact@inzymo-fitness.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-barlow-condensed text-sm uppercase tracking-widest text-foreground mb-6">Catalog</h4>
            <ul className="space-y-3 font-barlow text-sm text-muted-foreground">
              {["Our products"].map(item => (
                <li key={item}>
                  <a href="#products" className="hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-barlow-condensed text-sm uppercase tracking-widest text-foreground mb-6">Information</h4>
            <ul className="space-y-3 font-barlow text-sm text-muted-foreground">
              {["Home page", "About InZ", "Certifications", "Returns and Warranty", "FAQs", "Contact us", "Privacy Policy", "Shipping Policy"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-barlow text-xs text-muted-foreground tracking-wider">
            © 2026 Inzymo. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground flex gap-4 uppercase font-barlow-condensed">
            <span>Built by inzymo team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
