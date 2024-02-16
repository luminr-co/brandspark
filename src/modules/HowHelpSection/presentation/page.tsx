import { SectionHeader } from "@/core/components/SectionHeader";
import { BenefitsSection } from "@/core/components/WhyNeedSection";
import BenefitEntity from "@/core/domain/entities/BenefitEntity";
import { Illustration1 } from "./assets/Illustration1";
import { Illustration2 } from "./assets/Illustration2";
import { Illustration3 } from "./assets/Illustration3";

export default function HowHelpSection() {
  const benefits: BenefitEntity[] = [
    {
      title: "No More Declining Engagement",
      description:
        "Picture a scenario where your audience not only stops scrolling but starts engaging eagerly with your content. With our short form content expertise, watch your engagement metrics reverse the decline, creating a ripple effect of increased brand interaction.",
      illustration: <Illustration1 />,
    },
    {
      title: "Easily Attract New Customers",
      description:
        "Our tailored short form content acts as a magnetic force, attracting a fresh wave of interest and curiosity. Say goodbye to the struggle of expanding your customer base.",
      illustration: <Illustration2 />,
    },
    {
      title: "Growth and Revenue Skyrockets",
      description:
        "Our strategic approach to short form content ensures that every word contributes to your brand's success. Experience the satisfaction of seeing your investment translate into measurable and substantial results.",
      illustration: <Illustration3 />,
    },
  ];
  return (
    <section className="mt-32 pt-2 lg:mt-64 lg:pt-5 xl:mt-64 xl:pt-5 2xl:mt-64 2xl:pt-5 w-3/4 mx-auto flex flex-col gap-20">
      <SectionHeader>
        How Brand Spark Saves<span className="block">You From All These</span>{" "}
        Headaches
      </SectionHeader>
      <BenefitsSection benefits={benefits} />
    </section>
  );
}
