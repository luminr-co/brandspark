"use client"
import { useState, useRef } from "react";
import { PauseIcon } from "@/core/assets/icons/PauseIcon";

interface Props {
  reel: string;
}

export default function ReelComponent({ reel }: Props) {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const iframeRef = useRef<HTMLIFrameElement>(null);

  // const togglePlayPause = () => {
  //   const iframe = iframeRef.current;
  //   if (iframe && iframe.contentWindow) {
  //     iframe.contentWindow.postMessage({ type: 'togglePlayPause' }, '*');
  //     setIsPlaying(prevState => !prevState);
  //   }
  // };

  return (
    <div className="relative w-full h-full">
      <iframe
        // ref={iframeRef}
        src={reel}
        width="100%"
        height="100%"
        className={`border-l-8 border-b-8 block border-yellow  h-[545px] mb-6 transition-all duration-300 cursor-pointer transform-gpu hover:scale-105 `}
        frameBorder="0"
        allow="encrypted-media"
        
        style={{ display: 'block' }}
        // onClick={togglePlayPause} 
      />
      {/* {!isPlaying && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer opacity-100 transition-opacity duration-500"
          onClick={togglePlayPause}
        >
          <PauseIcon />
        </div>
      )} */}
    </div>
  );
}
