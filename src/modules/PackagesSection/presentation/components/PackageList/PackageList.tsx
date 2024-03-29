import PackageEntity from "@/modules/PackagesSection/domain/entities/PackageEntity";
import { PackageComponent } from "../PackageComponent";
import SingleSampleEditComponent, {
  SingleSampleEditProps,
} from "../SingleSampleEditComponent/SingleSampleEditComponent";

interface Props {
  packages: PackageEntity[];
}
export default function PackageList({ packages }: Props) {
  const lastpackage: SingleSampleEditProps = {
    title: "Single Sample Edit",
    price: "$100/reel",
  };
  return (
    <div className="flex justify-center flex-col w-full">
      <div className="flex flex-col gap-12 xl:flex-row xl:justify-center w-3/4 2xl:flex-row h-full mx-auto mt-12 lg:mt-20 xl:mt-20 2xl:mt-28 max-w-[700px]">
        <PackageComponent packageCard={packages[0]} borderColor="white" />
        <PackageComponent packageCard={packages[1]} borderColor="yellow" />
      </div>
      <div className="mt-12 w-3/4 mx-auto max-w-[700px]">
        <SingleSampleEditComponent
          title={lastpackage.title}
          price={lastpackage.price}
        />
      </div>
    </div>
  );
}
