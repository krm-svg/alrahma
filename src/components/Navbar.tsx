import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Armchair } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black-950/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <Armchair className="w-5 h-5 lg:w-6 lg:h-6 text-gold-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-base lg:text-lg font-bold tracking-tight text-white">Al <span className="text-gold-400">Rahma</span></span>
                <span className="text-[10px] lg:text-xs text-white/40 -mt-1 tracking-wider uppercase">Furniture</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} to={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${isActive ? "text-gold-400" : "text-white/60 hover:text-white hover:bg-white/5"}`}>
                    {link.label}
                    {isActive && <motion.div layoutId="activeNav" className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold-500 rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="https://wa.me/201119554671" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-black-950 bg-gold-500 hover:bg-gold-400 rounded-xl transition-colors">
                <Phone className="w-4 h-4" />Order via WhatsApp
              </a>
            </div>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-black-950 border-l border-white/5">
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                        <Link to={link.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive ? "bg-gold-500/10 text-gold-400 border border-gold-500/20" : "text-white/70 hover:text-white hover:bg-white/5"}`}>
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a href="https://wa.me/201119554671" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-black-950 bg-gold-500 hover:bg-gold-400 rounded-xl transition-colors">
                    <Phone className="w-4 h-4" />Order via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
