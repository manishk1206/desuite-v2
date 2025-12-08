import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle, Zap, Shield, RefreshCw } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Fragmented Systems",
    description: "Disconnected ERP and blockchain systems create data silos and manual reconciliation nightmares",
  },
  {
    icon: AlertTriangle,
    title: "Complex Integration",
    description: "Traditional Web3 integration requires extensive development resources and specialized expertise",
  },
  {
    icon: RefreshCw,
    title: "Operational Friction",
    description: "Manual processes for stablecoin payments and asset tokenization slow down business operations",
  },
];

const solutions = [
  {
    icon: Zap,
    title: "Unified Layer",
    description: "Single integration point connecting Oracle ERP to any blockchain network seamlessly",
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "Production-grade infrastructure with compliance, security, and audit trails built-in",
  },
  {
    icon: CheckCircle2,
    title: "Automated Workflows",
    description: "Real-time synchronization between ERP transactions and blockchain operations",
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

export function ProblemSolutionSection() {
  return (
    <section id="product" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-problem-solution-title">
            The Enterprise Web3 Challenge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizations struggle to bridge the gap between traditional ERP systems and emerging blockchain technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-6">
              {/* Corrected: Changed text-destructive to a soft, professional slate color */}
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">The Challenge</span>
            </div>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  // Corrected: Changed destructive background/border to slate-based
                  className="flex gap-4 p-4 rounded-xl bg-slate-500/5 border border-slate-500/10"
                  data-testid={`card-problem-${index}`}
                >
                  <div className="flex-shrink-0">
                    {/* Corrected: Changed destructive background/icon color to slate-based */}
                    <div className="w-10 h-10 rounded-lg bg-slate-500/10 flex items-center justify-center">
                      <problem.icon className="w-5 h-5 text-slate-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">The DeSuite Solution</span>
            </div>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10"
                  data-testid={`card-solution-${index}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <solution.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}