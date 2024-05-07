import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export default interface BenefitEntity {
  title: string;
  description: string;
  illustration:StaticImport;
}
