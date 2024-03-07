import { SectionHeader } from "@/core/components/SectionHeader";
import React from "react";
import FaqEntity from "../domain/entities/FaqEntity";
import { FaqList } from "./components/FaqList";
import { LightingAsset } from "@/core/assets/images/LightingAsset";

export default function FaqSection() {
  const faq: FaqEntity[] =[
    {
      question: "How fast will I receive my video?",
      answer: "The delivery time for your videos depends on the package you choose. Typically, you can expect to receive your videos within a day to 2-3 days, ensuring you get your content promptly to meet your needs.",
    },
    {
      question: "How do I request videos?",
      answer: "We'll grant you access to our internal system where you upload your videos with ease. Send us your videos, and we'll do the rest.",
    },
    {
      question: "Why wouldn’t I just hire my own editor?",
      answer: "While you have the option to hire your own editor, it can often be a challenging and time-consuming process. At Unchained, we aim to simplify the process for you by assuming the responsibility of managing the editing process and conducting quality checks. This way, you can enjoy a hassle-free experience and trust in the quality of the final product.",
    },
    {
      question: "What if I’m not happy with you?",
      answer: "This doesn't happen very often but if it does - you get unlimited revisions! We'll keep tweaking things until you absolutely love your videos.",
    },
    {
      question: "Do you offer trials or make example videos?",
      answer: "No, we do not. If you're looking to try Unchained out, one-off video is your best option.",
    },
    {
      question: "Can I cancel if I don’t like it?",
      answer: "Absolutely, there are no contracts or long-term commitments. You can pause or cancel at any time. However, please note that if a video editor has already started working on your videos before the cancellation, a refund won't be available. If you have doubts, consider trying a one-off video to assess our service.",
    }
  ];

  return (
    <section className="mt-40 md:mt-44 lg:mt-56 xl:mt-60 2xl:mt-60 mx-auto relative">
      <div className="sm:w-1/2 md:w-1/2 xl:w-2/3 lg:w-2/3 2xl:w-2/3 mx-auto">
        <SectionHeader>Some Frequently Asked Questions</SectionHeader>
      </div>
      <FaqList faq={faq} />
      <div className="absolute -top-16 right-72 w-20 h-28 scale-y-100 rotate-90 scale-x-100">
        <LightingAsset />
      </div>
      <div className="absolute w-80 h-96 rotate-90 -scale-y-100 -bottom-56 lg:-right-44 -right-56 xl:-right-44 2xl:-right-44">
        <LightingAsset />
      </div>
    </section>
  );
}
