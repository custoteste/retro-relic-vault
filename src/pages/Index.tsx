import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DeliverySection from "@/components/DeliverySection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import SocialProofPopup from "@/components/SocialProofPopup";

const Index = () => (
  <div className="min-h-screen">
    <SocialProofPopup />
    <HeroSection />
    <BenefitsSection />
    <GallerySection />
    <TestimonialsSection />
    <DeliverySection />
    <PricingSection />
    <GuaranteeSection />
    <FAQSection />
    <FooterSection />
  </div>
);

export default Index;
