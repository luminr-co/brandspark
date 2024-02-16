import { Logo } from "@/core/assets/images/Logo";
import React from "react";
import { SocialButtons } from "./components/SocialButtons";
import { Divider } from "@/core/components/Divider";

export default function Footer() {
  return (
    <footer className="w-5/6 mx-auto mt-32 md:mt-44 lg:mt-44 xl:mt-64 2xl:mt-64">
      <Logo />
      <p className="text-base font-medium mt-6 mb-10">
        We transform Raw Footage to Spectacular Stories - Lightning-Quick Edits,
        Everlasting Impressions!
      </p>
      <SocialButtons />
      <Divider />
      <p className="text-center text-base font-medium mt-6 mb-9">
        All rights reserved © Brand Spark 2024
      </p>
    </footer>
  );
}
