export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Ahmed Hassan", role: "CEO", company: "Nile Tech Solutions", content: "Al Rahma Furniture transformed our entire office space. The quality of their executive desks and cabinets is unmatched. Their team understood our requirements perfectly and delivered beyond expectations. Highly recommended for any business looking to upgrade their workspace.", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", location: "Cairo, Egypt" },
  { id: "t2", name: "Sarah Mansour", role: "Interior Designer", company: "Mansour Design Studio", content: "As an interior designer, I've worked with many furniture suppliers, but Al Rahma stands out for their attention to detail and craftsmanship. Their custom furniture service is exceptional - they brought my client's vision to life with precision and elegance.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", location: "Alexandria, Egypt" },
  { id: "t3", name: "Mohamed El-Sayed", role: "Operations Manager", company: "Delta Pharmaceuticals", content: "We furnished our new headquarters with Al Rahma and the results are stunning. The standing desks have improved our team's productivity and the storage solutions are both functional and beautiful. Professional service from start to finish.", rating: 5, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", location: "Giza, Egypt" },
  { id: "t4", name: "Nour Ibrahim", role: "Homeowner", company: "", content: "I purchased a sliding wardrobe and storage unit for my new apartment. The quality is fantastic and the installation team was punctual and professional. The furniture looks even better in person than in the photos. Will definitely order again!", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", location: "New Cairo, Egypt" },
  { id: "t5", name: "Karim Fathy", role: "Facilities Director", company: "Cairo Business Park", content: "Managing furniture procurement for a commercial complex is challenging, but Al Rahma made it seamless. Their bulk order handling, consistent quality, and on-time delivery have made them our go-to supplier for all tenant fit-outs.", rating: 4, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80", location: "Cairo, Egypt" },
  { id: "t6", name: "Laila Mahmoud", role: "Clinic Owner", company: "Bright Smile Dental", content: "We needed custom reception and waiting area furniture for our dental clinic. Al Rahma created beautiful, durable pieces that are easy to clean and maintain. Our patients always compliment the modern, welcoming atmosphere.", rating: 5, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80", location: "Mansoura, Egypt" },
];
