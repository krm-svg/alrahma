export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  { id: "f1", question: "What areas in Egypt do you deliver to?", answer: "We deliver to all major cities across Egypt including Cairo, Giza, Alexandria, Mansoura, Tanta, Port Said, Suez, and more. Delivery to New Cairo, 6th of October City, and Sheikh Zayed is available with expedited service. For remote areas, please contact us to confirm delivery options." },
  { id: "f2", question: "How long does delivery take?", answer: "Standard delivery takes 3-5 business days for in-stock items within Greater Cairo and Alexandria. For other governorates, delivery typically takes 5-7 business days. Custom furniture orders require 2-4 weeks for manufacturing plus delivery time." },
  { id: "f3", question: "Do you offer assembly services?", answer: "Yes, professional assembly is included free of charge for all furniture purchases. Our trained technicians will assemble and install your furniture at your location, ensuring everything is properly set up." },
  { id: "f4", question: "What is your warranty policy?", answer: "All our products come with a minimum 2-year warranty against manufacturing defects. Executive and custom furniture includes a 5-year warranty. The warranty covers structural integrity, hardware functionality, and finish quality." },
  { id: "f5", question: "Can I customize furniture dimensions and colors?", answer: "Absolutely! Our custom furniture service allows you to specify dimensions, materials, colors, and finishes to match your exact requirements. Visit our Custom Furniture page to learn more about the process." },
  { id: "f6", question: "What payment methods do you accept?", answer: "We accept multiple payment methods for your convenience: Cash on delivery (COD), Bank transfer, Vodafone Cash, and InstaPay. For corporate orders, we also offer invoice-based payment with net-15 terms for approved business accounts." },
  { id: "f7", question: "What is your return and exchange policy?", answer: "We accept returns within 14 days of delivery for items in original condition and packaging. Custom-made furniture cannot be returned unless there is a manufacturing defect. If you receive a damaged or defective item, please contact us within 48 hours with photos." },
  { id: "f8", question: "How do I care for and maintain my furniture?", answer: "For wood furniture, dust regularly with a soft cloth and clean spills immediately. Avoid direct sunlight and extreme temperatures. Use coasters and placemats to protect surfaces. For metal components, wipe with a damp cloth and dry immediately." },
];
