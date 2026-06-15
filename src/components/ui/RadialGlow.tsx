import { cn } from "@/lib/cn";

type RadialGlowProps = {
  /** Tailwind classes for size + position, e.g. "size-[600px] -top-40 left-1/2 -translate-x-1/2". */
  className?: string;
  /** Color of the blob — pulls from CSS palette. */
  color?: "purple" | "blue" | "pink" | "indigo";
  /** Opacity 0–1, default 0.55. */
  opacity?: number;
  /** Blur intensity in pixels. */
  blur?: number;
};

const colorMap: Record<NonNullable<RadialGlowProps["color"]>, string> = {
  purple: "var(--purple-200)",
  blue: "var(--blue-300)",
  pink: "var(--pink-300)",
  indigo: "var(--indigo-400)",
};

export function RadialGlow({
  className,
  color = "purple",
  opacity = 0.55,
  blur = 120,
}: RadialGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full -z-0",
        className,
      )}
      style={{
        background: `radial-gradient(closest-side, ${colorMap[color]}, transparent 70%)`,
        opacity,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
