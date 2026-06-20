import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Star } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Featured Collection</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Our <span className="gold-text">Best Sellers</span></h2>
          </div>
          <Link to="/products" className="group inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors">View All Products<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Link to={`/products/${product.id}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-gold-500/20 transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"><Eye className="w-4 h-4" />Quick View</div>
                    </div>
                    <div className="absolute top-4 left-4"><span className="px-3 py-1 rounded-full bg-black-950/80 backdrop-blur-sm text-xs font-medium text-white/80 border border-white/10">{product.category}</span></div>
                    {product.featured && <div className="absolute top-4 right-4"><span className="px-3 py-1 rounded-full bg-gold-500/90 text-xs font-semibold text-black-950">Featured</span></div>}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-white/40 line-clamp-2 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gold-400">EGP {product.price.toLocaleString()}</span>
                        {product.oldPrice && <span className="text-sm text-white/30 line-through">EGP {product.oldPrice.toLocaleString()}</span>}
                      </div>
                      <div className="flex items-center gap-1"><Star className="w-4 h-4 text-gold-400 fill-gold-400" /><span className="text-sm text-white/60">{product.rating}</span></div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
