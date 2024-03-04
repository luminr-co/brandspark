import { StaticImageData } from "next/image";

export default interface BenefitEntity {
  title: string;
  description: string;
  illustration: StaticImageData;
}
