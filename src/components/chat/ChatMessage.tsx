"use client";

import { cn } from "@/lib/utils";

interface ToolUseData {
  tool: string;
  duration: number;
  result: string;
}

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  toolUse?: ToolUseData;
  toolState?: "querying" | "done";
}

export function ChatMessage({ role, content, toolUse, toolState }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-green/15 text-foreground rounded-br-md"
            : "bg-surface-light text-foreground/90 rounded-bl-md"
        )}
      >
        {toolUse && (
          <div className="mb-3 rounded-lg border border-border bg-surface p-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-green">
              {toolState === "querying" ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
                  <span>{toolUse.tool}...</span>
                </>
              ) : (
                <>
                  <span className="text-green">✓</span>
                  <span>{toolUse.tool}</span>
                </>
              )}
            </div>
            {toolState === "done" && (
              <div className="mt-2 border-t border-border pt-2 text-muted">
                {toolUse.result}
              </div>
            )}
          </div>
        )}
        <div className="whitespace-pre-wrap">{content}</div>
      </div>
    </div>
  );
}
