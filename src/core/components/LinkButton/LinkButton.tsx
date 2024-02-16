import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { Button } from "../Button";

interface Props extends PropsWithChildren {
  href: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function LinkButton({ href, className, icon, children }: Props) {
  return (
    <Link href={href}>
      <Button className={className} icon={icon}>
        {children}
      </Button>
    </Link>
  );
}
