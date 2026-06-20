import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Layers, Box, Settings, CheckCircle, Truck, Phone, Send, Palette, Ruler, Hammer, Sparkles } from "lucide-react";
import { companyInfo } from "@/data/company";

const processSteps = [
  { icon: MessageSquare, step: 1, title: "Design Consultation", description: "Share your vision with our design team. We discuss your requirements, space dimensions, style preferences, and budget to understand exactly what you need." },
  { icon: Palette, step: 2, title: "Material Selection", description: "Choose from our wide range of premium materials, finishes, colors, and hardware options. Our experts guide you to select the best combination." },
  { icon: Ruler, step: 3, title: "3D Visualization", description: "We create detailed 3D renderings of your custom furniture so you can visualize the final product from every angle before manufacturing begins." },
  { icon: Hammer, step: 4, title: "Expert Manufacturing", description: "Our skilled craftsmen bring your design to life using precision tools and time-honored techniques in our state-of-the-art facility." },
  { icon: CheckCircle, step: 5, title: "Quality Inspection", description: "Every piece undergoes rigorous quality control checks to ensure it meets our exacting standards before leaving our workshop." },
  { icon: Truck, step: 6, title: "Delivery & Installation", description: "We carefully deliver and professionally install your furniture, ensuring everything is perfectly positioned before we leave." },
];

const customTypes = [
  { title: "Office Furniture", description: "Custom desks, conference tables, reception counters, and workstation systems tailored to your office layout and brand identity.", icon: Layers },
  { title: "Wardrobes & Closets", description: "Bespoke wardrobe solutions with custom internal configurations, lighting, and finishes to maximize your storage space.", icon: Box },
  { title: "Entertainment Units", description: "Custom TV units, media walls, and display cabinets designed to complement your living space and accommodate your equipment.", icon: Sparkles },
  { title: "Specialty Pieces", description: "One-of-a-kind furniture pieces for unique spaces - from reception desks to display cases and everything in between.", icon: Settings },
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", furnitureType: "", description: "", budget: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-black-950 via-black-950/80 to-black-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-6">Custom Furniture</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Furniture Built <span className="gold-text">Just for You</span></h1>
            <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">From concept to completion, we create bespoke furniture pieces tailored to your exact specifications, space requirements, and design preferences.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Our Process</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">How Custom Furniture <span className="gold-text">Works</span></h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">Our streamlined 6-step process ensures your custom furniture is delivered exactly as envisioned.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-gold-500/20 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400"><step.icon className="w-6 h-6" /></div>
                  <span className="text-3xl font-bold text-white/10">0{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">What We Make</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Custom Furniture <span className="gold-text">Categories</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {customTypes.map((type, index) => (
              <motion.div key={type.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0"><type.icon className="w-7 h-7" /></div>
                <div><h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3><p className="text-sm text-white/50 leading-relaxed">{type.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Request a Quote</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Start Your <span className="gold-text">Custom Project</span></h2>
            <p className="text-lg text-white/50">Tell us about your project and we'll get back to you with a detailed quote within 24 hours.</p>
          </motion.div>
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-12 rounded-2xl bg-gold-500/5 border border-gold-500/20 text-center">
              <CheckCircle className="w-16 h-16 text-gold-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Quote Request Received!</h3>
              <p className="text-white/60 mb-6">Thank you for your interest. Our team will review your requirements and contact you within 24 hours via WhatsApp or phone.</p>
              <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-black-950 font-semibold rounded-xl transition-colors"><Phone className="w-5 h-5" />Chat on WhatsApp</a>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className="block text-sm font-medium text-white/70 mb-2">Full Name *</label><input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50" placeholder="Your name" /></div>
                <div><label className="block text-sm font-medium text-white/70 mb-2">Phone Number *</label><input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50" placeholder="+20 1XX XXX XXXX" /></div>
                <div><label className="block text-sm font-medium text-white/70 mb-2">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50" placeholder="your@email.com" /></div>
                <div><label className="block text-sm font-medium text-white/70 mb-2">Furniture Type</label>
                  <select value={formData.furnitureType} onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500/50 appearance-none">
                    <option value="" className="bg-black-950">Select type...</option><option value="office" className="bg-black-950">Office Furniture</option><option value="wardrobe" className="bg-black-950">Wardrobe / Closet</option><option value="storage" className="bg-black-950">Storage Unit</option><option value="entertainment" className="bg-black-950">Entertainment Unit</option><option value="other" className="bg-black-950">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2"><label className="block text-sm font-medium text-white/70 mb-2">Project Description</label><textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 resize-none" placeholder="Describe your project, dimensions, materials, colors, and any specific requirements..." /></div>
                <div><label className="block text-sm font-medium text-white/70 mb-2">Budget Range (EGP)</label>
                  <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500/50 appearance-none">
                    <option value="" className="bg-black-950">Select budget...</option><option value="5000-10000" className="bg-black-950">5,000 - 10,000</option><option value="10000-25000" className="bg-black-950">10,000 - 25,000</option><option value="25000-50000" className="bg-black-950">25,000 - 50,000</option><option value="50000+" className="bg-black-950">50,000+</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black-950 font-semibold rounded-xl transition-colors"><Send className="w-5 h-5" />Request Quote</button>
                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-colors"><Phone className="w-5 h-5" />Chat on WhatsApp</a>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
