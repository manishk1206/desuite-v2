import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { FlowDiagramSection } from "@/components/flow-diagram-section";
import { FeaturesSection } from "@/components/features-section";
import { PartnersSection } from "@/components/partners-section";
import { TechArchitectureSection } from "@/components/tech-architecture-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
// NOTE: Removed 'useState' and 'DemoModal' imports

export default function Home() {
  // NOTE: Removed state management and handler function for the modal

  return (
    <div className="min-h-screen bg-background">
      {/* Removed onBookDemo prop */}
      <Navigation /> 
      <main>
        {/* Removed onBookDemo prop */}
        <HeroSection /> 
        <ProblemSolutionSection />
        <FlowDiagramSection />
        <FeaturesSection />
        <PartnersSection />
        <TechArchitectureSection />
        {/* Removed onBookDemo prop */}
        <CTASection />
      </main>
      <Footer />
      {/* Removed the DemoModal component */}
    </div>
  );
}