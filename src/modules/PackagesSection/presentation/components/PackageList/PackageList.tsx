import PackageEntity from "@/modules/PackagesSection/domain/entities/PackageEntity";
import { PackageComponent } from "../PackageComponent";

interface Props {
  packages: PackageEntity[];
}
export default function PackageList({ packages }: Props) {
  return (
    <div className=" flex flex-col gap-12 xl:flex-row xl:justify-between w-3/4 2xl:justify-between 2xl:flex-row h-full mx-auto mt-12 lg:mt-20 xl:mt-20 2xl:mt-28">
      <PackageComponent packageCard={packages[0]} borderColor="white" />
      <PackageComponent packageCard={packages[1]} borderColor="yellow" />
      <PackageComponent packageCard={packages[2]} borderColor="white" />
    </div>
  );
}
