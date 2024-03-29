import React from "react";

export interface SingleSampleEditProps {
  title: string;
  price: string;
}

export default function SingleSampleEditComponent({ title, price }: SingleSampleEditProps) {
  return (
    <div className="p-6 pb-8 lg:pb-12 flex flex-col gap-2 lg:gap-4 border-4 border-white w-full">
      <p className="font-primary text-xl lg:text-4xl font-normal">{title}</p>
      <p className="font-primary text-xl lg:text-4xl font-extrabold text-yellow">
        {price}
      </p>
    </div>
  );
}
