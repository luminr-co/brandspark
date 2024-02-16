import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function Divider({ className }: Props) {
  return (
    <hr className={twMerge("h-px bg-grey border-grey w-full", className)} />
  );
}
