import { ReelEntity } from "@/core/domain/entities/ReelEntity";

interface Props {
  reel: ReelEntity;
}

export default function ReelComponent({ reel }: Props) {
  return (
    <video
      src={reel.video}
      width={308}
      height={557}
      className="border-l-8 border-b-8 border-yellow h-[557px] -z-0"
      loop
    />
  );
}
