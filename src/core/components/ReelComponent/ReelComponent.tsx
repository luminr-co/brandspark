"use client";
import { useState, useRef } from "react";
import { PauseIcon } from "@/core/assets/icons/PauseIcon";

interface Props {
  reel: string;
}

export default function ReelComponent({ reel }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-[305px] h-[553px] cursor-pointer bg-yellow">
      {!isPlaying && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer opacity-100 transition-opacity duration-500 pointer-events-none">
          <PauseIcon />
        </div>
      )}
      <div className="bg-blackBackground translate-x-1 -translate-y-1 inset-0 z-10 absolute">
        <div className="bg-stone-950 animate-pulse w-full h-full"></div>
      </div>
      <video
        width="305"
        height="553"
        onClick={(e) => {
          if (isPlaying) {
            e.currentTarget.pause();
          } else {
            e.currentTarget.play();
          }
          setIsPlaying(!isPlaying);
        }}
        className="w-full h-full object-cover translate-x-1 -translate-y-1 z-20 relative"
      >
        <source src={reel} type="video/mp4" />
      </video>
    </div>
  );
}
