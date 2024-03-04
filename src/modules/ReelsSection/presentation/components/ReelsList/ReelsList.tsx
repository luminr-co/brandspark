"use client"
import { useRef } from 'react';
import { ReelComponent } from "@/core/components/ReelComponent";
import { ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";

interface Props {
  reels: Array<string>;
}

export default function ReelsList({ reels }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-x-scroll w-full no-scrollbar" ref={containerRef} style={{ scrollBehavior: 'smooth' }}>
        <div className="flex flex-row gap-20 ">
          {reels.map((reel, index) => (
            <div className='min-w-[308px]' key={index}>
              <ReelComponent reel={reel} />
            </div>
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
