import { useState, useEffect } from "react";
// Assuming Button and ThemeToggle are imported from a utility folder
// If these fail, you may need to provide the code for Button and ThemeToggle
import { Button } from "@/components/ui/button"; 
import { ThemeToggle } from "./theme-toggle"; 
import { Menu, X, Layers } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {}

// Define the path for the downloadable file. We are using the HTML file path
// since it is currently placed next to index.html.
const WHITEPAPER_DOWNLOAD_PATH = "/whitepaper_onepager.html";

// Define the navigation items, adding an 'isDownload' flag for the new link.
const navItems = [
  { label: "Product", href: "#product", isDownload: false },
  { label: "How It Works", href: "#how-it-works", isDownload: false },
  { label: "Features", href: "#features", isDownload: false },
  // UPDATED: This now links directly to the HTML file but suggests a PDF name on download
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

  // Helper function to close the menu when a mobile link is clicked
  const handleMobileClick = (item: typeof navItems[0]) => {
    // Close the menu when any link is clicked, including the download link
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
                // Conditional attributes applied for download links
                {...(item.isDownload && { 
                    // Suggests a PDF name, even though it links to an HTML file
                    download: "DeSuite_OnePager.pdf", 
                    target: "_blank", 
                    rel: "noopener noreferrer" 
                })}
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
                  onClick={() => handleMobileClick(item)} 
                  // Conditional attributes applied for download links
                  {...(item.isDownload && { 
                    download: "DeSuite_OnePager.pdf", 
                    target: "_blank", 
                    rel: "noopener noreferrer" 
                  })}
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