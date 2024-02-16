"use client"
import { useEffect, useRef } from 'react';
import { ReelComponent } from "@/core/components/ReelComponent";
import { ReelEntity } from "@/core/domain/entities/ReelEntity";
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";

interface Props {
  reels: ReelEntity[];
}

export default function ReelsList({ reels }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; 
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; 
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    // You can add any scroll-related logic here if needed
  };

  return (
    <div className='flex flex-col items-center justify-center'>
    <div className="overflow-x-hidden w-full">
      <div ref={containerRef} className="flex flex-row overflow-x-scroll no-scrollbar xl:gap-48 lg:gap-20 gap-7">
        {reels.map((reel, index) => (
          <ReelComponent reel={reel} key={index} />
        ))}
      </div>
      </div>
      <div className="flex flex-row gap-8 mt-10">
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
