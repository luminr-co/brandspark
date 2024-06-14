import React from "react";
import { ReelsList } from "./components/ReelsList";

export default function ReelsSection() {
  const reels = [
    "https://www.dropbox.com/scl/fi/dumbphw8ae26tlnnkzmk0/Emmaus-Edited.mp4?rlkey=j8t8u3eti9q56shxrt0xrdex6&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/1m1r5fw41xkvutllk2rkt/Tom-Ferry-Edited.mp4?rlkey=fag8wxqvte7u6qep76xcbu3ri&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/nt58zn68mcbig7a8n8dm8/Top-3-things-that-hsbo-do-on-facebook.mp4?rlkey=hly0dx3iksaguwqbws3jgj4v1&dl=0&raw=1",

    "https://www.dropbox.com/scl/fi/r34w1xxf3e4vmizq9z403/Power-Shifts-Promo.mp4?rlkey=taw49df16ih31omfuvte9tgdg&st=qaob9was&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/4uumn06cb542p7rlf4lvn/RST.mp4?rlkey=vh7o6n8siobfflvfbacfx65gc&raw=1",
    "https://www.dropbox.com/scl/fi/vs2v9c5jaihcruunmq6sv/First-Time-Home-Buyer-Characteristic.mp4?rlkey=no2om2gzeinlf67t6150l6gbb&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/ckqm0fc1xpdue9in08ako/Eric-Brewer.mp4?rlkey=o2mkyc2ff1n1rxlkj5h9c28vx&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/kdkkhpqdgaq2zdd8u27qz/Aaron-Rodgers.mp4?rlkey=weayq57ppu7zzpknm1fdj94s0&dl=0&raw=1",
    "https://www.dropbox.com/scl/fi/a4cfisijwzvv4fno3u6pe/Sample-1.mp4?rlkey=8e8xd2b8l6k2ucp687a0kpaaq&dl=0&raw=1",
  ];

  return (
    <div className="mt-32">
      <ReelsList reels={reels} />
    </div>
  );
}
