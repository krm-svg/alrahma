import { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import { companyInfo } from "@/data/company";
import Stats from "@/components/Stats";
import ContactCTA from "@/components/ContactCTA";

const values = [
  { icon: Target, title: "Our Mission", description: "To provide Egyptian homes and businesses with world-class furniture that combines functionality, durability, and timeless elegance at competitive prices." },
  { icon: Eye, title: "Our Vision", description: "To become Egypt's most trusted furniture brand, recognized for exceptional craftsmanship, innovative design, and unwavering commitment to customer satisfaction." },
  { icon: Heart, title: "Our Values", description: "We believe in honesty, quality, and putting our customers first. Every piece we create reflects our dedication to excellence and our passion for beautiful spaces." },
];

const milestones = [
  { year: "2009", title: "Founded", description: "Al Rahma Furniture established in 10th of Ramadan City" },
  { year: "2012", title: "Expansion", description: "Opened second production facility to meet growing demand" },
  { year: "2015", title: "Custom Division", description: "Launched bespoke furniture design and manufacturing service" },
  { year: "2018", title: "Digital Presence", description: "Expanded to online catalog and social media engagement" },
  { year: "2022", title: "5,000+ Clients", description: "Served over 5,000 satisfied customers across Egypt" },
  { year: "2024", title: "Innovation", description: "Introduced smart furniture and standing desk solutions" },
];

const team = [
  { name: "Mohamed Hassan", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Ahmed Khalil", role: "Head of Design", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sarah Mansour", role: "Production Manager", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Omar Fathy", role: "Sales Director", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black-950 via-black-950/80 to-black-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-6">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Crafting Excellence <br /><span className="gold-text">Since 2009</span></h1>
            <p className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">{companyInfo.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" alt="" className="rounded-2xl w-full h-64 object-cover" />
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80" alt="" className="rounded-2xl w-full h-64 object-cover mt-8" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Built on a Foundation of <span className="gold-text">Quality & Trust</span></h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>Al Rahma Furniture began as a small workshop in 10th of Ramadan City with a simple mission: to create furniture that Egyptians could be proud of. What started as a modest operation has grown into one of Egypt's most respected furniture manufacturers.</p>
                <p>Over the years, we have invested in modern machinery while preserving the artisanal skills that make our furniture special. Our team of 80+ skilled craftsmen combines traditional woodworking techniques with precision manufacturing to deliver products that meet international quality standards.</p>
                <p>Today, we serve thousands of clients across Egypt - from individual homeowners to large corporations, hotels, and government institutions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Our Principles</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Mission, Vision & <span className="gold-text">Values</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-400 mb-6"><v.icon className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-white/50 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Key <span className="gold-text">Milestones</span></h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gold-500/20 sm:-translate-x-px" />
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 mb-12 last:mb-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-gold-500 border-4 border-black-950 -translate-x-1.5 mt-2" />
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-bold text-gold-400 mb-2">{m.year}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{m.title}</h3>
                  <p className="text-sm text-white/50">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Our Team</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Meet the <span className="gold-text">Experts</span></h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">Our dedicated team of professionals brings together decades of experience in furniture design, manufacturing, and customer service.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold-500/20 hover:border-gold-500/50 transition-colors">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-white">{m.name}</h3>
                <p className="text-sm text-white/50">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
