import { useState } from "react";
import { motion } from "framer-motion";
import { Database, Layers, Globe, ArrowRight, Server, Coins, FileCheck, Link2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FlowNode {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Database;
  color: string;
  details: {
    title: string;
    items: string[];
  };
}

const flowNodes: FlowNode[] = [
  {
    id: "oracle",
    title: "Oracle ERP",
    subtitle: "Oracle Integration(OIC)",
    icon: Database,
    color: "from-red-500 to-orange-500",
    details: {
      title: "Enterprise Systems",
      items: [
        "Oracle Fusion Cloud",
        "Oracle E-Business Suite",
        "Oracle ATP Database",
        "Oracle NetSuite(Coming Soon)",
      ],
    },
  },
  {
    id: "desuite",
    title: "DeSuite Layer",
    subtitle: "DeSuite Orchestrator(DSO)™",
    icon: Layers,
    color: "from-primary to-chart-4",
    details: {
      title: "Core Capabilities",
      items: [
        "Stablecoin Processing",
        "Asset Tokenization",
        "Smart Contract Automation",
        "Compliance Verification",
      ],
    },
  },
  {
    id: "blockchain",
    title: "Blockchain",
    subtitle: "Web3 Networks",
    icon: Globe,
    color: "from-chart-2 to-emerald-500",
    details: {
      title: "Public Blockchains",
      items: [
        "Ethereum",
        "Polygon",
        "Base",
        "Multi-chain(Coming Soon)",
      ],
    },
  },
];

const subComponents = [
  { icon: Server, label: "API Gateway" },
  { icon: Coins, label: "Token Engine" },
  { icon: FileCheck, label: "Compliance" },
  { icon: Link2, label: "Connectors" },
];

export function FlowDiagramSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-accent/30 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4" data-testid="text-flow-title">
            How DeSuite Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless bridge connecting your Oracle ERP to the world of blockchain and digital assets.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8">
            {flowNodes.map((node, index) => (
              <div key={node.id} className="flex flex-col md:flex-row items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <Card
                    // Reverted card width to the size used previously
                    className={`relative p-6 max-w-xs w-full md:w-64 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      activeNode === node.id ? "ring-2 ring-primary shadow-xl" : ""
                    }`}
                    data-testid={`card-flow-${node.id}`}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center mb-4`}>
                      <node.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-1">{node.title}</h3>
                    <p className="text-sm text-muted-foreground">{node.subtitle}</p>
                    
                    {/* Reverted Tooltip positioning to the original state with fixed width and original positioning */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: activeNode === node.id ? 1 : 0, y: activeNode === node.id ? 0 : 10 }}
                      // Original positioning and sizing that caused clipping and misalignment issues
                      className="absolute left-1/2 top-full mt-4 z-20 
                                 w-[200px] sm:w-[250px] p-4 bg-card border border-border rounded-lg shadow-lg 
                                 -translate-x-1/2" 
                    >
                        <h4 className="font-medium text-sm mb-2">{node.details.title}</h4>
                        <ul className="space-y-1">
                          {node.details.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-1 text-xs text-muted-foreground">
                              <div className="w-1.5 h-1.5 mt-1 rounded-full bg-primary flex-shrink-0" />
                              <span className="leading-tight">{item}</span>
                            </li>
                          ))}
                        </ul>
                    </motion.div>
                  </Card>
                </motion.div>

                {/* HORIZONTAL ARROW (Tablet/Desktop) */}
                {index < flowNodes.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <svg width="50" height="40" className="overflow-visible">
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="hsl(var(--chart-4))" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 20 L 30 20"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        className="animate-flow"
                      />
                      <polygon
                        points="30,15 45,20 30,25"
                        fill="hsl(var(--primary))"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                )}

                {/* VERTICAL ARROW (Mobile) */}
                {index < flowNodes.length - 1 && (
                  <div className="flex md:hidden items-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-chart-4/50" />
                      <ArrowRight className="w-5 h-5 text-primary/70 rotate-90" />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {subComponents.map((component, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <component.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">{component.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}