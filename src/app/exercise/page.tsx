"use client";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import SpeakingAvatar from "@/components/SpeakingAvatar";

export default function ExercisePage() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [lastIndex, setLastIndex] = useState<number | null>(null);

  // 再生候補のファイル一覧
  const voices = [
    "/001_ずんだもん（ノーマル）_水分補給をするのだ！.wav",
    "/002_ずんだもん（ノーマル）_がんばれなのだ！.wav",
    "/003_ずんだもん（ノーマル）_あとちょっとなのだ！.wav",
  ];

  const playVoice = () => {
    let index: number;

    // 直前と違うインデックスを選ぶ
    do {
      index = Math.floor(Math.random() * voices.length);
    } while (index === lastIndex && voices.length > 1);

    setLastIndex(index);

    const file = voices[index];
    const audio = new Audio(file);

    // ファイル名からメッセージを抽出（最後の "_" の後ろを取る）
    const parts = file.split("_");
    const lastPart = parts[parts.length - 1]; // 例: "水分補給をするのだ！.wav"
    const message = lastPart.replace(".wav", ""); // 拡張子除去

    setCurrentMessage(message);
    setIsSpeaking(true);

    audio.play();
    audio.onended = () => setIsSpeaking(false);
  };

  return (
    <main className="flex flex-col h-screen bg-[#e5ddd5] text-black">
      {/* 上：運動動画 */}
      <div className="flex-1 flex items-center justify-center bg-[#e5ddd5]">
        <VideoPlayer src="/780037845.306586.mp4" />
      </div>

      {/* 下：キャラクター画像＋声掛け */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 border-t border-gray-300 bg-white relative">
        {/* キャラクター（クリックでしゃべる） */}
        <div className="relative cursor-pointer" onClick={playVoice}>
          <SpeakingAvatar src="/character.png" isSpeaking={isSpeaking} message="孫" />

          {/* 吹き出し */}
          {isSpeaking && (
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-lg shadow-md border border-gray-300 w-96 text-center">
              {currentMessage}
              <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
