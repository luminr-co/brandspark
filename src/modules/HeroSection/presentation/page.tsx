import { LinkButton } from "@/core/components/LinkButton";
import LightningVectorImage from "./assets/LightningVectorImage/LightningVectorImage";
import { ArrowIcon } from "@/core/assets/icons/ArrowIcon";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center pt-20 relative pb-36 lg:pb-60 xl:pb-60 2xl:pb-60">
      <video
        src="/videos/HeroSection/BrandSpark.mp4"
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        autoPlay
        loop
        muted
      />
      <h1 className="font-primary text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center w-10/12 sm:flex md:flex lg:flex xl:flex 2xl:flex flex-row justify-center items-center ">
        Lightning Fast
        <br className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden" />
        <span className="sm:px-6 md:px-6 xl:px-6 lg:px-6 2xl:px-6 px-2 inline-block">
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
        href="#calendly"
        icon={<ArrowIcon />}
        className="p-3 md:p-4 lg:p-5 xl:p-5 2xl:p-5"
      >
        Scale your Business
      </LinkButton>
    </section>
  );
}
