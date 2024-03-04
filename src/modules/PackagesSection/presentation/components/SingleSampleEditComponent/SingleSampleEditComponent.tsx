import React from "react";

export interface SingleSampleEditProps {
  title: string;
  price: string;
}

export default function SingleSampleEditComponent({ title, price }: SingleSampleEditProps) {
  return (
    <div className="p-6 pb-12 flex flex-col gap-4 border-4 border-white w-full">
      <p className="font-primary text-4xl font-normal">{title}</p>
      <p className="font-primary text-4xl font-extrabold text-yellow">
        {price}
      </p>
    </div>
  );
}
