import { SectionHeader } from "@/core/components/SectionHeader";
import { CalendlyComponent } from "./components/CalendlyComponent";
import { LightingAsset } from "@/core/assets/images/LightingAsset";

export default function CalendlySection() {
  return (
    <section
      className="relative mt-36 md:mt-44 lg:mt-64 xl:mt-64 2xl:mt-64 no-scrollbar"
      id="calendly"
    >
      <div className="z-10">
        <SectionHeader>
          <p className="w-4/5 mx-auto mb-16">
            Scale Your Business With Brandspark
          </p>
        </SectionHeader>

        <CalendlyComponent />
      </div>

      <div className="z-0">
        <div className="absolute -top-16 right-72 w-20 h-28 scale-y-100 rotate-90 scale-x-100">
          <LightingAsset />
        </div>
        <div className="absolute top-20 -left-60 lg:-left-48 xl:-left-48 2xl:-left-48 w-80 h-[449px] rotate-45 ">
          <LightingAsset />
        </div>
      </div>
    </section>
  );
}
