import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  icon?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function Eyebrow({
  children,
  icon,
  tone = "light",
  className,
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "text-[11px] font-bold uppercase tracking-[0.12em]",
        tone === "light"
          ? "bg-white/70 text-purple-400 border border-purple-200/60 backdrop-blur"
          : "bg-white/5 text-purple-300 border border-white/10 backdrop-blur",
        className,
      )}
    >
      {icon ? <span className="flex size-3.5 items-center">{icon}</span> : null}
      <span>{children}</span>
    </span>
  );
}
