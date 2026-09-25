"use client";

interface SuggestedPromptsProps {
  prompts: string[];
  onSelect: (prompt: string) => void;
}

export function SuggestedPrompts({ prompts, onSelect }: SuggestedPromptsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="rounded-[3px] border border-border bg-background px-3 py-1.5 text-left font-mono text-[12px] text-muted transition-all hover:border-green/30 hover:text-green cursor-pointer"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
