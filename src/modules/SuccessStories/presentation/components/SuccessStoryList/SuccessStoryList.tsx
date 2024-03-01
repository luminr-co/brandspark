"use client"
import SuccessStoryEntity from "@/modules/SuccessStories/domain/entities/SuccessStoryEntity";
import { SuccessStoryComponent } from "../SuccessStoryComponent";
import { ArrowLeftIcon } from "@/modules/ReelsSection/presentation/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/modules/ReelsSection/presentation/assets/icons/ArrowRightIcon";
import { useState, useRef } from 'react';

interface Props {
  successStories: SuccessStoryEntity[];
}

export default function SuccessStoryList({ successStories }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 800;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 800;
    }
  };

  return (
    <>
      <div className="overflow-x-hidden mx-8">
        <div
          className="lg:w-2/3 xl:w-2/3 2xl:w-2/3 w-7/12 mx-auto flex flex-row gap-24 overflow-x-scroll no-scrollbar"
          ref={scrollContainerRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          {successStories.map((story, index) => (
            <div className="min-w-[90%]" key={index}>
              <SuccessStoryComponent successStory={story} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-8 mx-auto items-center justify-center mt-10">
        <button onClick={scrollLeft}>
          <ArrowLeftIcon />
        </button>
        <button onClick={scrollRight}>
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
}

