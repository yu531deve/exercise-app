"use client";
import { useState } from "react";

type Message = { text: string; sender: "me" | "other" };

type Props = {
  messages: Message[];
  onSend: (msg: string) => void;
};

export default function ChatUI({ messages, onSend }: Props) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="flex flex-col flex-1 w-full bg-gray-100 dark:bg-gray-900">
      {/* メッセージ一覧（入力欄の高さ分だけ下に余白を確保） */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
        {messages.map((m, i) => {
          const isMine = m.sender === "me";
          return (
            <div
              key={i}
              className={`flex items-end gap-2 ${isMine ? "justify-end" : ""}`}
            >
              {!isMine && (
                <div
                  className="h-8 w-8 shrink-0 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: "url(/character.png)" }}
                />
              )}
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                  isMine
                    ? "bg-green-400 text-black rounded-br-none"
                    : "bg-white text-black border border-gray-200 rounded-bl-none"
                }`}
              >
                {m.text}
              </div>
            </div>
          );
        })}
      </main>

      {/* 入力欄（常に画面下に固定、ナビゲーションフッターの直上） */}
      <footer className="fixed bottom-18 left-0 w-full flex items-center gap-2 border-t bg-white p-3 dark:bg-gray-800">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 rounded-full border px-4 py-2 text-black focus:outline-none dark:bg-gray-700 dark:text-white"
          placeholder="メッセージを入力"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-full bg-[#25d366] text-white font-semibold hover:opacity-90 transition"
        >
          送信
        </button>
      </footer>
    </div>
  );
}
