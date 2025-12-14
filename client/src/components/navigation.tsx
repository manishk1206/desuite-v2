import { useState, useEffect } from "react";
// Assuming Button and ThemeToggle are imported from a utility folder
import { Button } from "@/components/ui/button"; 
// FIX: Include a functional ThemeToggle component definition here to resolve the missing import error.
import { Moon, Sun } from "lucide-react"; 
import { Menu, X, Layers, Download } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

// --- START: ThemeToggle Implementation to fix missing file error ---
// This is a minimal implementation assuming a state is available for theme management.
// For simplicity, we will mock the functionality since the actual theme state is external.
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // In a real app, you would apply the theme class to document.documentElement here.
    // document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
// --- END: ThemeToggle Implementation ---


interface NavigationProps {}

// IMPORTANT: Updated path to point directly to the uploaded PDF file.
const WHITEPAPER_DOWNLOAD_PATH = "file://whitepaper_onepager.pdf";

// Define the navigation items. Note: isDownload flag is now purely for labeling/icon purposes, 
// as the standard <a> tag handles the download.
const navItems = [
  { label: "Product", href: "#product", isDownload: false },
  { label: "How It Works", href: "#how-it-works", isDownload: false },
  { label: "Features", href: "#features", isDownload: false },
  // Link updated to point to the PDF URI
  { 
    label: "Strategic Brief", // Changed label slightly to be more descriptive of the PDF
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

  // Removed handlePrint function as it's no longer needed.

  // Helper function to handle link clicks (now only closes the menu)
  const handleLinkClick = (item: typeof navItems[0]) => (e: React.MouseEvent) => {
    // If it's the download link, we let the browser handle the 'href' directly.
    if (item.isDownload) {
      // We don't preventDefault() anymore, allowing the link to navigate/download.
      // We also don't need the custom print logic.
    }
    
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
                    ? 'text-primary hover:text-accent font-semibold flex items-center gap-1' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                // Ensure PDF links open in a new tab
                target={item.isDownload ? "_blank" : "_self"}
                rel={item.isDownload ? "noopener noreferrer" : undefined}
              >
                {item.isDownload && <Download className="w-4 h-4" />}
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
                  // Ensure PDF links open in a new tab
                  target={item.isDownload ? "_blank" : "_self"}
                  rel={item.isDownload ? "noopener noreferrer" : undefined}
                >
                    <div className="flex items-center gap-2">
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