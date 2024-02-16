import { SectionHeader } from "@/core/components/SectionHeader";
import SuccessStoryEntity from "../domain/entities/SuccessStoryEntity";
import { SuccessStoryList } from "./components/SuccessStoryList";

export default function SuccessStoriesSection() {
  const stories: SuccessStoryEntity[] = [
    {
      story:
        "Quality Content and the Editing is superior to all their competiotions.",
      name: "Mike Dicioccio",
      position: "Founder & President, Social Chameleon",
      video: {
        video: "",
      },
    },
    {
      story:
        "Quality Content and the Editing is superior to all their competiotions.",
      name: "Mike Dicioccio 2",
      position: "Founder & President, Social Chameleon",
      video: {
        video: "",
      },
    },
  ];

  return (
    <section className="mt-36 md:mt-52 lg:mt-60 xl:mt-72 2xl:mt-80">
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
    </section>
  );
}
