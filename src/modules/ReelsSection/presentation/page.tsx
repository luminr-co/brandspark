import React from "react";
import { ReelsList } from "./components/ReelsList";
import { ReelEntity } from "@/core/domain/entities/ReelEntity";

export default function ReelsSection() {
  const reels = [
    "https://www.dropbox.com/scl/fi/th2872e2z4i799jub1y8q/2.mp4?rlkey=mspmjfa9ua9ji08tq4l8w6ln6&raw=1",
    "https://drive.google.com/file/d/1zYnS-DoYAdSy8mE-lv-TgFFmTrx5iCLI/preview",
    "https://drive.google.com/file/d/1sCqZnq-4u0Yy7ewfKjfbhunFCkS-eKFs/preview",
    "https://drive.google.com/file/d/1GG1UwSD1vvGNAW3lCGtRxB_S-sbUFxCv/preview",
    "https://drive.google.com/file/d/16IIacJ3FT3CCwV2ycZX3sayOv5yPjOEo/preview",
    "https://drive.google.com/file/d/1efY343V6y-ABU2MnNBkb4L1fZwivtDTw/preview",
    "https://drive.google.com/file/d/1xYF2uOED4GUVzL1NK05TQ6lqfc6fhwx1/preview",
  ];

  return (
    <div className="">
      <ReelsList reels={reels} />
    </div>
  );
}
