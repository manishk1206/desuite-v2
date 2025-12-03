import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onBookDemo: () => void;
}

export function HeroSection({ onBookDemo }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-mesh animate-gradient" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-4/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Web3 Infrastructure</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          data-testid="text-hero-title"
        >
          <span className="gradient-text">Stablecoin & Tokenization</span>
          <br />
          <span>Layer for Oracle ERP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          data-testid="text-hero-subtitle"
        >
          Bridge your enterprise Oracle systems with Web3 infrastructure. 
          Enable seamless stablecoin payments, asset tokenization, and blockchain 
          integration without disrupting existing workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={onBookDemo}
            data-testid="button-hero-book-demo"
          >
            Book a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <a href="#how-it-works" data-testid="link-hero-learn-more">
              Learn More
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-chart-4/20 to-chart-2/20 rounded-2xl blur-xl" />
            <div className="relative bg-card border border-border rounded-xl p-4 sm:p-6 shadow-xl animate-float">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">desuite-dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-accent/50 rounded-lg p-3 sm:p-4" data-testid="stat-volume">
                  <div className="text-xs text-muted-foreground mb-1">Total Volume</div>
                  <div className="text-lg sm:text-xl font-display font-semibold" data-testid="text-volume-value">$2.4M</div>
                  <div className="text-xs text-green-500 mt-1">+12.5%</div>
                </div>
                <div className="bg-accent/50 rounded-lg p-3 sm:p-4" data-testid="stat-transactions">
                  <div className="text-xs text-muted-foreground mb-1">Transactions</div>
                  <div className="text-lg sm:text-xl font-display font-semibold" data-testid="text-transactions-value">1,284</div>
                  <div className="text-xs text-green-500 mt-1">+8.3%</div>
                </div>
                <div className="bg-accent/50 rounded-lg p-3 sm:p-4" data-testid="stat-assets">
                  <div className="text-xs text-muted-foreground mb-1">Assets</div>
                  <div className="text-lg sm:text-xl font-display font-semibold" data-testid="text-assets-value">48</div>
                  <div className="text-xs text-muted-foreground mt-1">Tokenized</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <a href="#product" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
