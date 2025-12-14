import { useState, useEffect } from "react";
// The Button and ThemeToggle imports could not be resolved.
// Providing self-contained implementations for functionality.
import { Menu, X, Layers, Sun, Moon } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {}

// --- Self-Contained Button Component (Stubbed) ---
// Assuming 'Button' is a utility component, replaced with a functional stub
const Button = ({ children, asChild, className, size, variant, onClick, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const sizeClasses = size === "icon" ? "h-9 w-9 p-0" : "h-10 px-4 py-2";
  const variantClasses = variant === "ghost" ? "hover:bg-accent/50 hover:text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg";

  const Tag = asChild ? children.type : 'button';

  if (asChild) {
    // If asChild is true, apply classes to the child element (<a> in this case)
    return <Tag {...children.props} className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} onClick={onClick} {...props}>{children.props.children}</Tag>;
  }

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};


// --- Self-Contained ThemeToggle Component (Stubbed) ---
const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // In a real app, you would apply the theme class to document.documentElement
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
        <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};


const navItems = [
  { label: "Product", href: "#product", isDownload: false },
  { label: "How It Works", href: "#how-it-works", isDownload: false },
  { label: "Features", href: "#features", isDownload: false },
  { 
    label: "Why DeSuite (PDF)", 
    href: "/whitepaper_onepager.html", 
    isDownload: true, 
    downloadFileName: "DeSuite_Strategic_Brief.pdf" 
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
                // Conditional attributes for the PDF download link
                target={item.isDownload ? "_blank" : "_self"}
                download={item.isDownload ? item.downloadFileName : undefined}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+|-/g, '_').replace(/[\(\)]/g, '')}`}
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
                  // Conditional attributes for the PDF download link
                  target={item.isDownload ? "_blank" : "_self"}
                  download={item.isDownload ? item.downloadFileName : undefined}
                  className="block py-2 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+|-/g, '_').replace(/[\(\)]/g, '')}`}
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