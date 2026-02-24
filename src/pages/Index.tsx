import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScoopPowerSection } from "@/components/ScoopPowerSection";
import { MarketConcentration } from "@/components/MarketConcentration";
import { TrainersSection } from "@/components/TrainersSection";
import { PerformersSection } from "@/components/PerformersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { RadicalIdeaSection } from "@/components/RadicalIdeaSection";
import { BillboardShowcase } from "@/components/BillboardShowcase";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <FeaturesSection /> {/* Benefits Section (Image 1) */}
      <ScoopPowerSection /> {/* Maximum Scoop Power (New Image 1) */}
      <MarketConcentration /> {/* Protein Concentration (New Image 2) */}
      <TrainersSection /> {/* Featured Products (Image 2) */}
      <PerformersSection /> {/* Recommendations (Image 3) */}
      <TestimonialsSection /> {/* Articles (Repurposed) */}
      <RadicalIdeaSection /> {/* Radical Idea (Image 4) */}
      <BillboardShowcase /> {/* Billboard Display (New Image 3) */}
      <CTASection /> {/* Contact Form */}
      <Footer /> {/* Detailed Footer (Image 5) */}
    </div>
  );
};

export default Index;
