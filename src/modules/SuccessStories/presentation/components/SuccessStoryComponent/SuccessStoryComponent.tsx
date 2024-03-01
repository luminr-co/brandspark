import SuccessStoryEntity from "@/modules/SuccessStories/domain/entities/SuccessStoryEntity";
import { QuotationMarkIcon } from "../../assets/icons/QuotationMarkIcon";
import { ReelComponent } from "@/core/components/ReelComponent";

interface Props {
  successStory: SuccessStoryEntity;
  
}

export default function SuccessStoryComponent({ successStory }: Props) {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between xl:justify-between 2xl:justify-between items-center justify-center gap-11 ">
      <ReelComponent reel={successStory.video} />
      <div className="flex flex-col gap-12 items-center lg:items-start xl:items-start 2xl:items-start">
        <QuotationMarkIcon />
        <div className="w-3/4 lg:w-full xl:w-full 2xl:w-full ">
          <p className="text-base xl:text-xl 2xl:text-xl font-primary">
            {successStory.story}
          </p>
          <div className="lg:mt-16 xl:mt-16 2xl:mt-16 mt-11">
            <p className="text-base xl:text-xl 2xl:text-xl font-bold">
              {successStory.name}
            </p>
            <p className="text-sm xl:text-base 2xl:text-base">
              {successStory.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
