import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Check, Phone, ChevronRight, Package, Shield, Truck, RotateCcw, ImageIcon } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { companyInfo } from "@/data/company";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!product) {
    return (
      <main className="min-h-screen bg-black-950 pt-32 pb-20 text-center">
        <Package className="w-16 h-16 text-white/10 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">Product Not Found</h1>
        <p className="text-white/50 mb-6">The product you are looking for does not exist.</p>
        <button onClick={() => navigate("/products")} className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-black-950 font-semibold rounded-xl"><ArrowLeft className="w-4 h-4" />Back to Products</button>
      </main>
    );
  }

  const relatedProducts = getRelatedProducts(product.category, product.id);

  const handleWhatsAppOrder = () => {
    const message = `Hello Al Rahma Furniture! I'm interested in ordering:\n\n*Product:* ${product.name}\n*Price:* EGP ${product.price.toLocaleString()}\n*ID:* ${product.id}\n\nPlease provide more information.`;
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black-950">
      <div className="pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link><ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-gold-400 transition-colors">Products</Link><ChevronRight className="w-4 h-4" />
            <span className="text-white/60">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] cursor-zoom-in mb-4" onClick={() => setIsLightboxOpen(true)}>
                <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 right-4 p-2 rounded-lg bg-black-950/60 backdrop-blur-sm border border-white/10"><ImageIcon className="w-5 h-5 text-white/60" /></div>
                {product.oldPrice && <div className="absolute top-4 left-4"><span className="px-3 py-1.5 rounded-full bg-red-500/90 text-sm font-semibold text-white">Save EGP {(product.oldPrice - product.price).toLocaleString()}</span></div>}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, index) => (
                    <button key={index} onClick={() => setSelectedImage(index)} className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === index ? "border-gold-500" : "border-white/10 hover:border-white/30"}`}>
                      <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col">
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-xs font-medium text-gold-400 uppercase tracking-wider mb-4">{product.category}</span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">{product.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-gold-400 fill-gold-400" : "text-white/10"}`} />))}</div>
                <span className="text-white/50">{product.rating} ({product.reviews} reviews)</span>
              </div>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gold-400">EGP {product.price.toLocaleString()}</span>
                {product.oldPrice && <span className="text-xl text-white/30 line-through">EGP {product.oldPrice.toLocaleString()}</span>}
              </div>
              <p className="text-white/60 leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Features</h3>
                <ul className="space-y-2">{product.features.map((f, i) => (<li key={i} className="flex items-start gap-3 text-white/60"><Check className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" /><span>{f}</span></li>))}</ul>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{Object.entries(product.specs).map(([key, value]) => (<div key={key} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"><div className="text-xs text-white/40 uppercase tracking-wider mb-1">{key}</div><div className="text-sm text-white/80">{value}</div></div>))}</div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[{icon: Truck, label: "Free Delivery"}, {icon: Shield, label: "2-5 Year Warranty"}, {icon: RotateCcw, label: "14-Day Returns"}].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"><item.icon className="w-5 h-5 text-gold-400" /><span className="text-xs text-white/50">{item.label}</span></div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <button onClick={handleWhatsAppOrder} className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl transition-colors"><Phone className="w-5 h-5" />Order on WhatsApp</button>
                <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all">Call to Order</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">You May Also <span className="gold-text">Like</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp, i) => (
                <motion.div key={rp.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                  <Link to={`/products/${rp.id}`} className="group block">
                    <div className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-gold-500/20 transition-all">
                      <div className="aspect-square overflow-hidden"><img src={rp.image} alt={rp.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108" /></div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white group-hover:text-gold-400 transition-colors line-clamp-1">{rp.name}</h3>
                        <p className="text-gold-400 font-bold mt-1">EGP {rp.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setIsLightboxOpen(false)}>
          <button className="absolute top-4 right-4 p-2 text-white/60 hover:text-white" onClick={() => setIsLightboxOpen(false)}><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg></button>
          <img src={product.images[selectedImage]} alt={product.name} className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
