import { Navigation } from "../components/navigation";
import { HeroSection } from "../components/hero-section";
import { ProblemSolutionSection } from "../components/problem-solution-section";
import { FlowDiagramSection } from "../components/flow-diagram-section";
import { FeaturesSection } from "../components/features-section";
// Make sure this import line is removed if comparison-section.tsx was deleted:
// import { ComparisonSection } from "../components/comparison-section"; 
import WhyDeSuiteSection from "../components/why-desuite-section"; // FIXED: Changed to default import
import { PartnersSection } from "../components/partners-section";
import { TechArchitectureSection } from "../components/tech-architecture-section";
import { CTASection } from "../components/cta-section";
import { Footer } from "../components/footer";
// NOTE: All previous state management and modal imports/usage are omitted

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation /> 
      <main>
        <HeroSection /> 
        <ProblemSolutionSection />
        <FlowDiagramSection />
        <FeaturesSection />
        
        {/* Renders the new Why DeSuite section */}
        <WhyDeSuiteSection /> 
        
        <PartnersSection />
        <TechArchitectureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}