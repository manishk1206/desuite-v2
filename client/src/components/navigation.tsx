import { useState, useEffect } from "react";
import { Button } from "./button"; 
import { ThemeToggle } from "./theme-toggle"; 
import { Menu, X, Layers } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {}

// Path to the source file containing the content
const WHITEPAPER_SOURCE_PATH = "whitepaper_onepager.html";
const WHITEPAPER_FILENAME = "DeSuite_Strategic_Brief.html"; // The desired download filename

// Define the navigation items
const navItems = [
  { label: "Product", href: "#product", isDownload: false },
  { label: "How It Works", href: "#how-it-works", isDownload: false },
  { label: "Features", href: "#features", isDownload: false },
  // Setting href to '#' and using isDownload: true to trigger custom download logic
  { 
    label: "Why DeSuite", 
    href: "#download-brief", 
    isDownload: true 
  }, 
  { label: "Enterprise", href: "#enterprise", isDownload: false },
];

export function Navigation({}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // New function to handle programmatic file download
  const handleDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    try {
      // Fetch the content of the target file
      const response = await fetch(WHITEPAPER_SOURCE_PATH);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${WHITEPAPER_SOURCE_PATH}: ${response.statusText}`);
      }

      // Read the content as text
      const content = await response.text();

      // Create a Blob from the content
      const blob = new Blob([content], { type: 'text/html' });
      const url = URL.createObjectURL(blob);

      // Create a temporary link element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = WHITEPAPER_FILENAME;
      document.body.appendChild(a);
      a.click();
      
      // Clean up the temporary link and URL object
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Download failed:", error);
      // Optional: Show a user-friendly error message in the UI
    } finally {
      setIsDownloading(false);
    }
  };

  // Helper function to handle link clicks
  const handleLinkClick = (item: typeof navItems[0]) => (e: React.MouseEvent) => {
    if (item.isDownload) {
      e.preventDefault(); // Prevent default navigation for the hash link
      handleDownload();
    }
    // Close the menu if on mobile
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Layers className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-xl">DeSuite</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                // Apply the custom click handler for download/navigation
                onClick={handleLinkClick(item)} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                // Removed target/rel as the click handler manages the action
              >
                {item.label}
                {/* Optional visual indicator for download/external action */}
                {item.isDownload && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-muted-foreground">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              className="hidden sm:inline-flex"
              data-testid="button-nav-book-demo"
            >
              <a 
                href="https://calendly.com/manishk1206/30min" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass border-b border-border/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors flex items-center gap-1"
                  // Apply the unified click handler for mobile
                  onClick={handleLinkClick(item)} 
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                  {item.isDownload && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-muted-foreground">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                  )}
                </a>
              ))}
              <Button
                asChild
                className="w-full mt-4"
                data-testid="button-mobile-book-demo"
                onClick={() => setIsMobileMenuOpen(false)} 
              >
                <a 
                  href="https://calendly.com/manishk1206/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center"
                >
                  Book a Demo
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}