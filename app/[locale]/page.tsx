"use client";
import SocialIcons from "@/components/blocks/case";
import FaqSection  from "@/components/blocks/faq";
import Banner  from "@/components/blocks/banner";
import CardsSection from "@/components/blocks/elements";
import PricingSection from "@/components/blocks/pricing"
import FeaturesSection from "@/components/blocks/hero2"
import FeaturesSectionMain from "@/components/blocks/hero"
import HeroSection from "@/components/blocks/main"
import Socials from "@/components/blocks/socials"
import WhatsApp from "@/components/blocks/what"

export default function HomePage() {



  return (
    <>
    <HeroSection />
    <FeaturesSectionMain  />
    <FeaturesSection  />
    <PricingSection  />
    <CardsSection  />
    <Banner  />
    <FaqSection  />
    <SocialIcons  />
    <Socials />
    <WhatsApp />
    </>
  );
}