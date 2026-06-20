export interface Product {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  specs: Record<string, string>;
  specsAr: Record<string, string>;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
}

export const categories = [
  { id: "all", name: "All Products", nameAr: "جميع المنتجات" },
  { id: "office-cabinets", name: "Office Cabinets", nameAr: "خزائن مكتبية" },
  { id: "wardrobes", name: "Wardrobes", nameAr: "دواليب" },
  { id: "desks", name: "Desks", nameAr: "مكاتب" },
  { id: "storage", name: "Storage Units", nameAr: "وحدات تخزين" },
  { id: "custom", name: "Custom Furniture", nameAr: "أثاث مخصص" },
];

export const products: Product[] = [
  {
    id: "exec-desk-01",
    name: "Executive Office Desk",
    nameAr: "مكتب تنفيذي فاخر",
    category: "desks",
    categoryAr: "مكاتب",
    price: 12500,
    oldPrice: 15000,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    ],
    description: "Premium executive desk crafted from high-grade engineered wood with a luxurious walnut veneer finish. Features spacious work surface, integrated cable management, and sturdy construction designed for professional environments.",
    descriptionAr: "مكتب تنفيذي فاخر مصنوع من خشب مهندف عالي الجودة بتشطيب قشرة الجوز الفاخرة.",
    features: ["Walnut veneer finish", "Integrated cable management", "Spacious work surface (180cm x 90cm)", "Sturdy metal legs with gold accents", "Scratch-resistant surface", "5-year warranty"],
    featuresAr: ["تشطيب قشرة الجوز", "إدارة كابلات متكاملة", "سطح عمل واسع", "أرجل معدنية متينة بلمسات ذهبية", "سطح مقاوم للخدوش", "ضمان 5 سنوات"],
    specs: { "Dimensions": "180 x 90 x 75 cm", "Material": "Engineered wood with walnut veneer", "Weight": "45 kg", "Assembly": "Professional assembly included" },
    specsAr: { "الأبعاد": "180 x 90 x 75 سم", "الخامة": "خشب مهندف بقشرة الجوز", "الوزن": "45 كجم", "التركيب": "تركيب احترافي شامل" },
    inStock: true, featured: true, rating: 4.9, reviews: 47,
  },
  {
    id: "sliding-wardrobe-01",
    name: "Modern Sliding Wardrobe",
    nameAr: "دولاب منزلق عصري",
    category: "wardrobes",
    categoryAr: "دواليب",
    price: 18500,
    oldPrice: 22000,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    ],
    description: "Contemporary sliding door wardrobe with mirrored panels and ample storage space. Features smooth glide mechanism, adjustable shelves, and hanging rods for organized clothing storage.",
    descriptionAr: "دولاب عصري بأبواب منزلقة وألواح مرآة ومساحة تخزين واسعة.",
    features: ["Sliding mirror doors", "Smooth glide mechanism", "Adjustable shelving system", "Hanging rods included", "Soft-close doors", "Available in multiple colors"],
    featuresAr: ["أبواب مرآة منزلقة", "آلية انزلاق سلسة", "نظام أرفف قابل للتعديل", "قضبان تعليق مشمولة", "أبواب إغلاق هادئ", "متوفر بعدة ألوان"],
    specs: { "Dimensions": "240 x 120 x 60 cm", "Material": "MDF with melamine finish", "Doors": "2 sliding mirror doors", "Interior": "4 shelves, 2 hanging rods" },
    specsAr: { "الأبعاد": "240 x 120 x 60 سم", "الخامة": "MDF بتشطيب ميلامين", "الأبواب": "بابان منزلقان بالمرآة", "الداخلية": "4 أرفف، قضيبان تعليق" },
    inStock: true, featured: true, rating: 4.8, reviews: 63,
  },
  {
    id: "filing-cabinet-01",
    name: "4-Drawer Filing Cabinet",
    nameAr: "خزينة ملفات بـ 4 أدراج",
    category: "office-cabinets",
    categoryAr: "خزائن مكتبية",
    price: 6800,
    oldPrice: 8500,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"],
    description: "Professional 4-drawer filing cabinet with lockable top drawer for secure document storage. Steel construction with powder-coated finish ensures durability and a sleek appearance.",
    descriptionAr: "خزينة ملفات احترافية بـ 4 أدراج مع درج علوي قفل لتخزين آمن للمستندات.",
    features: ["Lockable top drawer", "Smooth ball-bearing slides", "Steel construction", "Powder-coated finish", "Label holders on each drawer", "Anti-tip safety mechanism"],
    featuresAr: ["درج علوي بقفل", "منزلقات كروية سلسة", "بناء فولاذي", "تشطيب مسحوقي", "حاملات ملصقات", "آلية safety مانعة للانقلاب"],
    specs: { "Dimensions": "62 x 46 x 132 cm", "Material": "Cold-rolled steel", "Drawers": "4 (top drawer lockable)", "Weight": "38 kg" },
    specsAr: { "الأبعاد": "62 x 46 x 132 سم", "الخامة": "فولاذ مدرفل على البارد", "الأدراج": "4 (الدرج العلوي بقفل)", "الوزن": "38 كجم" },
    inStock: true, featured: false, rating: 4.7, reviews: 34,
  },
  {
    id: "triple-wardrobe-01",
    name: "Triple Door Wardrobe",
    nameAr: "دولاب ثلاثي الأبواب",
    category: "wardrobes",
    categoryAr: "دواليب",
    price: 14200,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80"],
    description: "Elegant triple-door wardrobe offering generous storage with a combination of hanging space, shelves, and drawers. Classic design meets modern functionality.",
    descriptionAr: "دولاب أنيق بثلاثة أبواب يوفر تخزيناً واسعاً مع مزيج من مساحة التعليق والأرفف والأدراج.",
    features: ["Three hinged doors", "Combination storage layout", "Built-in drawers", "Full-length hanging section", "Top shelf for luggage", "Soft-close hinges"],
    featuresAr: ["ثلاثة أبواب مفصلية", "تخطيط تخزين متنوع", "أدراج مدمجة", "قسم تعليق كامل الطول", "رف علوي للأمتعة", "مفصلات إغلاق هادئ"],
    specs: { "Dimensions": "200 x 150 x 58 cm", "Material": "Solid wood + MDF", "Doors": "3 hinged doors", "Finish": "Matte or gloss options" },
    specsAr: { "الأبعاد": "200 x 150 x 58 سم", "الخامة": "خشب صلب + MDF", "الأبواب": "3 أبواب مفصلية", "التشطيب": "مطفي أو لامع" },
    inStock: true, featured: true, rating: 4.8, reviews: 29,
  },
  {
    id: "foldable-desk-01",
    name: "Space-Saver Foldable Desk",
    nameAr: "مكتب قابل للطي لتوفير المساحة",
    category: "desks",
    categoryAr: "مكاتب",
    price: 3200,
    oldPrice: 4500,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80", "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=80"],
    description: "Smart foldable desk perfect for small spaces and home offices. Folds flat against the wall when not in use, featuring a clean minimalist design with hidden storage compartment.",
    descriptionAr: "مكتب ذكي قابل للطي مثالي للمساحات الصغيرة والمكاتب المنزلية.",
    features: ["Wall-mount foldable design", "Hidden storage compartment", "Space-saving mechanism", "Lightweight yet sturdy", "Easy one-hand operation", "Modern minimalist aesthetic"],
    featuresAr: ["تصميم قابل للطي على الحائط", "جيب تخزين مخفي", "آلية توفير المساحة", "خفيف الوزن ومتين", "تشغيل سهل بيد واحدة", "جمالية عصرية"],
    specs: { "Dimensions": "100 x 60 x 75 cm (open)", "Material": "MDF with metal frame", "Weight": "12 kg", "Mounting": "Wall-mounted included" },
    specsAr: { "الأبعاد": "100 x 60 x 75 سم (مفتوح)", "الخامة": "MDF بإطار معدني", "الوزن": "12 كجم", "التركيب": "تركيب على الحائط شامل" },
    inStock: true, featured: false, rating: 4.6, reviews: 52,
  },
  {
    id: "storage-unit-01",
    name: "Modular Storage System",
    nameAr: "نظام تخزين معياري",
    category: "storage",
    categoryAr: "وحدات تخزين",
    price: 8900,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"],
    description: "Versatile modular storage system that adapts to your needs. Combine cubes, drawers, and shelves in endless configurations for home or office organization.",
    descriptionAr: "نظام تخزين معياري متعدد الاستخدامات يتكيف مع احتياجاتك.",
    features: ["Modular cube design", "Mix-and-match components", "Available with doors or open", "Stackable configuration", "Floor or wall mountable", "Modern aesthetic"],
    featuresAr: ["تصميم مكعب معياري", "مكونات قابلة للمزج", "متوفر بأبواب أو مفتوح", "تكوين قابل للتراص", "قابل للتركيب على الأرض أو الحائط", "جمالية عصرية"],
    specs: { "Base Unit": "40 x 40 x 40 cm", "Material": "MDF with laminate finish", "Max Load": "25 kg per shelf", "Colors": "White, black, walnut, oak" },
    specsAr: { "الوحدة الأساسية": "40 x 40 x 40 سم", "الخامة": "MDF بتشطيب laminate", "الحمولة القصوى": "25 كجم لكل رف", "الألوان": "أبيض، أسود، جوز، بلوط" },
    inStock: true, featured: true, rating: 4.7, reviews: 41,
  },
  {
    id: "exec-cabinet-01",
    name: "Executive Storage Cabinet",
    nameAr: "خزينة تخزين تنفيذية",
    category: "office-cabinets",
    categoryAr: "خزائن مكتبية",
    price: 9500,
    oldPrice: 12000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"],
    description: "Premium executive storage cabinet with glass doors and interior LED lighting. Perfect for displaying awards, books, or storing important documents in style.",
    descriptionAr: "خزينة تخزين تنفيذية فاخرة بأبواب زجاجية وإضاءة LED داخلية.",
    features: ["Tempered glass doors", "Interior LED lighting", "Adjustable glass shelves", "Lockable lower compartment", "Premium wood veneer finish", "Gold-finish handles"],
    featuresAr: ["أبواب زجاج مقسى", "إضاءة LED داخلية", "أرفف زجاجية قابلة للتعديل", "جيب سفلي بقفل", "تشطيب قشرة خشب فاخر", "مقابض بتشطيب ذهبي"],
    specs: { "Dimensions": "120 x 45 x 200 cm", "Material": "MDF with walnut veneer", "Glass Type": "Tempered safety glass", "Lighting": "LED strip, warm white" },
    specsAr: { "الأبعاد": "120 x 45 x 200 سم", "الخامة": "MDF بقشرة الجوز", "نوع الزجاج": "زجاج أمان مقسى", "الإضاءة": "شريط LED أبيض دافئ" },
    inStock: true, featured: true, rating: 4.9, reviews: 22,
  },
  {
    id: "double-wardrobe-01",
    name: "Classic Double Door Wardrobe",
    nameAr: "دولاب كلاسيكي ببابين",
    category: "wardrobes",
    categoryAr: "دواليب",
    price: 9800,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80", "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80"],
    description: "Timeless double-door wardrobe with elegant paneling and chrome handles. Features ample hanging space, a shoe rack, and upper storage shelf.",
    descriptionAr: "دولاب كلاسيكي ببابين بتفاصيل أنيقة ومقابض كروم.",
    features: ["Classic paneled doors", "Chrome-finish handles", "Built-in shoe rack", "Upper storage shelf", "Full-width hanging rod", "Adjustable feet"],
    featuresAr: ["أبواب كلاسيكية بتفاصيل", "مقابض بتشطيف كروم", "حامل أحذية مدمج", "رف تخزين علوي", "قضيب تعليق بعرض كامل", "أقدام قابلة للتعديل"],
    specs: { "Dimensions": "200 x 100 x 55 cm", "Material": "MDF with laminate", "Doors": "2 hinged doors", "Interior": "1 shelf, 1 rod, shoe rack" },
    specsAr: { "الأبعاد": "200 x 100 x 55 سم", "الخامة": "MDF بتشطيب laminate", "الأبواب": "بابان مفصليان", "الداخلية": "1 رف، 1 قضيب، حامل أحذية" },
    inStock: true, featured: false, rating: 4.6, reviews: 38,
  },
  {
    id: "single-wardrobe-01",
    name: "Compact Single Door Wardrobe",
    nameAr: "دولاب مدمج بباب واحد",
    category: "wardrobes",
    categoryAr: "دواليب",
    price: 4500,
    oldPrice: 5800,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"],
    description: "Compact single-door wardrobe ideal for guest rooms, children's rooms, or small apartments. Efficient interior layout maximizes storage in minimal footprint.",
    descriptionAr: "دولاب مدمج بباب واحد مثالي لغرف الضيوف وغرف الأطفال أو الشقق الصغيرة.",
    features: ["Compact footprint", "Single mirrored door", "Internal shelving", "Hanging rod included", "Bottom drawer", "Easy to assemble"],
    featuresAr: ["مساحة صغيرة", "باب واحد بالمرآة", "أرفف داخلية", "قضيب تعليق مشمول", "درج سفلي", "سهل التجميع"],
    specs: { "Dimensions": "180 x 60 x 50 cm", "Material": "MDF with melamine", "Weight": "28 kg", "Assembly": "DIY-friendly" },
    specsAr: { "الأبعاد": "180 x 60 x 50 سم", "الخامة": "MDF بميلامين", "الوزن": "28 كجم", "التجميع": "سهل DIY" },
    inStock: true, featured: false, rating: 4.5, reviews: 67,
  },
  {
    id: "standing-desk-01",
    name: "Electric Standing Desk",
    nameAr: "مكتب كهربائي قابل للتعديل",
    category: "desks",
    categoryAr: "مكاتب",
    price: 15800,
    oldPrice: 19500,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80", "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80"],
    description: "Electric height-adjustable standing desk with dual motors for smooth, quiet operation. Programmable memory settings let you switch between sitting and standing positions effortlessly.",
    descriptionAr: "مكتب كهربائي قابل لتعديل الارتفاع بمحركين مزدوجين لتشغيل سلس وهادئ.",
    features: ["Dual-motor electric lift", "Programmable memory positions", "Height range: 70-120 cm", "Anti-collision technology", "Cable management tray", "Weight capacity: 120 kg"],
    featuresAr: ["رفع كهربائي بمحركين", "وضعيات ذاكرة قابلة للبرمجة", "نطاق الارتفاع: 70-120 سم", "تقنية مضادة للتصادم", "صينية إدارة الكابلات", "سعة الحمل: 120 كجم"],
    specs: { "Dimensions": "160 x 80 cm (desktop)", "Height Range": "70 - 120 cm", "Material": "Engineered wood + steel frame", "Load Capacity": "120 kg" },
    specsAr: { "الأبعاد": "160 x 80 سم (سطح المكتب)", "نطاق الارتفاع": "70 - 120 سم", "الخامة": "خشب مهندف + إطار فولاذي", "سعة الحمل": "120 كجم" },
    inStock: true, featured: true, rating: 4.9, reviews: 31,
  },
  {
    id: "bookshelf-01",
    name: "Modern Bookshelf Unit",
    nameAr: "وحدة رفوف كتب عصرية",
    category: "storage",
    categoryAr: "وحدات تخزين",
    price: 5600,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80", "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"],
    description: "Contemporary bookshelf with geometric design and asymmetrical compartments. Perfect for books, decor, and display items in living rooms or offices.",
    descriptionAr: "رف كتب عصري بتصميم هندسي وأقسام غير متماثلة.",
    features: ["Geometric asymmetrical design", "5 open compartments", "Wall-anchoring included", "Easy to clean surfaces", "Modern minimalist look", "Sturdy construction"],
    featuresAr: ["تصميم هندسي غير متماثل", "5 أقسام مفتوحة", "تثبيت على الحائط شامل", "أسطح سهلة التنظيف", "مظهر عصري", "بناء متين"],
    specs: { "Dimensions": "120 x 30 x 180 cm", "Material": "MDF with laminate finish", "Shelves": "5 open compartments", "Max Load": "20 kg per shelf" },
    specsAr: { "الأبعاد": "120 x 30 x 180 سم", "الخامة": "MDF بتشطيب laminate", "الرفوف": "5 أقسام مفتوحة", "الحمولة القصوى": "20 كجم لكل رف" },
    inStock: true, featured: false, rating: 4.6, reviews: 45,
  },
  {
    id: "custom-boardroom-01",
    name: "Custom Boardroom Table",
    nameAr: "طاولة اجتماعات مخصصة",
    category: "custom",
    categoryAr: "أثاث مخصص",
    price: 35000,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"],
    description: "Bespoke boardroom table handcrafted to your specifications. Choose your wood, finish, size, and features. The ultimate statement piece for executive meeting rooms.",
    descriptionAr: "طاولة اجتماعات مخصصة مصنوعة يدوياً حسب مواصفاتك.",
    features: ["Fully customizable design", "Premium hardwood options", "Integrated power modules", "Cable management system", "Custom dimensions available", "White-glove delivery"],
    featuresAr: ["تصميم قابل للتخصيص بالكامل", "خيارات خشب صلب فاخر", "وحدات طاقة مدمجة", "نظام إدارة كابلات", "أبعاد مخصصة متاحة", "توصيل vip"],
    specs: { "Standard Size": "300 x 120 x 75 cm", "Material": "Solid hardwood (customizable)", "Finish": "Custom stain/lacquer", "Delivery": "4-6 weeks custom order" },
    specsAr: { "الحجم القياسي": "300 x 120 x 75 سم", "الخامة": "خشب صلب (قابل للتخصيص)", "التشطيب": "صباغة/لكر مخصص", "التوصيل": "4-6 أسابيع طلب مخصص" },
    inStock: true, featured: true, rating: 5.0, reviews: 8,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(category: string, currentId: string): Product[] {
  return products.filter((p) => p.category === category && p.id !== currentId).slice(0, 4);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
