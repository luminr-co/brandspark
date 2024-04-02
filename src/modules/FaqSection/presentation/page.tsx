import { SectionHeader } from "@/core/components/SectionHeader";
import React from "react";
import FaqEntity from "../domain/entities/FaqEntity";
import { FaqList } from "./components/FaqList";
import { LightingAsset } from "@/core/assets/images/LightingAsset";

export default function FaqSection() {
  const faq: FaqEntity[] = [
    {
      question: "How fast will I receive my video?",
      answer:
        "The delivery time for your videos is determined by the package you choose. Typically, you can anticipate to receive your videos within 1-2 days, ensuring that you have your content in time to meet your needs.",
    },
    {
      question: "How do I request videos?",
      answer:
        "We will offer you access to our internal system, where you can easily post your films. Send us your videos, and we will do the rest.",
    },
    {
      question: "Why wouldn't I just hire my own editor?",
      answer:
        "While you can hire your own editor, this can be a difficult and time-consuming task. BrandSpark aims to simplify the process for you by taking on the task of managing the editing process and executing quality checks. This way, you may have a hassle-free experience while being confident in the quality of the finished result.",
    },
    {
      question: "What if I’m not happy with you?",
      answer:
        "This does not happen very often, but if it does, you have unlimited changes! We'll keep modifying until you're completely satisfied with your videos.",
    },
    {
      question: "Do you offer trials or make example videos?",
      answer:
        "No, we don't. If you want to check BransSpark out, a one-time video is your best bet.",
    },
    {
      question: "Can I cancel if I don’t like it?",
      answer:
        "Without a doubt, there aren't any long-term agreements or contracts. Anytime you want, you can stop or stop it. Please be aware, though, that there won't be a reimbursement if a video editor has already begun working on your videos prior to the cancellation. If you're still unsure, think about seeing a demo video to see how our service works.",
    },
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
