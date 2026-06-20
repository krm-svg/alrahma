import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";
import { companyInfo } from "@/data/company";

const galleryImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80",
  "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80",
  "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&q=80",
];

export default function SocialSection() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Follow Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Join Our <span className="gold-text">Community</span></h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-8">Follow us on social media for the latest designs, behind-the-scenes content, and exclusive offers.</p>
          <div className="flex items-center justify-center gap-4">
            <a href={companyInfo.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all"><Instagram className="w-5 h-5" />@alrahma445<ExternalLink className="w-4 h-4 text-white/40" /></a>
            <a href={companyInfo.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook<ExternalLink className="w-4 h-4 text-white/40" /></a>
          </div>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {galleryImages.map((img, index) => (
            <motion.a key={index} href={companyInfo.instagram} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="group relative aspect-square rounded-xl overflow-hidden">
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><Instagram className="w-6 h-6 text-white" /></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
