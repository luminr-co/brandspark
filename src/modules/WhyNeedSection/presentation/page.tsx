import BenefitEntity from "@/core/domain/entities/BenefitEntity";
// import Illustration1 from "./assets/Illustration1/Illustration1";
import { Illustration2 } from "./assets/Illustration2";
import { Illustration3 } from "./assets/Illustration3";
import { BenefitsSection } from "@/core/components/WhyNeedSection";
import { SectionHeader } from "@/core/components/SectionHeader";

export default function WhyNeedSection() {
  const benefits: BenefitEntity[] = [
    {
      title: "You Are Losing the Battle for Attention",
      description:
        "Every scroll past your content feels like a missed opportunity, leaving you wondering if your brand will ever break through the relentless noise.",
      illustration: <Illustration2 />,
    },
    {
      title: "Your Content is Sinking in the Sea of Similarity",
      description:
        "If your content doesn't stand out, it becomes just another drop in the vast ocean of online information. Your uniqueness gets lost, and your brand risks becoming indistinguishable from the competition.",
      illustration: <Illustration2 />,
    },
    {
      title:
        "You Are Spending Multiple Figures on Marketing, but Getting No Results",
      description:
        "If your content doesn't stand out, it becomes just another drop in the vast ocean of online information. Your uniqueness gets lost, and your brand risks becoming indistinguishable from the competition.",
      illustration: <Illustration3 />,
    },
  ];

  return (
    <section className="mt-32 pt-2 lg:mt-64 lg:pt-5 xl:mt-64 xl:pt-5 2xl:mt-64 2xl:pt-5 w-3/4 mx-auto flex flex-col gap-20">
      <SectionHeader>
        Why You Need a Short<span className="block">Form Content Agency</span>
      </SectionHeader>
      <BenefitsSection benefits={benefits} />
    </section>
  );
}
