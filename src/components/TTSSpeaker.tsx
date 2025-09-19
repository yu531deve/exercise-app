"use client";
import { useState } from "react";

type Props = { text: string; onSpeakingChange: (speaking: boolean) => void };

export default function TTSSpeaker({ text, onSpeakingChange }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";

    utterance.onstart = () => {
      setIsPlaying(true);
      onSpeakingChange(true);
    };
    utterance.onend = () => {
      setIsPlaying(false);
      onSpeakingChange(false);
    };

    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      disabled={isPlaying}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {isPlaying ? "再生中..." : "しゃべる"}
    </button>
  );
}
