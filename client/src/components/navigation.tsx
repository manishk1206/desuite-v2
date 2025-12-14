import { useState, useEffect } from "react";
// Assuming Button and ThemeToggle are imported from a utility folder
import { Button } from "@/components/ui/button"; 
import { ThemeToggle } from "./theme-toggle"; 
import { Menu, X, Layers } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {}

// FIX: Aligning path with why-desuite-section.tsx to use relative path and fix 404
const WHITEPAPER_DOWNLOAD_PATH = "whitepaper_onepager.pdf";

// Define the navigation items, retaining the 'isDownload' flag to indicate special handling
const navItems = [
  { label: "Product", href: "#product", isDownload: false },
  { label: "How It Works", href: "#how-it-works", isDownload: false },
  { label: "Features", href: "#features", isDownload: false },
  // Link is marked as a download to trigger the custom print handler
  { 
    label: "Why DeSuite", 
    href: WHITEPAPER_DOWNLOAD_PATH, 
    isDownload: true 
  }, 
  { label: "Enterprise", href: "#enterprise", isDownload: false },
];

export function Navigation({}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom print function, mirrored from why-desuite-section.tsx
  const handlePrint = () => {
      // Open the HTML document in a new window/tab using the relative path
      const printWindow = window.open(WHITEPAPER_DOWNLOAD_PATH, '_blank');
      
      if (printWindow) {
          printWindow.onload = () => {
              // Trigger the browser's native print dialog
              printWindow.print(); 
          };
      }
  };

  // Helper function to handle link clicks (triggers print for download link, closes menu)
  const handleLinkClick = (item: typeof navItems[0]) => (e: React.MouseEvent) => {
    if (item.isDownload) {
      e.preventDefault(); // CRUCIAL: Stop the browser from attempting a direct download/navigation
      handlePrint();
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
                // Apply the unified click handler.
                onClick={handleLinkClick(item)} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
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
                  className="block py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                  // Apply the unified click handler for mobile
                  onClick={handleLinkClick(item)} 
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
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