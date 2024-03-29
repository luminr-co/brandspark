import React from "react";
import { ReelsList } from "./components/ReelsList";
import { ReelEntity } from "@/core/domain/entities/ReelEntity";

export default function ReelsSection() {
  const reels = [
    "https://www.dropbox.com/scl/fi/th2872e2z4i799jub1y8q/2.mp4?rlkey=mspmjfa9ua9ji08tq4l8w6ln6&raw=1",
    "https://www.dropbox.com/scl/fi/4uumn06cb542p7rlf4lvn/RST.mp4?rlkey=vh7o6n8siobfflvfbacfx65gc&raw=1",
    "https://www.dropbox.com/scl/fi/vs2v9c5jaihcruunmq6sv/First-Time-Home-Buyer-Characteristic.mp4?rlkey=no2om2gzeinlf67t6150l6gbb&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/ckqm0fc1xpdue9in08ako/Eric-Brewer.mp4?rlkey=o2mkyc2ff1n1rxlkj5h9c28vx&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/kdkkhpqdgaq2zdd8u27qz/Aaron-Rodgers.mp4?rlkey=weayq57ppu7zzpknm1fdj94s0&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/a4cfisijwzvv4fno3u6pe/Sample-1.mp4?rlkey=8e8xd2b8l6k2ucp687a0kpaaq&dl=0&raw=1"
  ];

  return (
    <div className="">
      <ReelsList reels={reels} />
    </div>
  );
}
