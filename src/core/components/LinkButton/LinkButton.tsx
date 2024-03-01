import React, { PropsWithChildren } from "react";
import { Button } from "../Button";

interface Props extends PropsWithChildren {
  href: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function LinkButton({ href, className, icon, children }: Props) {
  return (
    <a href={href}>
      <Button className={className} icon={icon}>
        {children}
      </Button>
    </a>
  );
}
