import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { FlowDiagramSection } from "@/components/flow-diagram-section";
import { FeaturesSection } from "@/components/features-section";
import { PartnersSection } from "@/components/partners-section";
import { TechArchitectureSection } from "@/components/tech-architecture-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { DemoModal } from "@/components/demo-modal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleBookDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookDemo={handleBookDemo} />
      <main>
        <HeroSection onBookDemo={handleBookDemo} />
        <ProblemSolutionSection />
        <FlowDiagramSection />
        <FeaturesSection />
        <PartnersSection />
        <TechArchitectureSection />
        <CTASection onBookDemo={handleBookDemo} />
      </main>
      <Footer />
      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </div>
  );
}
