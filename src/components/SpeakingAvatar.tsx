"use client";
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  message: string;
  isSpeaking: boolean;
};

export default function SpeakingAvatar({ src, alt, message, isSpeaking }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-32 h-32 rounded-full overflow-hidden border-4 transition-transform
        ${isSpeaking ? "border-green-400 scale-105 animate-pulse" : "border-gray-300"}`}
      >
        <Image src={src} alt={alt || "avatar"} fill className="object-cover" />
      </div>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}
