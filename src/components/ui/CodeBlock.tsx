import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CodeBlockProps = {
  children: ReactNode;
  language?: string;
  filename?: string;
  className?: string;
};

export function CodeBlock({
  children,
  language,
  filename,
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-purple-200/40 bg-[#161820] shadow-[0_8px_24px_-12px_rgba(39,31,54,0.35)]",
        className,
      )}
    >
      {(filename || language) ? (
        <div className="flex items-center justify-between gap-3 border-b border-white/5 bg-[#1c1f29] px-5 py-2.5">
          <span className="font-mono text-[12px] text-white/60">
            {filename ?? ""}
          </span>
          {language ? (
            <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-white/50">
              {language}
            </span>
          ) : null}
        </div>
      ) : null}
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13.5px] leading-[1.6] text-[#eeeeee]">
        <code className="font-mono">{children}</code>
      </pre>
    </div>
  );
}
