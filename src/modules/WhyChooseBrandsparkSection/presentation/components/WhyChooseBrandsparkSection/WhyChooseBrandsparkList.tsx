import { WhyChooseBrandsparkEntity } from "@/modules/WhyChooseBrandsparkSection/domain/entities/WhyChooseBrandsparkEntity";
import { WhyChooseBrandsparkCard } from "../WhyChooseBrandsparkCard";

interface Props {
  list: WhyChooseBrandsparkEntity[];
}

export default function WhyChooseBrandsparkList({ list }: Props) {
  return (
    <>
      <div>
        <div className="lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 flex flex-col gap-8 lg:w-2/3 xl:w-2/3 2xl:w-2/3 w-3/4 mx-auto">
          {list.map((card, index) => (
            <div key={index} className="">
            <WhyChooseBrandsparkCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
