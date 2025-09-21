"use client";

type Props = {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
};

export default function VideoPlayer({
  src,
  autoPlay = true,
  controls = false,
  muted = false,
}: Props) {
  return (
    <video
      src={src}
      className="w-full h-full object-cover"
      autoPlay={autoPlay}
      controls={controls}
      muted={muted}
      loop
      playsInline
    />
  );
}
