"use client";
import { useState, useEffect } from "react";
import ChatUI from "@/components/ChatUI";

type Message = { text: string; sender: "me" | "other" };

// デモ用シナリオ
const script: Message[] = [
  { text: "おじいちゃん、元気？", sender: "other" },
  { text: "元気だよ。今日は学校どうだった？", sender: "me" },
  { text: "うん、楽しかった！", sender: "other" },
  { text: "それはよかったな。", sender: "me" },
  { text: "ねえ、おじいちゃん運動ちゃんとしてる？", sender: "other" },
  { text: "最近ちょっとサボり気味かな…。", sender: "me" },
  { text: "だめだよ！一緒に運動がんばろう！", sender: "other" },
  {
    text: "👉 運動アプリはこちら！\n" +
          "https://ai-fitness-app.example.com",
    sender: "other",
  },
];


export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0);

  const nextMessage = () => {
    if (step < script.length) {
      setMessages((prev) => [...prev, script[step]]);
      setStep(step + 1);
    }
  };

  // キーボード操作で会話を進める
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault(); // ページスクロールやフォーム送信を防ぐ
        nextMessage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step]);

  return (
    <div className="h-full w-full flex flex-col bg-[#E5DDD5]">
      {/* LINE風チャットUI */}
      <ChatUI messages={messages} onSend={() => {}} />
    </div>
  );
}
