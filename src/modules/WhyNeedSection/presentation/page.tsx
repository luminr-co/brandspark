import BenefitEntity from "@/core/domain/entities/BenefitEntity";
import img1 from "./assets/p1.png";
import img2 from "./assets/p2.png";
import img3 from "./assets/p3.png";
import { BenefitsSection } from "@/core/components/WhyNeedSection";
import { SectionHeader } from "@/core/components/SectionHeader";
import { LightingAsset } from "@/core/assets/images/LightingAsset";

export default function WhyNeedSection() {
  const benefits: BenefitEntity[] = [
    {
      title: "You Are Losing the Battle for Attention",
      description:
        "Every scroll past your content feels like a missed opportunity, leaving you wondering if your brand will ever break through the relentless noise.",
      illustration: img1,
    },
    {
      title: "Your Content is Sinking in the Sea of Similarity",
      description:
        "If your content doesn't stand out, it becomes just another drop in the vast ocean of online information. Your uniqueness gets lost, and your brand risks becoming indistinguishable from the competition.",
      illustration: img2,
    },
    {
      title:
        "You Are Spending Multiple Figures on Marketing, but Getting No Results",
      description:
        "If your content doesn't stand out, it becomes just another drop in the vast ocean of online information. Your uniqueness gets lost, and your brand risks becoming indistinguishable from the competition.",
      illustration: img3,
    },
  ];

  return (
    <>
      <section className="mt-32 pt-2 lg:mt-64 lg:pt-5 xl:mt-64 xl:pt-5 2xl:mt-64 2xl:pt-5 lg:w-3/4 px-2 mx-auto flex flex-col gap-20 relative ">
        <SectionHeader>
          Why You Need a Short<span className="block">Form Content Agency</span>
        </SectionHeader>
        <BenefitsSection benefits={benefits} />
        <div className="w-80 h-96 absolute -top-32 lg:-left-80 xl:-left-80 2xl:-left-80 -left-72 -scale-x-100 -rotate-12">
          <LightingAsset />
        </div>
        <div className="absolute -top-10 right-28 w-20 h-28 scale-y-100 rotate-90 scale-x-100">
          <LightingAsset />
        </div>
        <div className="absolute w-80 h-96 top-80 -right-96 rotate-12">
          <LightingAsset />
        </div>
        <div className="absolute w-80 h-96 -bottom-10 rotate-90 lg:-left-96 xl:-left-96 2xl:-left-96 -left-80">
          <LightingAsset />
        </div>
        <div className="absolute w-80 h-96 -bottom-20 -scale-x-100 rotate-12 lg:-right-[344px] xl:-right-[344px] 2xl:-right-[344px] -right-72">
          <LightingAsset />
        </div>
      </section>
    </>
  );
}
