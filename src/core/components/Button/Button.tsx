import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends PropsWithChildren {
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({ icon, children, className }: Props) {
  return (
    <button
      className={twMerge(
        `bg-yellow font-primary lg:p-5 md:p-5 xl:p-5 2xl:p-5 text-base flex flex-row gap-2 p-4 text-black items-center justify-center`,
        className
      )}
    >
      {children}
      {icon && <div className="w-6 h-6">{icon}</div>}
    </button>
  );
}
