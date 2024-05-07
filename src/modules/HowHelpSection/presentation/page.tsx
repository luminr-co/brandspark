import { SectionHeader } from "@/core/components/SectionHeader";
import { BenefitsSection } from "@/core/components/WhyNeedSection";
import BenefitEntity from "@/core/domain/entities/BenefitEntity";

import { LightingAsset } from "@/core/assets/images/LightingAsset";
import { Img1, Img2, Img3 } from "./assets";

export default function HowHelpSection() {
  const benefits: BenefitEntity[] = [
    {
      title: "No More Declining Engagement",
      description:
        "Picture a scenario where your audience not only stops scrolling but starts engaging eagerly with your content. With our short form content expertise, watch your engagement metrics reverse the decline, creating a ripple effect of increased brand interaction.",
      illustration: Img1,
    },
    {
      title: "Easily Attract New Customers",
      description:
        "Our tailored short form content acts as a magnetic force, attracting a fresh wave of interest and curiosity. Say goodbye to the struggle of expanding your customer base.",
      illustration: Img2,
    },
    {
      title: "Growth and Revenue Skyrockets",
      description:
        "Our strategic approach to short form content ensures that every word contributes to your brand's success. Experience the satisfaction of seeing your investment translate into measurable and substantial results.",
      illustration: Img3,
    },
  ];
  return (
    <section className="mt-32 pt-2 lg:mt-64 lg:pt-5 xl:mt-64 xl:pt-5 2xl:mt-64 2xl:pt-5 px-2 lg:w-3/4 mx-auto flex flex-col gap-20 relative">
      <SectionHeader>
        How Brand Spark Saves<span className="block">You From All These</span>{" "}
        Headaches
      </SectionHeader>
      <BenefitsSection benefits={benefits} />
      <div className="absolute -top-10 right-28 w-20 h-28 scale-y-100 rotate-90 scale-x-100">
        <LightingAsset />
      </div>
      <div className="absolute w-80  bottom-64 -right-72 lg:-right-[370px] xl:-right-[370px] 2xl:-right-[370px] rotate-[35deg]">
        <LightingAsset />
      </div>
    </section>
  );
}
