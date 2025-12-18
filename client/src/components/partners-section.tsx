import { motion } from "framer-motion";

const partners = [
  { name: "Ora", logo: "O" },
  { name: "Cir", logo: "C" },
  { name: "ChainL", logo: "L" },
  { name: "StrX", logo: "S" }, 
  { name: "PolyG", logo: "P" }, 
  { name: "EthF", logo: "E" },
];

export function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </p>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold" data-testid="text-partners-title">
            Powering Enterprise Web3
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
              data-testid={`logo-partner-${index}`}
            >
              <div className="group flex items-center justify-center w-full h-16 sm:h-20 rounded-xl bg-card border border-border hover-elevate transition-all duration-300 cursor-default">
                <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center">
                    <span className="font-display font-bold text-base sm:text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                      {partner.logo}
                    </span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {partner.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
