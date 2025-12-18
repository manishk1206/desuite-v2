import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Removed the 'onBookDemo' prop since the function is now a direct link.
interface HeroSectionProps {}

// Removed the 'onBookDemo' argument from the function.
export function HeroSection({}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-mesh animate-gradient" />
      
      {/* RESTORED: Original glow using bg-primary/20 (the purple blush) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* RESTORED: Original second glow using bg-chart-4/20 */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-chart-4/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      {/* --- MODIFIED: Changed max-w-5xl to max-w-7xl (1280px) for wider main content area --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <Sparkles className="w-3 h-3" />
            <span>NEW: ORACLE FUSION STABLECOIN INTEGRATION</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight text-foreground mb-6">
            The Bridge Between <span className="gradient-text">Oracle ERP</span> <br />
            and Digital Assets
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade orchestration layer for secure, compliant stablecoin transactions 
            and real-time reconciliation directly within your Oracle environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* CTA 1: Book Demo */}
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl shadow-lg shadow-primary/20"
              onClick={() => window.location.href = "mailto:manish@desuite.org?subject=Schedule%20a%20Demo"}
            >
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            {/* CTA 2: Learn More -> MODIFIED: Link to Whitepaper HTML file */}
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl bg-background/50 backdrop-blur-sm"
              onClick={() => window.open("/full_technical_whitepaper.html", "_blank")}
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* --- MODIFIED: Changed max-w-4xl to max-w-5xl for the Dashboard card area --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-50" />
            <div className="relative p-4 sm:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-muted-foreground font-mono">DESUITE_ORACLE_MODULE_v1.0.4</div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-accent/50 rounded-lg p-3 sm:p-4 text-left" data-testid="stat-volume">
                  <div className="text-xs text-muted-foreground mb-1">Total Volume</div>
                  <div className="text-lg sm:text-xl font-display font-semibold" data-testid="text-volume-value">$4.2M</div>
                  <div className="text-xs text-green-500 mt-1">+12.5%</div>
                </div>
                <div className="bg-accent/50 rounded-lg p-3 sm:p-4 text-left" data-testid="stat-transactions">
                  <div className="text-xs text-muted-foreground mb-1">Transactions</div>
                  <div className="text-lg sm:text-xl font-display font-semibold" data-testid="text-transactions-value">1,284</div>
                  <div className="text-xs text-green-500 mt-1">+8.3%</div>
                </div>
                <div className="bg-accent/50 rounded-lg p-3 sm:p-4 text-left" data-testid="stat-assets">
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