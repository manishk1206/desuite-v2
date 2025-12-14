import { useState, useEffect } from "react";
// Import all necessary icons from lucide-react
import { Menu, X, Layers, Sun, Moon } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";
import React from "react"; // Explicitly import React for the CustomButton clone logic

interface NavigationProps {}

// Define the navigation items for simple scrolling
const navItems = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Why DeSuite", href: "#why-desuite" }, // Redirects to the section below
  { label: "Enterprise", href: "#enterprise" },
];

/* * --- Simplified Component Implementations ---
 * These replacements for Button and ThemeToggle ensure the file is self-contained
 * and avoids the deployment error caused by external component imports.
 */

// Replacement for Button component (CustomButton)
const CustomButton = ({ children, className = "", asChild = false, size = 'default', variant = 'default', onClick, ...props }: { children: React.ReactNode, className?: string, asChild?: boolean, size?: 'icon' | 'default', variant?: 'ghost' | 'default', onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  let sizeClasses = '';
  if (size === 'icon') {
    sizeClasses = 'h-10 w-10 p-0';
  } else {
    sizeClasses = 'h-10 px-4 py-2';
  }

  let variantClasses = '';
  if (variant === 'ghost') {
    variantClasses = 'bg-transparent hover:bg-accent hover:text-accent-foreground';
  } else {
    // Default variant (simulating the primary button)
    variantClasses = 'bg-primary text-primary-foreground shadow hover:bg-primary/90';
  }

  const finalClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (asChild && children && React.isValidElement(children)) {
    // Apply combined classes and props to the child element (e.g., an <a> tag)
    return React.cloneElement(children, { 
      className: `${children.props.className || ''} ${finalClasses}`, 
      onClick: onClick,
      ...props 
    });
  }

  return (
    <button className={finalClasses} onClick={onClick as (e: React.MouseEvent<HTMLButtonElement>) => void} {...props}>
      {children}
    </button>
  );
};

// Replacement for ThemeToggle component (CustomThemeToggle)
const CustomThemeToggle = () => {
  // Simple dark mode implementation based on body class, matching the standard setup
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined' && document.body.classList.contains('dark')) {
      return true;
    }
    return false;
  });

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('dark');
      setIsDark(document.body.classList.contains('dark'));
    }
  };

  return (
    <CustomButton
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </CustomButton>
  );
};

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

  // Handler to close the mobile menu on link click
  const handleLinkClick = () => {
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
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <CustomThemeToggle />
            <CustomButton
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
            </CustomButton>
            <CustomButton
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
            </CustomButton>
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
                  onClick={handleLinkClick} 
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </a>
              ))}
              <CustomButton
                asChild
                className="w-full mt-4"
                data-testid="button-mobile-book-demo"
                onClick={handleLinkClick} // Close menu after clicking the button link
              >
                <a 
                  href="https://calendly.com/manishk1206/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center"
                >
                  Book a Demo
                </a>
              </CustomButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}