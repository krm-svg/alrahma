import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import CategoryCards from "@/components/CategoryCards";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import SocialSection from "@/components/SocialSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <CategoryCards />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <SocialSection />
    </>
  );
}
