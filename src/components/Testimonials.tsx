import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => newDirection === 1 ? (prev === testimonials.length - 1 ? 0 : prev + 1) : (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);
  useEffect(() => { const timer = setInterval(() => paginate(1), 6000); return () => clearInterval(timer); }, [paginate]);
  const t = testimonials[current];
  const variants = { enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (d: number) => ({ x: d < 0 ? 300 : -300, opacity: 0 }) };
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">What Our <span className="gold-text">Clients Say</span></h2>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ type: "spring", stiffness: 300, damping: 30 }} className="absolute inset-0">
                <div className="h-full p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                  <Quote className="w-10 h-10 text-gold-500/20 mb-6" />
                  <div className="flex items-center gap-1 mb-6"> {[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < t.rating ? "text-gold-400 fill-gold-400" : "text-white/10"}`} />))} </div>
                  <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">&ldquo;{t.content}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/20" />
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-sm text-white/50">{t.role}{t.company && `, ${t.company}`}</div>
                      <div className="text-xs text-white/30 mt-0.5">{t.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => paginate(-1)} className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
            <div className="flex items-center gap-2">{testimonials.map((_, i) => (<button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-gold-500" : "w-2 bg-white/20 hover:bg-white/40"}`} aria-label={`Go to ${i + 1}`} />))}</div>
            <button onClick={() => paginate(1)} className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
