import { Button } from "@/components/ui/button"; 
import React from 'react'; 
// Import Download icon from lucide-react for better visual feedback
import { Download } from 'lucide-react'; 

// IMPORTANT: This path points directly to the uploaded PDF file.
const WHITEPAPER_DOWNLOAD_PATH = "file://whitepaper_onepager.pdf";

// Define the component using the name expected in home.tsx
const WhyDeSuiteSection = () => {
    
    // We no longer need a separate function for printing; we use a standard <a> tag for the download link.

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
                    {/* Using a standard <a> tag wrapped in Button styling for the link */}
                    <a 
                        href={WHITEPAPER_DOWNLOAD_PATH}
                        target="_blank" // Opens the PDF in a new tab/window
                        rel="noopener noreferrer"
                        // Tailwind classes for button styling, matching the original Button component aesthetic
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl duration-300"
                        style={{ height: '3rem', padding: '0 2rem' }} // size="lg" equivalent
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Download Strategic Brief (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyDeSuiteSection;