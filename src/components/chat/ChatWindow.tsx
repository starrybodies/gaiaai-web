"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import Image from "next/image";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { SuggestedPrompts } from "./SuggestedPrompts";
import { SUGGESTED_PROMPTS } from "@/lib/chat-responses";

interface ToolUseData {
  tool: string;
  duration: number;
  result: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  toolUse?: ToolUseData;
  toolState?: "querying" | "done";
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm Gaia — the intelligence layer for Earth's regenerative economy. Ask me about our projects, technology, or the science of ecological regeneration.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() }),
      });

      const data = await res.json();

      if (data.toolUse) {
        // Show tool querying state first
        const toolMessage: Message = {
          role: "assistant",
          content: "",
          toolUse: data.toolUse,
          toolState: "querying",
        };
        setMessages((prev) => [...prev, toolMessage]);

        // Wait for simulated tool duration
        await new Promise((resolve) =>
          setTimeout(resolve, data.toolUse.duration)
        );

        // Update to done state and show response
        setMessages((prev) => {
          const updated = [...prev];
          const lastIdx = updated.length - 1;
          updated[lastIdx] = {
            ...updated[lastIdx],
            content: data.response,
            toolState: "done",
          };
          return updated;
        });
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex h-[500px] flex-col rounded-2xl border border-border bg-surface overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-5 py-3">
        <div className="relative">
          <Image
            src="/gaia-logo.png"
            alt="Gaia"
            width={24}
            height={24}
            className="rounded-full brightness-90"
          />
          <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green border-2 border-surface" />
        </div>
        <span className="text-sm font-medium text-foreground">Gaia</span>
        <span className="text-xs text-muted">Online · Grounded in verified data</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" role="log" aria-live="polite" aria-label="Chat messages">
        {messages.map((msg, i) => (
          <ChatMessage
            key={i}
            role={msg.role}
            content={msg.content}
            toolUse={msg.toolUse}
            toolState={msg.toolState}
          />
        ))}
        {isLoading &&
          !messages[messages.length - 1]?.toolUse && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2">
          <SuggestedPrompts
            prompts={SUGGESTED_PROMPTS}
            onSelect={sendMessage}
          />
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 border-t border-border px-4 py-3"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Gaia about the regenerative economy..."
          aria-label="Message to Gaia"
          className="flex-1 bg-transparent text-sm text-foreground placeholder-muted outline-none focus:ring-0"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          aria-label="Send message"
          className="rounded-lg bg-green p-2 text-background transition-all hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-green/50 focus:ring-offset-2 focus:ring-offset-surface"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
