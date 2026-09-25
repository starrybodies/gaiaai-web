/** Static stand-in shown while the WebGL globe loads. Matches its silhouette. */
export function GlobePlaceholder() {
  return (
    <div aria-hidden className="flex h-full w-full items-center justify-center">
      <div className="aspect-square w-[62%] rounded-full border border-green/20 bg-[radial-gradient(circle_at_35%_30%,var(--color-green-dim),transparent_65%)] shadow-[0_0_80px_var(--color-green-dim)]" />
    </div>
  );
}
