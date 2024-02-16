import { SectionHeader } from "@/core/components/SectionHeader";
import React from "react";
import FaqEntity from "../domain/entities/FaqEntity";
import { FaqList } from "./components/FaqList";

export default function FaqSection() {
  const faq: FaqEntity[] = [
    {
      question: "Lorem ipsum dolor amit set.",
      answer: "This is a paragraph text.",
    },
    {
      question: "Lorem ipsum dolor amit set.",
      answer: "This is a paragraph text.",
    },
    {
      question: "Lorem ipsum dolor amit set.",
      answer: "This is a paragraph text.",
    },
    {
      question: "Lorem ipsum dolor amit set.",
      answer: "This is a paragraph text.",
    },
    {
      question: "Lorem ipsum dolor amit set.",
      answer: "This is a paragraph text.",
    },
  ];

  return (
    <section className="mt-40 md:mt-44 lg:mt-56 xl:mt-60 2xl:mt-60 mx-auto">
      <div className="w-1/2 xl:w-2/3 lg:w-2/3 2xl:w-2/3 mx-auto">
        <SectionHeader>Some Frequently Asked Questions</SectionHeader>
      </div>
      <FaqList faq={faq} />
    </section>
  );
}
