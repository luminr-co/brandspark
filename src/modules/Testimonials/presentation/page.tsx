import TestimonialEntity from "../domain/entities/TestimonialEntity";
import { SectionHeader } from "@/core/components/SectionHeader";
import { TestimonialList } from "./components/TestimonialList";
import testimonial1 from "./assets/Testimonials/testimonial1.jpg";
import testimonial2 from "./assets/Testimonials/testimonial2.jpg";
import testimonial3 from "./assets/Testimonials/testimonial3.jpg";

export default function TestimonialSection() {
  const testimonials: TestimonialEntity[] = [
    {
      testimonial:
        "“Brand Spark transformed our content strategy overnight! Their expertise propelled our engagement to new heights, making every word count.”",
      image: testimonial1,
      name: "Jenna S.",
    },
    {
      testimonial:
        "“With Brand Spark, revisions are a breeze! Their unlimited revisions policy ensured our message was just right, every time.”",
      image: testimonial2,
      name: "Alex P.",
    },
    {
      testimonial:
        "“Brand Spark doesn't just write content; they craft magic! Our brand saw immediate results, thanks to their strategic approach.”",
      image: testimonial3,
      name: "Sarah M.",
    },
  ];

  return (
    <section className="mt-32 lg:mt-52 xl:mt-56 2xl:mt-56 flex flex-col lg:gap-20 gap-10 xl:gap-20 2xl:gap-20">
      <SectionHeader>
        What Our Clients Say<span className="block">About Us</span>
      </SectionHeader>
      <TestimonialList testimonials={testimonials} />
    </section>
  );
}
