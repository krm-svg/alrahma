import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left" aria-expanded={isOpen}>
        <span className="text-base sm:text-lg font-medium text-white pr-4">{faq.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0"><ChevronDown className="w-5 h-5 text-gold-400" /></motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
              <div className="h-px bg-white/5 mb-4" />
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked <span className="gold-text">Questions</span></h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Find answers to common questions about our products, services, and policies.</p>
        </motion.div>
        <div className="flex flex-col gap-3">{faqs.map((faq, index) => (<FAQItem key={faq.id} faq={faq} index={index} />))}</div>
      </div>
    </section>
  );
}
