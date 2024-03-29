"use client";
import SuccessStoryEntity from "@/modules/SuccessStories/domain/entities/SuccessStoryEntity";
import { SuccessStoryComponent } from "../SuccessStoryComponent";
import { ArrowLeftIcon } from "@/modules/ReelsSection/presentation/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/modules/ReelsSection/presentation/assets/icons/ArrowRightIcon";
import { useState, useRef } from "react";
import { STRING_LITERAL_DROP_BUNDLE } from "next/dist/shared/lib/constants";
import Slider from "react-slick";

interface Props {
  successStories: SuccessStoryEntity[];
}

export default function SuccessStoryList({ successStories }: Props) {
  const sliderRef = useRef<Slider | null>(null);

  const scrollLeft = () => {
    sliderRef.current?.slickPrev();
  };

  const scrollRight = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
  };

  return (
    <div className="">
      {/* <div className="overflow-x-hidden mx-8">
        <div
          className="lg:w-2/3 xl:w-2/3 2xl:w-2/3 mx-auto flex flex-row gap-24 overflow-x-scroll no-scrollbar"
          ref={scrollContainerRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          {successStories.map((story, index) => (
            <div className="min-w-[90%]" key={index}>
              <SuccessStoryComponent successStory={story} />
            </div>
          ))}
        </div>
      </div> */}
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef.current = slider;
        }}
      >
        {successStories.map((story, index) => (
          <div className="" key={index}>
            <SuccessStoryComponent successStory={story} />
          </div>
        ))}
      </Slider>

      <div className="flex flex-row gap-8 mx-auto items-center justify-center mt-10">
        <button onClick={scrollLeft}>
          <ArrowLeftIcon />
        </button>
        <button onClick={scrollRight}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
