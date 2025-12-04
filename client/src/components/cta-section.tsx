import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// 1. Removed the broken 'onBookDemo' prop
interface CTASectionProps {}

// 2. Removed the 'onBookDemo' argument
export function CTASection({}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-chart-4/15 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Get Started Today</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6" data-testid="text-cta-title">
            Ready to Modernize Your ERP?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Schedule a personalized walkthrough with our team and discover how DeSuite 
            can transform your enterprise operations with blockchain technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* MODIFIED: Changed Button to use asChild for a direct Calendly link */}
            <Button
              size="lg"
              asChild
              data-testid="button-cta-book-demo"
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
              <a href="mailto:contact@desuite.io" data-testid="link-contact-sales">
                Contact Sales
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required. Start your free pilot program today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}