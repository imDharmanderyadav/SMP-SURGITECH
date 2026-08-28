import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import ContactPreview from "@/components/ContactPreview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <ProductCategories />
      <WhyChooseUs />
      <CTABanner />
      <ContactPreview />
    </div>
  );
}