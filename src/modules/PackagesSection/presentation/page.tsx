import { SectionHeader } from "@/core/components/SectionHeader";
import React from "react";
import PackageEntity from "../domain/entities/PackageEntity";
import { PackageList } from "./components/PackageList";

export default function PackagesSection() {
  const packages: PackageEntity[] = [
    {
      title: "Lorem",
      subtitle:
        "Great for brands that are just launching with limited capital and low time.",
      price: "$1200",
      points: [
        "Lorem Ipsum dolor amit set.",
        "Lorem Ipsum dolor amit set.",
        "Lorem Ipsum dolor amit set.",
      ],
    },

    {
      title: "Lorem",
      subtitle:
        "Great for brands that are just launching with limited capital and low time.",
      price: "$1200",
      points: [
        "Lorem Ipsum dolor amit set.",
        "Lorem Ipsum dolor amit set.",
        "Lorem Ipsum dolor amit set.",
      ],
    },

    {
      title: "Lorem",
      subtitle:
        "Great for brands that are just launching with limited capital and low time.",
      price: "$1200",
      points: [
        "Lorem Ipsum dolor amit set.",
        "Lorem Ipsum dolor amit set.",
        "Lorem Ipsum dolor amit set.",
      ],
    },
  ];
  return (
    <section className="mt-36 md:mt-44 lg:mt-48 xl:mt-64">
      <SectionHeader>Flexible Packages for All</SectionHeader>
      <PackageList packages={packages} />
    </section>
  );
}
