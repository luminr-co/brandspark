import { CalendlySection } from "@/modules/CalendlySection/presentation";
import { FaqSection } from "@/modules/FaqSection/presentation";
import { Footer } from "@/modules/Footer/presentation";
import { HeroSection } from "@/modules/HeroSection/presentation";
import { HowHelpSection } from "@/modules/HowHelpSection/presentation";
import { PackagesSection } from "@/modules/PackagesSection/presentation";
import { ReelsSection } from "@/modules/ReelsSection/presentation";
import { SuccessStoriesSection } from "@/modules/SuccessStories/presentation";
import { TestimonialSection } from "@/modules/Testimonials/presentation";
import { WhyChooseBrandsparkSection } from "@/modules/WhyChooseBrandsparkSection/presentation";
import { WhyNeedSection } from "@/modules/WhyNeedSection/presentation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ReelsSection/>
      <WhyNeedSection />
      <HowHelpSection/>
      <SuccessStoriesSection/>
      <WhyChooseBrandsparkSection/>
      <TestimonialSection/>
      <PackagesSection/>
      <FaqSection/>
      <CalendlySection/>
      <Footer/>
    </>
  );
}
