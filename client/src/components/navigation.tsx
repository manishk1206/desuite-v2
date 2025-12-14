import { useState, useEffect } from "react";
// Assuming Button is imported from a utility folder
import { Button } from "@/components/ui/button"; 
// REMOVED: import { ThemeToggle } from "./theme-toggle"; to fix the compilation error
import { Menu, X, Layers, Download } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

// NOTE: ThemeToggle has been removed to ensure the code compiles.

interface NavigationProps {}

// IMPORTANT: Path to point directly to the uploaded PDF file using its simple filename.
const WHITEPAPER_DOWNLOAD_PATH = "whitepaper_onepager.pdf";

// Define the navigation items. isDownload flag is used for styling/icon and setting target="_blank".
const navItems = [
  { label: "Product", href: "#product", isDownload: false },
  { label: "How It Works", href: "#how-it-works", isDownload: false },
  { label: "Features", href: "#features", isDownload: false },
  // Link label restored to "Why DeSuite"
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

  // Helper function to handle link clicks (now only closes the menu)
  const handleLinkClick = (item: typeof navItems[0]) => (e: React.MouseEvent) => {
    // We let the browser handle the 'href' directly, including for downloads.
    
    // Close the menu if on mobile
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
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
                // Apply the unified click handler (now mainly for menu closing/mobile)
                onClick={handleLinkClick(item)} 
                className={`text-sm font-medium transition-colors ${
                  item.isDownload 
                    // Added subtle styling to highlight the download link
                    ? 'text-primary hover:text-accent font-semibold flex items-center gap-1' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                // Use target="_blank" for the PDF link to open it in a new tab
                target={item.isDownload ? "_blank" : "_self"}
                rel={item.isDownload ? "noopener noreferrer" : undefined}
              >
                {item.isDownload && <Download className="w-4 h-4" />}
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* REMOVED ThemeToggle component reference to resolve compilation error */}
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
                  // Ensure PDF links open in a new tab
                  target={item.isDownload ? "_blank" : "_self"}
                  rel={item.isDownload ? "noopener noreferrer" : undefined}
                >
                    <div className={`flex items-center gap-2 ${item.isDownload ? 'text-primary font-semibold' : ''}`}>
                        {item.isDownload && <Download className="w-4 h-4 text-accent" />}
                        {item.label}
                    </div>
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