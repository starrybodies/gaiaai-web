"use client";

export function GlobePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        minHeight: 300,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer glow */}
      <div
        style={{
          position: "absolute",
          width: "80%",
          height: "80%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--color-green-dim) 0%, transparent 70%)",
          animation: "globe-pulse 4s ease-in-out infinite",
        }}
      />
      {/* Globe circle */}
      <div
        style={{
          width: "60%",
          maxWidth: 350,
          aspectRatio: "1",
          borderRadius: "50%",
          border: "1px solid var(--color-green-glow)",
          background:
            "radial-gradient(circle at 30% 30%, var(--color-green-dim) 0%, transparent 60%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines */}
        {[20, 40, 60, 80].map((p) => (
          <div
            key={`h-${p}`}
            style={{
              position: "absolute",
              top: `${p}%`,
              left: "5%",
              right: "5%",
              height: 1,
              background: "var(--color-green-dim)",
            }}
          />
        ))}
        {[20, 40, 60, 80].map((p) => (
          <div
            key={`v-${p}`}
            style={{
              position: "absolute",
              left: `${p}%`,
              top: "5%",
              bottom: "5%",
              width: 1,
              background: "var(--color-green-dim)",
            }}
          />
        ))}
        {/* Dots representing locations */}
        {[
          { top: "25%", left: "55%" },
          { top: "40%", left: "30%" },
          { top: "60%", left: "65%" },
          { top: "35%", left: "70%" },
          { top: "50%", left: "45%" },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              ...pos,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "var(--color-green)",
              boxShadow: "0 0 8px var(--color-green-glow)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
