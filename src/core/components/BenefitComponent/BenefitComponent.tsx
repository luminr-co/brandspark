import BenefitEntity from "@/core/domain/entities/BenefitEntity";
import { twMerge } from "tailwind-merge";

interface Props {
  benefit: BenefitEntity;
  variant: "left" | "right";
}

export default function BenefitComponent({ benefit, variant }: Props) {
  return (
    <div
      className={twMerge(
        `flex lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between xl:justify-between 2xl:justify-between flex-col-reverse gap-8 items-center mb-14 lg:mb-0 xl:m-0 2xl:mb-0`,
        variant == "right"
          ? "lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse"
          : ""
      )}
    >
      <div className="flex flex-col gap-4 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-3/4">
        <h3 className="lg:text-2xl font-primary font-normal text-lg md:text-xl xl:text-2xl 2xl:text-2xl">
          {benefit.title}
        </h3>
        <p className="lg:text-base font-normal text-left">{benefit.description}</p>
      </div>
      <div className="">{benefit.illustration}</div>
    </div>
  );
}
