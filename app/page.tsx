import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TrustBadges from "@/components/TrustBadges";
import PartnersSection from "@/components/PartnersSection";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import ContactPreview from "@/components/ContactPreview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <ProductCategories />
      <TrustBadges />           {/* NEW: Quick trust signals */}
      <FeaturedProducts />       {/* NEW: Direct enquiry CTA */}
      <WhyChooseUs />
      <AwardsSection />          {/* NEW: Credibility boost */}
      <TestimonialsSection />    {/* NEW: Social proof */}
      <CTABanner />
      <ContactPreview />
    </div>
  );
}