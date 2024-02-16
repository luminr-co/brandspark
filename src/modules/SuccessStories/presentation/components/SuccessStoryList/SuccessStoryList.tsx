import SuccessStoryEntity from "@/modules/SuccessStories/domain/entities/SuccessStoryEntity";
import { SuccessStoryComponent } from "../SuccessStoryComponent";
import { ArrowLeftIcon } from "@/modules/ReelsSection/presentation/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/modules/ReelsSection/presentation/assets/icons/ArrowRightIcon";

interface Props {
  successStories: SuccessStoryEntity[];
}

export default function SuccessStoryList({ successStories }: Props) {
  return (
    <>
    <div className="overflow-x-hidden">
      <div className="lg:w-2/3 xl:w-2/3 2xl:w-2/3 mx-auto flex flex-row basis-1 overflow-x-scroll no-scrollbar">
        {successStories.map((story, index) => (
          <div className="min-w-[100%]" key={index}>
            <SuccessStoryComponent successStory={story} />
          </div>
        ))}
      </div>
      
    </div>
    <div className="flex flex-row gap-8 mx-auto items-center justify-center mt-10">
    <button>
      <ArrowLeftIcon />
    </button>
    <button>
      <ArrowRightIcon />
    </button>
  </div>
  </>
  );
}