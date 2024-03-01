import { SectionHeader } from "@/core/components/SectionHeader";
import React from "react";
import PackageEntity from "../domain/entities/PackageEntity";
import { PackageList } from "./components/PackageList";
import { LightingAsset } from "@/core/assets/images/LightingAsset";

export default function PackagesSection() {
  const packages: PackageEntity[] = [
    {
      title: "Spark",
      
      price: "$1200",
      points: [
        "15 Short Form Videos",
        "Audio Enhancing",
        "Unlimited Revisions",
      ],
    },

    {
      title: "Lightning",
      
      price: "$2300",
      points: [
        "30 Short Form Videos",
        "Audio Enhancing",
        "Unlimited Revisions",
        "Free Custom Thumbnails",
        
      ],
    },

  ];
  return (
    <section className="mt-36 md:mt-44 lg:mt-48 xl:mt-64 relative">
      <SectionHeader>Flexible Packages for All</SectionHeader>
      <PackageList packages={packages} />
      <div className="absolute -top-20 right-72 w-20 h-28 scale-y-100 rotate-90 scale-x-100">
        <LightingAsset />
      </div>
      <div className="absolute right-[36%] lg:top-14 xl:top-14 2xl:top-14 top-96 mt-7 lg:mt-0 xl:mt-0 2xl:mt-0 w-20 h-32 -rotate-[275deg] -scale-y-100">
        <LightingAsset />
      </div>
    </section>
  );
}
