import { SectionHeader } from "@/core/components/SectionHeader";
import SuccessStoryEntity from "../domain/entities/SuccessStoryEntity";
import { SuccessStoryList } from "./components/SuccessStoryList";
import { LightingAsset } from "@/core/assets/images/LightingAsset";

export default function SuccessStoriesSection() {
  const stories: SuccessStoryEntity[] = [
    {
      story:
        "Quality Content and the Editing is superior to all their competiotions.",
      name: "Mike Dicioccio",
      position: "Founder & President, Social Chameleon",

      video:
        "https://www.dropbox.com/scl/fi/54cnn6ltcw4bnd51vsulm/Mike-Dicioccio.mp4?rlkey=1x8r8226lsnrpqmp8htedo25l&dl=0&raw=1",
    },
    {
      story:
        "The Service has been great and the turnaround times are super quick.",
      name: "Cedric Ator",
      position: "Professional Videographer, Phoenix",
      video:
        "https://www.dropbox.com/scl/fi/w9e7nwpt52v5hse8b02x2/Cedric-Testimonial.mp4?rlkey=s72vg8bdchmnav9rqdomfimme&dl=0&raw=1",
    },
  ];

  return (
    <section className="mt-32 pt-2 lg:mt-64 lg:pt-5 xl:mt-64 xl:pt-5 2xl:mt-64 2xl:pt-5 px-2 lg:w-3/4 mx-auto flex flex-col gap-20 relative">
      <div className="z-10">
        <SectionHeader>
          <h3 className="lg:px-48 xl:px-56 2xl:px-72 mb-12">
            Success Stories From{" "}
            <span className="block lg:inline-block xl:inline-block 2xl:inline-block">
              {" "}
              Our Clients
            </span>
          </h3>
        </SectionHeader>
        <SuccessStoryList successStories={stories} />
      </div>
      <div className="z-0">
        <div className="absolute -top-16 right-64 w-20 h-28 scale-y-100 rotate-90 scale-x-100">
          <LightingAsset />
        </div>
        <div className="absolute -top-40 -left-52 lg:-left-48 xl:-left-48 2xl:-left-48 w-80 h-[449px] rotate-45 ">
          <LightingAsset />
        </div>
        <div className="absolute w-80 h-72 lg:h-[494px] xl:h-[494px] 2xl:h-[494px] -bottom-6 -scale-y-100 -scale-x-100 -rotate-[62deg] lg:-right-44 xl:-right-44 2xl:-right-44 -right-36">
          <LightingAsset />
        </div>
      </div>
    </section>
  );
}
