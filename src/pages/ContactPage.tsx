import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black-950 via-black-950/80 to-black-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-6">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Contact <span className="gold-text">Us</span></h1>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">Have a question or ready to start your project? Reach out to us and our team will be happy to assist you.</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{icon: MapPin, title: "Visit Us", content: companyInfo.address, href: null}, {icon: Phone, title: "Call Us", content: companyInfo.phone, href: `tel:${companyInfo.phone}`}, {icon: Mail, title: "Email Us", content: companyInfo.email, href: `mailto:${companyInfo.email}`}, {icon: Clock, title: "Working Hours", content: companyInfo.workingHours, href: null}].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center hover:border-gold-500/20 transition-colors">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-4"><item.icon className="w-6 h-6" /></div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                {item.href ? <a href={item.href} className="text-sm text-white/50 hover:text-gold-400 transition-colors">{item.content}</a> : <p className="text-sm text-white/50">{item.content}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Send Us a <span className="gold-text">Message</span></h2>
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-10 rounded-2xl bg-gold-500/5 border border-gold-500/20 text-center">
                  <CheckCircle className="w-16 h-16 text-gold-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-white/60">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-white/70 mb-2">Full Name *</label><input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50" placeholder="Your name" /></div>
                    <div><label className="block text-sm font-medium text-white/70 mb-2">Email *</label><input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50" placeholder="your@email.com" /></div>
                    <div><label className="block text-sm font-medium text-white/70 mb-2">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50" placeholder="+20 1XX XXX XXXX" /></div>
                    <div><label className="block text-sm font-medium text-white/70 mb-2">Subject</label><input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50" placeholder="How can we help?" /></div>
                  </div>
                  <div className="mt-4"><label className="block text-sm font-medium text-white/70 mb-2">Message *</label><textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 resize-none" placeholder="Tell us about your inquiry..." /></div>
                  <button type="submit" className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black-950 font-semibold rounded-xl transition-colors"><Send className="w-5 h-5" />Send Message</button>
                </form>
              )}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm text-white/50">Follow us:</span>
                <a href={companyInfo.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/30 transition-all" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={companyInfo.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/30 transition-all" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-400 hover:bg-green-500/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Find <span className="gold-text">Us</span></h2>
              <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] aspect-[4/3] relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55206.76248434042!2d31.6392!3d30.0494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457faa7b07c8d23%3A0x9e6a94e!2s10th%20of%20Ramadan%20City!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                  width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Al Rahma Furniture Location" className="absolute inset-0" />
              </div>
              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div><h4 className="font-medium text-white">Industrial Zone</h4><p className="text-sm text-white/50">10th of Ramadan City, Sharqia Governorate, Egypt</p></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
