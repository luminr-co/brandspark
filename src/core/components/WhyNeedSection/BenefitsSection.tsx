import { BenefitComponent } from "@/core/components/BenefitComponent";
import BenefitEntity from "@/core/domain/entities/BenefitEntity";

interface Props {
  benefits: BenefitEntity[];
}

export default function BenefitsSection({ benefits }: Props) {
  return (
    <>
      <div className="lg:hidden xl:hidden 2xl:hidden flex flex-col items-center mt-2">
        {benefits.map((benefit, index) => (
          
          <BenefitComponent benefit={benefit} variant="left" key={index}/>
         
        ))}
      </div>
      <div className="hidden md:hidden lg:flex lg:flex-col lg:gap-20 xl:flex xl:flex-col xl:gap-20 2xl:flex 2xl:flex-col 2xl:gap-20 mt-2 ">
        <BenefitComponent benefit={benefits[0]} variant="left" />
        <BenefitComponent benefit={benefits[1]} variant="right" />
        <BenefitComponent benefit={benefits[2]} variant="left" />
      </div>
    </>
  );
}
