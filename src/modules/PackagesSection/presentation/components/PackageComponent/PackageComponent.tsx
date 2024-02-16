import PackageEntity from "@/modules/PackagesSection/domain/entities/PackageEntity";
import { TickIcon } from "../../assets/TickIcon";
import { Button } from "@/core/components/Button";
import { twMerge } from "tailwind-merge";
import { Divider } from "@/core/components/Divider";

interface Props {
  packageCard: PackageEntity;
  borderColor: "yellow" | "white";
}

export default function PackageComponent({ packageCard, borderColor }: Props) {
  return (
    <div
      className={twMerge(
        " border-4 border-yellow p-6 xl:pb-64 2xl:pb-64",
        borderColor == "white" ? "border-white" : ""
      )}
    >
      <h3 className="text-3xl font-primary font-extrabold">
        {packageCard.title}
      </h3>
      <p className="text-sm text-grey">{packageCard.subtitle}</p>
      <p className="text-2xl text-yellow font-extrabold my-2">
        {packageCard.price}
      </p>
      <Divider/>
      <div className="flex flex-col gap-4 my-6">
        {packageCard.points.map((point, index) => (
          <p key={index} className="flex flex-row gap-2">
            <TickIcon /> <span className="text-base ">{point}</span>
          </p>
        ))}
      </div>
      <Button className="font-secondary text-lg w-full p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-3 rounded-lg font-medium ">
    Explore Plan
      </Button>
    </div>
  );
}
