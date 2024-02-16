import TestimonialEntity from "@/modules/Testimonials/domain/entities/TestimonialEntity";
import Image from "next/image";

interface Props {
  testimonial: TestimonialEntity;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="border border-yellow py-10 px-6 flex flex-col justify-between lg:gap-28 xl:gap-20 2xl:gap-20">
      <p className="text-sm xl:text-base 2xl:text-base font-medium">
        {testimonial.testimonial}
      </p>
      <div className="flex flex-col gap-5 mt-8 lg:mt-0 xl:mt-0 2xl:mt-0">
        <Image src={testimonial.image} width={72} height={72} alt="profile" className="rounded-full w-16 h-16"/>
        <p className="text-base font-medium">- {testimonial.name}</p>
      </div>
    </div>
  );
}
