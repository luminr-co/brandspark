import { Logo } from "@/core/assets/images/Logo";
import React from "react";
import { LinkButton } from "../LinkButton";
import { ArrowIcon } from "@/core/assets/icons/ArrowIcon";

export default function NavBar() {
  return (
    <nav className="py-6 w-full sticky top-0 z-50 flex flex-row justify-center bg-blackBackground">
      <div className="w-9/12 flex flex-row justify-between items-center">
        <div className="w-20 px-1">
          <Logo />
        </div>
        <LinkButton className="shadow-button" href="" icon={<ArrowIcon/>}>
          <span className="hidden lg:inline-block md:inline-block xl:inline-block 2xl:inline-block">Scale your Business</span>
        </LinkButton>
      </div>
    </nav>
  );
}
