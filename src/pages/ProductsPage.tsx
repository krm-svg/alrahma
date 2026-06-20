import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Eye, Star, Grid3X3, LayoutList } from "lucide-react";
import { products, categories, getProductsByCategory, type Product } from "@/data/products";

type SortOption = "default" | "price-low" | "price-high" | "rating" | "name";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-gold-500/20 transition-all duration-300">
        <div className="relative aspect-square overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"><Eye className="w-4 h-4" />Quick View</div>
          </div>
          {product.oldPrice && <div className="absolute top-3 left-3"><span className="px-2.5 py-1 rounded-full bg-red-500/90 text-xs font-semibold text-white">Sale</span></div>}
          {product.featured && <div className="absolute top-3 right-3"><span className="px-2.5 py-1 rounded-full bg-gold-500/90 text-xs font-semibold text-black-950">Featured</span></div>}
        </div>
        <div className="p-4">
          <span className="text-xs text-gold-400 font-medium uppercase tracking-wider">{product.category}</span>
          <h3 className="text-base font-semibold text-white mt-1 mb-1 group-hover:text-gold-400 transition-colors line-clamp-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gold-400">EGP {product.price.toLocaleString()}</span>
              {product.oldPrice && <span className="text-sm text-white/30 line-through">EGP {product.oldPrice.toLocaleString()}</span>}
            </div>
            <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" /><span className="text-xs text-white/50">{product.rating}</span></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProductListItem({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.id}`} className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-gold-500/20 transition-all duration-300">
      <div className="relative w-full sm:w-48 h-48 sm:h-36 rounded-xl overflow-hidden shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108" />
        {product.oldPrice && <div className="absolute top-2 left-2"><span className="px-2 py-0.5 rounded-full bg-red-500/90 text-xs font-semibold text-white">Sale</span></div>}
      </div>
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <span className="text-xs text-gold-400 font-medium uppercase tracking-wider">{product.category}</span>
          <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-gold-400 transition-colors">{product.name}</h3>
          <p className="text-sm text-white/40 line-clamp-2 mt-1">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gold-400">EGP {product.price.toLocaleString()}</span>
            {product.oldPrice && <span className="text-sm text-white/30 line-through">EGP {product.oldPrice.toLocaleString()}</span>}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1"><Star className="w-4 h-4 text-gold-400 fill-gold-400" /><span className="text-sm text-white/50">{product.rating} ({product.reviews})</span></div>
            <span className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-medium text-gold-400 group-hover:bg-gold-500 group-hover:text-black-950 transition-colors">View Details</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredProducts = useMemo(() => {
    let result = selectedCategory === "all" ? [...products] : getProductsByCategory(selectedCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    switch (sortBy) {
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "name": result.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <main className="min-h-screen bg-black-950 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-sm font-medium text-gold-400 mb-4">Our Catalog</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">All <span className="gold-text">Products</span></h1>
          <p className="text-lg text-white/50 max-w-2xl mb-8">Browse our complete collection of premium furniture. Use filters to find exactly what you need.</p>
        </motion.div>

        <div className="sticky top-16 lg:top-20 z-30 bg-black-950/95 backdrop-blur-xl border-b border-white/5 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 py-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 transition-all" />
              {searchQuery && <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"><X className="w-4 h-4" /></button>}
            </div>
            <div className="flex items-center gap-3">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="appearance-none px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-500/50 cursor-pointer pr-8">
                <option value="default">Sort by</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="rating">Highest Rated</option><option value="name">Name A-Z</option>
              </select>
              <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
                <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-gold-500/20 text-gold-400" : "text-white/40 hover:text-white"}`} aria-label="Grid"><Grid3X3 className="w-4 h-4" /></button>
                <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-gold-500/20 text-gold-400" : "text-white/40 hover:text-white"}`} aria-label="List"><LayoutList className="w-4 h-4" /></button>
              </div>
              <button onClick={() => setShowFilters(!showFilters)} className="sm:hidden p-2.5 bg-white/5 border border-white/10 rounded-xl text-white/60 text-sm">Filters</button>
            </div>
          </div>
          <div className={`flex flex-wrap gap-2 pb-4 ${showFilters ? "" : "hidden sm:flex"}`}>
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === cat.id ? "bg-gold-500 text-black-950" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"}`}>{cat.name}</button>
            ))}
          </div>
        </div>

        <p className="text-sm text-white/40 mb-6">Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}</p>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20"><Search className="w-16 h-16 text-white/10 mx-auto mb-4" /><h3 className="text-xl font-semibold text-white mb-2">No products found</h3><p className="text-white/50">Try adjusting your search or filters</p></div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">{filteredProducts.map((product, index) => (
              <motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: index * 0.05 }}><ProductCard product={product} /></motion.div>
            ))}</AnimatePresence>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">{filteredProducts.map((product, index) => (
              <motion.div key={product.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, delay: index * 0.05 }}><ProductListItem product={product} /></motion.div>
            ))}</AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}
