import TestimonialEntity from "@/modules/Testimonials/domain/entities/TestimonialEntity";
import Image from "next/image";

interface Props {
  testimonial: TestimonialEntity;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="border border-yellow py-10 px-6 flex flex-col justify-between gap-5 ">
      <p className="text-sm xl:text-base 2xl:text-base font-medium">
        {testimonial.testimonial}
      </p>
      <div className="flex flex-col ">
        <p className="text-base font-medium">{testimonial.name}</p>
        <p className="text-sm ">{testimonial.position}</p>
      </div>
    </div>
  );
}
