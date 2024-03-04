import TestimonialEntity from "../domain/entities/TestimonialEntity";
import { SectionHeader } from "@/core/components/SectionHeader";
import { TestimonialList } from "./components/TestimonialList";
import testimonial1 from "./assets/Testimonials/testimonial1.jpg";
import testimonial2 from "./assets/Testimonials/testimonial2.jpg";
import testimonial3 from "./assets/Testimonials/testimonial3.jpg";
import { LightingAsset } from "@/core/assets/images/LightingAsset";

export default function TestimonialSection() {
  const testimonials: TestimonialEntity[] = [
    {
      testimonial:
        "“We’ve worked with Brand Spark over the last couple months and they’ve been incredible! They’ve been able to keep up with our fast work flow and have always delivered projects on time. They are highly skilled at editing engaging social media content.”",
      position: "Founder & President, Social Chameleon",
      name: "Mike DiCioccio",
    },
    {
      testimonial:
        "“Brand Spark Visuals is an absolute powerhouse! Their creativity ignites every frame, crafting videos that leap off the screen with vibrancy and allure. From the first click to the final cut, their team orchestrates a symphony of visuals that captivate and inspire.”",
      position: "The Praised Media",
      name: "Michael Hudson Founder",
    },
    {
      testimonial:
        "“Lightning-fast turnaround times and unmatched perfection make them the ultimate video editing wizards. Trust me, they're the dream team you've been searching for!”",
      position: "Podcast Host: 2000 Percent Raise, Venture Capitalist & Author",
      name: "John Cerasani",
    },
  ];

  return (
    <section className="mt-32 lg:mt-52 xl:mt-56 2xl:mt-56 flex flex-col lg:gap-20 gap-10 xl:gap-20 2xl:gap-20 relative">
      <SectionHeader>
        What Our Clients Say<span className="block">About Us</span>
      </SectionHeader>
      <TestimonialList testimonials={testimonials} />
      <div className="absolute -top-14 right-72 w-20 h-28 scale-y-100 rotate-90 scale-x-100">
        <LightingAsset />
      </div>
      <div className="absolute w-80  bottom-0 -right-52 rotate-[35deg]">
        <LightingAsset />
      </div>
    </section>
  );
}
