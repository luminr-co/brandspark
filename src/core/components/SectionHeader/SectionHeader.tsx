import { PropsWithChildren } from "react";

export default function SectionHeader({ children }: PropsWithChildren) {
  return (
    <h2 className="font-primary lg:text-4xl text-2xl md:text-3xl xl:text-5xl 2xl:text-5xl font-normal text-center">
      {children}
    </h2>
  );
}
