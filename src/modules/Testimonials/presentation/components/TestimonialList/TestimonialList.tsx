import TestimonialEntity from "@/modules/Testimonials/domain/entities/TestimonialEntity"
import { TestimonialCard } from "../TestimonialCard";

interface Props {
    testimonials: TestimonialEntity[];
}

export default function TestimonialList({testimonials}:Props) {
  return (
    <div className="lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 flex flex-col gap-8 w-3/4 mx-auto">
     {
        testimonials.map((testimonial, index)=>(
            <TestimonialCard testimonial={testimonial} key={index}/>
        ))
     }
    </div>
  )
}
