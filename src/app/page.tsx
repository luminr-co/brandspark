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
import bgImage from "@/core/assets/images/brandspark_bg.png";
import Image from "next/image";
import { px } from "framer-motion";
import { CompanyCaroselSection } from "@/modules/CompanyCaroselSection";

export default function Home() {
  return (
    <section className="overflow-x-hidden relative" >
      {/* <Image
      src={bgImage}
        width={650}
        height={3000}
        alt=""
        className="w-full h-screen bg-cover absolute top-0 left-0 right-0 bottom-0 -z-30"
      />  */}
      <HeroSection />
      <CompanyCaroselSection/>
      <ReelsSection />
      <WhyNeedSection />
      <HowHelpSection />
      <SuccessStoriesSection />
      <WhyChooseBrandsparkSection />
      <TestimonialSection />
      <PackagesSection />
      <CalendlySection />
      <FaqSection />
      <Footer />
    </section>
  );
}
