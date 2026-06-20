import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Package, Award, Users2 } from "lucide-react";
import { companyInfo } from "@/data/company";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const iconMap: Record<string, React.ReactNode> = {
  "Happy Customers": <Users className="w-6 h-6" />,
  "Products Delivered": <Package className="w-6 h-6" />,
  "Years of Experience": <Award className="w-6 h-6" />,
  "Team Members": <Users2 className="w-6 h-6" />,
};

function StatItem({ stat, index }: { stat: typeof companyInfo.stats[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { count, setIsActive } = useCountUp(stat.value, 2000);
  useEffect(() => { if (isVisible) setIsActive(true); }, [isVisible, setIsActive]);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-4">{iconMap[stat.label]}</div>
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{count.toLocaleString()}<span className="text-gold-400">{stat.suffix}</span></div>
      <div className="text-sm text-white/50">{stat.label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black-950 via-black-900/50 to-black-950" />
      <div className="absolute inset-0 opacity-30"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-3xl" /></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {companyInfo.stats.map((stat, index) => (<StatItem key={stat.label} stat={stat} index={index} />))}
        </div>
      </div>
    </section>
  );
}
