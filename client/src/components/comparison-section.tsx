import React, { useState } from 'react'; 
import {
  CheckCircle,
  XCircle, // Keeping XCircle in imports just in case, but using MinusCircle below
  Zap,
  Shield,
  Globe,
  Layers,
  TrendingUp,
  Lock,
  Network, 
  DollarSign, 
  Fingerprint, 
  Cpu, 
  ChevronDown, 
  MinusCircle, // ADDED: New icon for representing limitations
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Defines the data structure for the comparison points.
const comparisonData = [
  {
    icon: Cpu,
    feature: "Liquidity & Composability",
    desuite: "Global, Deep Liquidity. Access established stablecoins (USDC, EURC) and massive public blockchain capital pools. Instantly usable everywhere.",
    permissioned: "Walled Garden Liquidity. Liquidity is limited to institutions within the closed consortium. Assets are illiquid outside this network.",
    winner: "DeSuite: Liquidity drives value. A permissioned token is an 'illiquid island'.",
  },
  {
    icon: Network,
    feature: "Interoperability",
    desuite: "Universal Standards (ERC-20/721). Easily connects to any other DApp, wallet, or financial institution globally via public blockchain.",
    permissioned: "Bilateral Integration. Requires a separate, costly integration process for every single external system or counterparty.",
    winner: "DeSuite: Standardized public tokens scale infinitely better than custom private tokens.",
  },
  {
    icon: DollarSign,
    feature: "Cost Basis",
    desuite: "Low, Transparent Fees. Operates on public decentralized infrastructure (L2s for scale). Cost is competitive and predictable.",
    permissioned: "High Institutional Cost. Requires high licensing, governance, and maintenance fees paid to the DLT provider/consortium.",
    winner: "DeSuite: Infrastructure is a commodity on the public chain; true value is in your connector.",
  },
  {
    icon: Shield,
    feature: "Network Security",
    desuite: "Decentralized Security. Guaranteed by vast, global consensus mechanisms (e.g., Proof-of-Stake) of the public blockchain. Highly immutable.",
    permissioned: "Centralized Risk. Security relies on the integrity of the founding consortium. Single point of attack/failure.",
    winner: "DeSuite: For true, long-term trust and immutability, decentralization wins.",
  },
  {
    icon: Fingerprint,
    feature: "Enterprise Data Privacy",
    desuite: "Zero-Knowledge Solution. Data stays off-chain in Oracle ERP. Only verifiable, anonymous proofs are published publicly.",
    permissioned: "Limited Access Privacy. Privacy is achieved through institutional trust/limited access, not cryptographic proof.",
    winner: "DeSuite: Cryptographically ensures privacy while achieving public transparency.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// Component for a single interactive comparison row
const ComparisonRow = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine the border color for the row based on whether it's open
  const rowClasses = `grid grid-cols-[1fr_1.5fr_1.5fr_1fr] group transition-colors duration-200 
    hover:bg-card/50 ${index % 2 === 0 ? 'bg-card/30' : 'bg-card/70'} 
    ${isOpen ? 'ring-2 ring-primary/50' : ''}`;

  return (
    <motion.div
      variants={itemVariants}
      className="border-b border-border/50 last:border-b-0 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Collapsed Row Content (Always visible) */}
      <div className={rowClasses}>
        {/* 1. Feature Name */}
        <div className="p-4 flex items-center gap-3">
          <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="font-semibold text-foreground text-base">{item.feature}</span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ml-auto lg:hidden ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {/* 2. DeSuite Content (Visible only on Desktop or when Open on Mobile) */}
        <div className="p-4 border-l text-sm hidden lg:block">
          <div className="flex items-start text-primary font-medium">
            <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
            {/* REMOVED: line-clamp-2 to show full sentence */}
            <p className="text-foreground/80">{item.desuite}</p> 
          </div>
        </div>

        {/* 3. Permissioned DLT Content (Visible only on Desktop or when Open on Mobile) */}
        <div className="p-4 border-l text-sm hidden lg:block">
          <div className="flex items-start text-muted-foreground font-medium">
            {/* CHANGED: XCircle to MinusCircle */}
            <MinusCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> 
            {/* REMOVED: line-clamp-2 to show full sentence */}
            <p className="text-foreground/80">{item.permissioned}</p>
          </div>
        </div>

        {/* 4. Verdict/Takeaway (Always visible) */}
        <div className="p-4 border-l text-sm hidden lg:block">
          <p className="text-muted-foreground">
            <Zap className="w-4 h-4 text-primary inline-block mr-1 -mt-0.5" />
            <span className="font-semibold text-primary">{item.winner.split(':')[0]}</span>: {item.winner.split(':').slice(1).join(':').trim()}
          </p>
        </div>
      </div>

      {/* Expanded Row Content (Mobile/Interaction) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 lg:hidden border-t border-border/50 bg-card"
          >
            <div className="space-y-4">
                {/* DeSuite Content for Mobile */}
                <div>
                    <h4 className="flex items-center text-primary font-bold mb-1">
                        <CheckCircle className="w-4 h-4 mr-2" /> DeSuite Advantage
                    </h4>
                    <p className="text-foreground/80 text-sm pl-6">{item.desuite}</p>
                </div>

                {/* Permissioned Content for Mobile */}
                <div>
                    <h4 className="flex items-center text-muted-foreground font-bold mb-1">
                        {/* CHANGED: XCircle to MinusCircle */}
                        <MinusCircle className="w-4 h-4 mr-2" /> Permissioned DLT Context
                    </h4>
                    <p className="text-foreground/80 text-sm pl-6">{item.permissioned}</p>
                </div>

                {/* Verdict for Mobile */}
                <div>
                    <h4 className="flex items-center text-primary font-bold mb-1">
                        <Zap className="w-4 h-4 mr-2" /> Key Verdict
                    </h4>
                    <p className="text-muted-foreground text-sm pl-6">
                        <span className="font-semibold text-primary">{item.winner.split(':')[0]}</span>: {item.winner.split(':').slice(1).join(':').trim()}
                    </p>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export function ComparisonSection() {
  return (
    <section id="why-desuite" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-4/10 border border-chart-4/20 mb-4">
            <Zap className="w-4 h-4 text-chart-4" />
            <span className="text-sm font-medium text-chart-4">The Essential Public Blockchain Layer</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text-chart-4">DeSuite vs. Permissioned Blockchains</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare the foundational differences between leveraging decentralized public infrastructure (DeSuite) and utilizing a closed, permissioned DLT.
          </p>
        </motion.div>

        {/* COMPARISON TABLE STRUCTURE (Responsive Grid) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="overflow-x-auto rounded-xl border border-border/70 shadow-2xl"
        >
          {/* Table Container for Responsiveness */}
          <div className="min-w-[900px] lg:min-w-full">
            
            {/* Header Row - Cleaned up colors */}
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr_1fr] text-left font-display font-bold text-sm uppercase tracking-wider bg-card border-b border-border/70">
                <div className="p-4 text-foreground/80">Feature</div>
                <div className="p-4 text-foreground border-l border-border/70 hidden lg:block">DeSuite Advantage</div>
                <div className="p-4 text-foreground/70 border-l border-border/70 hidden lg:block">Permissioned DLT Context</div>
                <div className="p-4 text-primary border-l border-border/70 hidden lg:block">Verdict</div>
                <div className="p-4 text-foreground border-l border-border/70 block lg:hidden">Details (Tap to Expand)</div>
            </div>

            {/* Data Rows */}
            {comparisonData.map((item, index) => (
                <ComparisonRow key={item.feature} item={item} index={index} />
            ))}
          </div>
        </motion.div>
        
        {/* Friendly Conclusion */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center text-xl font-medium text-foreground max-w-4xl mx-auto p-4 border-t border-border/50"
        >
          DeSuite is the pathway to leveraging the best of public blockchain, ensuring your Oracle ERP remains the source of truth while benefiting from global liquidity, interoperability, and true decentralized security.
        </motion.p>
      </div>
      {/* Background glow for consistency */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-chart-4/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}