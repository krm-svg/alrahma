import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "office-cabinets", name: "Office Cabinets", description: "Professional storage solutions for modern workspaces", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80", count: 12 },
  { id: "wardrobes", name: "Wardrobes", description: "Elegant wardrobes in single, double, triple & sliding designs", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80", count: 18 },
  { id: "desks", name: "Office Desks", description: "Executive desks, standing desks & space-saving foldable options", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80", count: 15 },
  { id: "storage", name: "Storage Units", description: "Modular systems, bookshelves & organizational furniture", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80", count: 10 },
];

export default function CategoryCards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Browse Categories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Explore Our <span className="gold-text">Collections</span></h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">From executive offices to modern homes, find the perfect furniture for every space.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div key={category.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Link to={`/products?category=${category.id}`} className="group block relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={category.image} alt={category.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-black-950/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 text-xs font-medium text-gold-300 mb-3">{category.count} Products</span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">{category.name}</h3>
                  <p className="text-sm text-white/60 line-clamp-2 mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-gold-400 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    View Collection<ArrowRight className="w-4 h-4" />
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
