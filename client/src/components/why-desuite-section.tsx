import React from 'react'; 
// Import lucide-react icons if needed, but not necessary here.

// --- Simplified Button Component (to ensure self-containment) ---
// This is a minimal implementation of a styled button that supports the 'asChild' prop.
const CustomButton = ({ children, className = "", asChild = false, size = 'default', ...props }: { children: React.ReactNode, className?: string, asChild?: boolean, size?: 'lg' | 'default' }) => {
    // Base styles (using Tailwind classes for primary/large button look)
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    let sizeClasses = '';
    if (size === 'lg') {
        sizeClasses = 'h-12 px-6 py-3 text-lg'; // Larger size
    } else {
        sizeClasses = 'h-10 px-4 py-2 text-sm'; // Default size
    }

    // Assuming primary color background
    const variantClasses = 'bg-primary text-primary-foreground shadow hover:bg-primary/90';

    const finalClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

    if (asChild && children && React.isValidElement(children)) {
        // Renders the child (e.g., an <a> tag) with the combined button styles
        return React.cloneElement(children, { 
            className: `${children.props.className || ''} ${finalClasses}`, 
            ...props 
        });
    }

    return (
        <button className={finalClasses} {...props}>
            {children}
        </button>
    );
};
// --- END Simplified Button Component ---


// Path to the PDF file
const WHITEPAPER_DOWNLOAD_PATH = "whitepaper_onepager.pdf";
// Suggested filename for the downloaded file
const DOWNLOAD_FILENAME = "DeSuite_Strategic_Brief.pdf"; 

// Define the component using the name expected in home.tsx
const WhyDeSuiteSection = () => {
    // Note: The download is now handled entirely by the anchor tag's 'download' attribute.
    // The previous 'handlePrint' function has been removed.

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
                    <CustomButton 
                        size="lg" 
                        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                        asChild // Tells CustomButton to apply its styling to the child <a> tag
                    >
                        {/* The anchor tag triggers the download:
                            1. href: points to the PDF file.
                            2. download: suggests the name for the downloaded file.
                        */}
                        <a 
                            href={WHITEPAPER_DOWNLOAD_PATH} 
                            download={DOWNLOAD_FILENAME}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Download Strategic Brief (PDF)
                        </a>
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

// --- CORRECT EXPORT: This is what Home.tsx requires ---
export default WhyDeSuiteSection;