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
          className="rounded-full border border-border bg-surface-light px-3 py-1.5 text-xs text-muted transition-all hover:border-green/30 hover:text-green cursor-pointer"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
