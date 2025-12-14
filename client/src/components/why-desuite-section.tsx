import { Button } from "@/components/ui/button"; 
// ... other imports

const WHITEPAPER_DOWNLOAD_PATH = "/whitepaper_onepager.html";

// Define the component using the name expected in home.tsx
const WhyDeSuiteSection = () => {
    return (
        <section id="why-desuite" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Why DeSuite? Global Liquidity, Zero Friction.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Understand the fundamental shift from permissioned enterprise chains to public chain integration, and why DeSuite is the strategic bridge your Oracle ERP needs.
                </p>
                <div className="mt-10">
                    <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <a 
                            href={WHITEPAPER_DOWNLOAD_PATH} 
                            // Ensures the browser downloads the content 
                            download="DeSuite_OnePager.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Strategic Brief (PDF)
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

// --- CORRECT EXPORT: This is what Home.tsx requires ---
export default WhyDeSuiteSection; 

// --- (If you have other named exports, they can go here) ---