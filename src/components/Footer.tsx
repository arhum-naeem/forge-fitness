import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#f0f9f4] pt-24 pb-12 border-t border-zinc-200 text-zinc-800">
      <div className="container px-4">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pb-16 border-b border-zinc-200 mb-16">
          <div className="max-w-md">
            <h3 className="font-barlow-condensed text-sm uppercase tracking-widest font-bold mb-2">GET 15% OFF YOUR FIRST PURCHASE</h3>
            <p className="font-barlow text-sm text-zinc-600">Sign up to receive our special offers.</p>
          </div>
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white border border-zinc-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#2e8b57]"
              />
              <Button className="bg-[#2e8b57] hover:bg-[#256e45] text-white rounded-full py-6 uppercase font-bold tracking-widest text-xs">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-bebas text-4xl font-bold tracking-[0.2em]">INZYMO</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <ul className="space-y-4 font-barlow text-sm font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Products</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 font-barlow text-sm font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Whats Included</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Treatment</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 font-barlow text-sm font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Lab Tests</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex gap-6">
            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="text-zinc-600 hover:text-[#2e8b57] transition-colors bg-white w-10 h-10 rounded-full flex items-center justify-center border border-zinc-100 shadow-sm">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 font-barlow uppercase tracking-widest">
          <p>© 2026 INZYMO. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="w-8 h-5 bg-zinc-200 rounded opacity-50" />
            <span className="w-8 h-5 bg-zinc-200 rounded opacity-50" />
            <span className="w-8 h-5 bg-zinc-200 rounded opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
