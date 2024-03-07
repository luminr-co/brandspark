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

      video: "https://drive.google.com/file/d/1reQjOgm0bRU4oVyaenNlTS7ExdjubMSg/preview",
    },
    {
      story:
        "The Service has been great and the turnaround times are super quick.",
      name: "Cedric Ator",
      position: "Professional Videographer, Phoenix",
      video: "https://drive.google.com/file/d/1BhnBT6Wg7mwhyY9GCRk9_rTOsilGaaA8/preview",
    },
  ];

  return (
    <section className="mt-36 md:mt-52 lg:mt-60 xl:mt-72 2xl:mt-80 relative">
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
      <div className="absolute -top-16 right-64 w-20 h-28 scale-y-100 rotate-90 scale-x-100">
        <LightingAsset />
      </div>
      <div className="absolute -top-40 -left-52 lg:-left-48 xl:-left-48 2xl:-left-48 w-80 h-[449px] rotate-45 ">
        <LightingAsset />
      </div>
      <div className="absolute w-80 h-72 lg:h-[494px] xl:h-[494px] 2xl:h-[494px] -bottom-6 -scale-y-100 -scale-x-100 -rotate-[62deg] lg:-right-44 xl:-right-44 2xl:-right-44 -right-36">
        <LightingAsset />
      </div>
    </section>
  );
}
