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
      
      {/* MODIFIED: Reverting back to a very light, transparent white glow for a cleaner look. */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/50 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* MODIFIED: Second glow also set to transparent white. */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/50 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
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
          {/* MODIFIED: Changed Button to use asChild for a direct Calendly link */}
          <Button
            size="lg"
            asChild
            data-testid="button-hero-book-demo"
          >
            <a 
                href="https://calendly.com/manishk1206/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center" 
            > 
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
            </a>
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
            {/* MODIFIED: Reverting the card's background blur to white-based gradient.
              This removes the harsh green glow around the dashboard card.
            */}
            <div className="absolute -inset-4 bg-gradient-to-r from-white/30 via-white/30 to-white/30 rounded-2xl blur-xl" />
            <div className="relative bg-card border border-border rounded-xl p-4 sm:p-6 shadow-xl animate-float">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">desuite-dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-