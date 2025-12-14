import { Button } from "@/components/ui/button"; 
import React from 'react'; // Added React import if not present

// FIX: Changed path to relative path (./) to resolve potential 404 issues in deployment
const WHITEPAPER_DOWNLOAD_PATH = "whitepaper_onepager.pdf";

// Define the component using the name expected in home.tsx
const WhyDeSuiteSection = () => {
    
    // Helper function to open the HTML document and immediately trigger the Print dialog
    const handlePrint = () => {
        // Open the HTML document in a new window/tab
        // We use window.location.origin to ensure the path is absolute from the root
        const printWindow = window.open(WHITEPAPER_DOWNLOAD_PATH, '_blank');
        
        // Wait for the window content to load before calling print()
        if (printWindow) {
            printWindow.onload = () => {
                // This command tells the browser to open the Print Dialog
                printWindow.print(); 
                // Close the tab after print dialog opens (optional, sometimes better user experience)
                // printWindow.close(); 
            };
        }
    };

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
                    <Button 
                        size="lg" 
                        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                        // Trigger the custom print function
                        onClick={handlePrint} 
                    >
                        {/* 2. Changed Button text to reflect Print-to-PDF action */}
                        Print Strategic Brief (PDF)
                    </Button>
                </div>
            </div>
        </section>
    );
};

// --- CORRECT EXPORT: This is what Home.tsx requires ---
export default WhyDeSuiteSection; 

// --- (If you have other named exports, they can go here) ---