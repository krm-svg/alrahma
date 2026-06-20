import { motion } from "framer-motion";
import { Shield, Wrench, Palette, Truck, Tag, Headphones } from "lucide-react";
import { companyInfo } from "@/data/company";

const iconComponents: Record<string, React.ElementType> = { Shield, Wrench, Palette, Truck, Tag, Headphones };

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">The Al Rahma <span className="gold-text">Difference</span></h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">We combine quality craftsmanship, premium materials, and exceptional service to deliver furniture that exceeds expectations.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyInfo.whyChooseUs.map((item, index) => {
            const Icon = iconComponents[item.icon];
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-gold-500/20 hover:bg-white/[0.04] transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-5 group-hover:bg-gold-500/20 transition-colors">
                  {Icon && <Icon className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-4 right-4 w-8 h-px bg-gold-500/30" /><div className="absolute top-4 right-4 w-px h-8 bg-gold-500/30" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
