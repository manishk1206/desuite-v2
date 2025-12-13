import { motion } from "framer-motion";
import { Coins, Layers, Database, Shield, Globe2, Code2, DollarSign, NetworkIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: DollarSign,
    title: "Stablecoin Integration",
    description: "Process payments in USDC, USDT, XSGD and other major stablecoins directly from your ERP workflows with automatic reconciliation.",
  },
  {
    icon: Coins,
    title: "Real-time Tokenization",
    description: "Convert enterprise assets into blockchain tokens instantly. Inventory, receivables, and real estate - all tokenizable.",
  },
  {
    icon: NetworkIcon,
    title: "Multi-chain Support",
    description: "Deploy across Ethereum, Polygon, and other major L1 and L2 chains. One integration, multiple networks.",
  },
   {
    icon: Shield,
    title: "Enterprise Data Privacy",
    description: "DeSuite used zKZero-Knowledge Solution Data stays off-chain in the Oracle ERP. DeSuite only publishes verifiable, anonymous zk-Proofs on the public ledger.",
  },
  {
    icon: Code2,
    title: "API-First Design",
    description: "RESTful APIs and webhooks for seamless integration. Plug-and-play architecture with built-in security",
  },
  {
    icon: Database,
    title: "Oracle Native",
    description: "Purpose-built for Oracle ERP. No middleware complexity or custom development required.",
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-features-title">
            Enterprise-Grade Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to integrate blockchain capabilities into your enterprise operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="p-6 lg:p-8 h-full hover-elevate transition-all duration-300"
                data-testid={`card-feature-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
