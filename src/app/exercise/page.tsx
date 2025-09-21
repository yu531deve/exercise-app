"use client";
import { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";

export default function ExercisePage() {
  const [showSubVideo, setShowSubVideo] = useState(false);

  // Spaceキーでサブ動画を出す
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setShowSubVideo(true);
        // 一定時間で消えるなら↓
        setTimeout(() => setShowSubVideo(false), 5000); // 5秒後に非表示
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative flex h-screen w-screen overflow-hidden bg-black text-white">
      {/* 背景動画（全画面） */}
      <div className="absolute inset-0">
        <VideoPlayer
          src="/780037845.306586.mp4"
          autoPlay
          controls={false}
          muted={false}
        />
      </div>

      {showSubVideo && (
  <div className="absolute bottom-4 left-4 w-[512px] h-[320px] border-2 border-white rounded-lg overflow-hidden shadow-lg z-20 animate-in fade-in duration-300">
    <VideoPlayer
      src="/25f3a94e-31be-4b64-950c-f5e85b878b90.mp4"
      autoPlay
      controls={false}
      muted={false} // 音声あり
    />
  </div>
)}

    </main>
  );
}
