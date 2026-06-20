import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black-950 via-black-950/90 to-black-950/70" />
          </div>
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-6">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Transform Your <span className="gold-text">Space?</span></h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">Whether you need a single piece or a complete office fit-out, our team is ready to help you create the perfect environment.</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black-950 font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-gold-500/20"><Phone className="w-5 h-5" />Chat on WhatsApp</a>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all">Contact Us<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
