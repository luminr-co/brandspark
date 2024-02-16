import FaqEntity from "@/modules/FaqSection/domain/entities/FaqEntity";
import { FaqComponent } from "../FaqComponent";

interface Props {
  faq: FaqEntity[];
}

export default function FaqList({ faq }: Props) {
  return (
    <div className="flex flex-col gap-6 lg:w-3/5 xl:w-3/5 2xl:w-3/5 w-3/4 mt-7 md:mt-11 lg:mt-16 xl:mt-28 mx-auto">
      {faq.map((faq, index) => (
        <FaqComponent faq={faq} key={index} />
      ))}
    </div>
  );
}
