import { LinkButton } from "@/core/components/LinkButton";
import LightningVectorImage from "./assets/LightningVectorImage/LightningVectorImage";
import { ArrowIcon } from "@/core/assets/icons/ArrowIcon";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center mt-16 pt-1">
      <h1 className="font-primary text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center w-10/12 flex flex-row justify-center items-center">
        <span>Lightning Fast</span>
        <span className="px-6 inline-block">
          <LightningVectorImage />
        </span>
        <span>Edits,</span>
      </h1>
      <p className="text-yellow font-primary text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center">
        Thunderous Impact
      </p>
      <h3 className="mt-6 mb-12 text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-2xl font-medium">
        We transform Raw Footage to Spectacular Stories -
        <span className="block text-center">
          Lightning-Quick Edits, Everlasting Impressions!
        </span>
      </h3>
      <LinkButton
        href=""
        icon={<ArrowIcon />}
        className="p-3 md:p-4 lg:p-5 xl:p-5 2xl:p-5"
      >
        Scale your Business
      </LinkButton>
    </section>
  );
}
