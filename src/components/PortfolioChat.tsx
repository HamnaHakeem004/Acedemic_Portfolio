"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { role: "user" | "assistant"; content: string };

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! Ask me anything about Hamna's projects, skills, or experience. 😊",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user", content: text } as Msg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();

      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.text ?? "No response." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Oops — something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-60">
      {/* Floating Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="rounded-2xl bg-teal-600 px-5 py-3 text-white font-semibold shadow-lg hover:bg-teal-700"
      >
        {open ? "Close" : "Ask AI"}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-3 w-85 sm:w-95 rounded-2xl border border-white/55 bg-white/60 backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-white/40">
              <div className="text-slate-900 font-semibold">Portfolio Assistant</div>
              <div className="text-slate-500 text-xs">
                Ask about projects, skills, internships, etc.
              </div>
            </div>

            <div className="max-h-90 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={[
                      "max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-teal-50 text-teal-700 border border-teal-200"
                        : "bg-slate-50 text-slate-700 border border-slate-200",
                    ].join(" ")}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-slate-400 text-sm">Typing…</div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="p-3 border-t border-white/40 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send();
                }}
                placeholder="Ask: What projects did you build?"
                className="flex-1 rounded-xl bg-white border border-slate-200 px-3 py-2 text-slate-700 placeholder:text-slate-400 outline-none focus:border-teal-600 shadow-sm"
              />
              <button
                onClick={send}
                disabled={loading}
                className="rounded-xl bg-teal-600 border border-teal-600 px-4 py-2 text-white hover:bg-teal-700 disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}