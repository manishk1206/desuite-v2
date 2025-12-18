import React from 'react'; 
// import { Button } from './ui/button'; // Removed unresolved import

// --- Minimal, self-contained CustomButton Component (Embed the dependency) ---
const CustomButton = ({ children, className = "", asChild = false, size = 'default', ...props }: { children: React.ReactNode, className?: string, asChild?: boolean, size?: 'lg' | 'default' }) => {
    // Base styles (Tailwind classes)
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    let sizeClasses = '';
    if (size === 'lg') {
        sizeClasses = 'h-12 px-6 py-3 text-lg'; // Larger size
    } else {
        sizeClasses = 'h-10 px-4 py-2 text-sm'; // Default size
    }

    // Assuming primary color background (bg-primary corresponds to your theme's main color)
    const variantClasses = 'bg-indigo-600 text-white shadow hover:bg-indigo-700';

    const finalClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

    if (asChild && children && React.isValidElement(children)) {
        // Renders the child (the <a> tag) with the combined button styles
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
// --- END CustomButton ---


// Path to the PDF file. This path is correct for a file placed in the 'public' folder.
const WHITEPAPER_DOWNLOAD_PATH = "whitepaper_onepager.pdf";
const DOWNLOAD_FILENAME = "DeSuite_Strategic_Brief.pdf"; 

const WhyDeSuiteSection = () => {
    // The download is handled purely by the <a> tag's href and download attributes.
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
                    {/* Use CustomButton as a container for the <a> tag via 'asChild' */}
                    <CustomButton 
                        size="lg" 
                        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                        asChild 
                    >
                        {/* <a> tag handles the download directly */}
                        <a 
                            href={WHITEPAPER_DOWNLOAD_PATH} 
                            download={DOWNLOAD_FILENAME}
                            // Using target="_blank" ensures the browser attempts a direct download or opens the file in a new tab first.
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Strategic Brief One-Pager (PDF)
                        </a>
                    </CustomButton>
                </div>
            </div>
        </section>
    );
};

// --- CORRECT EXPORT: This is what Home.tsx requires ---
export default WhyDeSuiteSection;