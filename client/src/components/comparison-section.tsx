import { CheckCircle, XCircle, Zap, Shield, Globe, Layers, TrendingUp, Lock } from "lucide-react";
import { motion } from "framer-motion";

// Defines the data structure for the comparison points, derived from the user-provided image.
const comparisonData = [
  {
    icon: Globe,
    feature: "Liquidity & Composability",
    desuite: "Global, Deep Liquidity. Access established stablecoins (USDC, EURC) and massive DeFi capital pools. Instantly usable everywhere.",
    obpda: "Walled Garden Liquidity. Liquidity is limited to institutions within the closed consortium. Assets are illiquid outside this network.",
    winner: "DeSuite: Liquidity drives value. A permissioned token is an 'illiquid island'.",
  },
  {
    icon: Layers,
    feature: "Interoperability",
    desuite: "Universal Standards (ERC-20/721). Easily connects to any other DApp, wallet, or financial institution globally.",
    obpda: "Bilateral Integration. Requires a separate, costly integration process for every single external system or counterparty.",
    winner: "DeSuite: Standardized public tokens scale infinitely better than custom private tokens.",
  },
  {
    icon: TrendingUp,
    feature: "Cost Basis",
    desuite: "Low, Transparent Fees. Operates on decentralized infrastructure (L2s for scale). Cost is competitive and predictable.",
    obpda: "High Institutional Cost. Requires high licensing, governance, and maintenance fees paid to the DLT provider/consortium.",
    winner: "DeSuite: Infrastructure is a commodity on the public chain; true value is in your connector.",
  },
  {
    icon: Shield,
    feature: "Network Security",
    desuite: "Decentralized Security. Guaranteed by vast, global consensus mechanisms (e.g., Proof-of-Stake). Highly immutable.",
    obpda: "Centralized Risk. Security relies on the integrity of the founding consortium. Single point of attack/failure.",
    winner: "DeSuite: For true, long-term trust and immutability, decentralization wins.",
  },
  {
    icon: Lock,
    feature: "Enterprise Data Privacy",
    desuite: "Zero-Knowledge Solution. Data stays off-chain in Oracle ERP. Only verifiable, anonymous proofs are published publicly.",
    obpda: "Limited Access Privacy. Privacy is achieved through institutional trust/limited access, not cryptographic proof.",
    winner: "DeSuite: Cryptographically ensures privacy while achieving public transparency.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
            <span className="text-sm font-medium text-chart-4">The Essential Web3 Layer</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text-chart-4">Why DeSuite is Your Strategic Choice</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            DeSuite is designed to be the essential layer that brings the efficiency and liquidity of public Web3 infrastructure to your existing Oracle ecosystem. We are complementary to existing enterprise solutions like OBP-DA.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.feature}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4 pb-4 border-b border-border">
                <item.icon className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-foreground font-display">{item.feature}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* DeSuite Column (The strength) */}
                <div className="p-3 rounded-lg border border-green-500/30 bg-green-500/5">
                  <div className="flex items-center text-lg font-medium text-green-400 mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    DeSuite Advantage
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desuite}</p>
                </div>

                {/* OBP-DA Column (The limitation/context) */}
                <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/5">
                  <div className="flex items-center text-lg font-medium text-red-400 mb-2">
                    <XCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    OBP-DA Context
                  </div>
                  <p className="text-sm text-muted-foreground">{item.obpda}</p>
                </div>

                {/* Winner Column (The friendly takeaway) */}
                <div className="p-3 rounded-lg border border-primary/30 bg-primary/5">
                  <div className="flex items-center text-lg font-medium text-primary mb-2">
                    <Zap className="w-5 h-5 mr-2 flex-shrink-0" />
                    Key Takeaway
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{item.winner.split(':')[0]}</span>: {item.winner.split(':').slice(1).join(':').trim()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Friendly Conclusion */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center text-xl font-medium text-foreground max-w-4xl mx-auto p-4 border-t border-border/50"
        >
          DeSuite is the pathway to leveraging the best of Web3, ensuring your Oracle ERP remains the source of truth while benefiting from global liquidity, interoperability, and true decentralized security.
        </motion.p>
      </div>
      {/* Background glow for consistency */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-chart-4/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2" />
    </section>
  );
}