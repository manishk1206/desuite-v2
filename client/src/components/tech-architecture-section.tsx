import { motion } from "framer-motion";
import { Shield, Zap, Scale, Lock, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const capabilities = [
 // { icon: Shield, label: "SOC 2 Type II Compliant" },
 { icon: Shield, label: "Built as per ISO 27001 framework for Security" },
  { icon: Zap, label: "Sub-second Latency" },
  { icon: Scale, label: "10K+ TPS Capacity" },
  { icon: Lock, label: "End-to-end Encryption" },
];

const codeExample = `// Initialize DeSuite client
const desuite = new DeSuite({
  apiKey: process.env.DESUITE_API_KEY,
  network: 'polygon-mainnet'
});

// Tokenize an asset from Oracle
const token = await desuite.tokenize({
  source: 'oracle-fusion',
  assetId: 'INV-2024-0892',
  type: 'receivable',
  amount: 50000,
  currency: 'USDC'
});

// Execute stablecoin payment
const payment = await desuite.pay({
  tokenId: token.id,
  recipient: '0x742d35Cc...',
  memo: 'Invoice #INV-2024-0892'
});`;

export function TechArchitectureSection() {
  return (
    <section id="enterprise" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6" data-testid="text-tech-title">
              Enterprise Grade Infrastructure
            </h2>
            <p className="text-muted-foreground mb-8">
              Built for mission-critical enterprise operations with the security, scalability, and reliability your business demands.
            </p>

            <div className="space-y-4 mb-8">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cap.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{cap.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">99.99% uptime SLA with global redundancy</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Data privacy in alignment with GDPR principles</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">24/7 enterprise support and dedicated CSM</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="relative overflow-hidden border-primary/20" data-testid="card-code-example">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-accent/30">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">integration.ts</span>
              </div>
              <pre className="p-4 sm:p-6 overflow-x-auto">
                <code className="text-xs sm:text-sm font-mono text-muted-foreground leading-relaxed">
                  {codeExample.split('\n').map((line, i) => (
                    <div key={i} className="whitespace-pre">
                      <span className="text-muted-foreground/50 select-none mr-4 inline-block w-6 text-right">
                        {i + 1}
                      </span>
                      <span className={
                        line.includes('//') ? 'text-green-500/70' :
                        line.includes("'") || line.includes('"') ? 'text-amber-500/80' :
                        line.includes('const') || line.includes('await') ? 'text-primary' :
                        ''
                      }>
                        {line || '\u00A0'}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
