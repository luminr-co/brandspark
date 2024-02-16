import { WhyChooseBrandsparkEntity } from "@/modules/WhyChooseBrandsparkSection/domain/entities/WhyChooseBrandsparkEntity";

interface Props {
  card: WhyChooseBrandsparkEntity;
}

export default function WhyChooseBrandsparkCard({ card }: Props) {
  return (
    <div className="p-8 bg-yellow flex flex-col gap-4 text-black w-full h-full">
      <div className="w-12 h-12 rounded-full bg-blackBackground flex items-center justify-center">{card.icon}</div>
      <h3 className="text-xl xl:text-2xl 2xl:text-2xl font-primary mt-4">
        {card.title}
      </h3>
      <p className="text-sm xl:text-base 2xl:text-base mb-2">{card.description}</p>
    </div>
  );
}
