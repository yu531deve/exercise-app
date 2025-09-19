"use client";
type Props = { src: string };

export default function VideoPlayer({ src }: Props) {
  return (
    <video
      src={src}
      controls
      autoPlay
      className="w-full h-full object-contain bg-black"
    />
  );
}
