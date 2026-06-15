import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tag = { label: string; icon?: "bolt" | "lock" | "shield" };

const tagIcons: Record<NonNullable<Tag["icon"]>, ReactNode> = {
  bolt: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
      <path
        d="M9 1.5 3.5 9h3.25L7 14.5 12.5 7H9.25L9 1.5z"
        fill="currentColor"
      />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
      <rect
        x="3.5"
        y="7"
        width="9"
        height="6.5"
        rx="1.25"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
      <path
        d="M8 1.75 2.75 4v4.5c0 3.05 2.3 5.7 5.25 6.25 2.95-.55 5.25-3.2 5.25-6.25V4L8 1.75z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="m5.75 8.25 1.6 1.6 3-3.1"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export const DEFAULT_TRUST_TAGS: Tag[] = [
  { label: "Quick setup", icon: "bolt" },
  { label: "GDPR compliant", icon: "lock" },
  { label: "ISO27001", icon: "shield" },
];

type TrustTagsProps = {
  tags?: Tag[];
  tone?: "light" | "dark";
  className?: string;
};

export function TrustTags({
  tags = DEFAULT_TRUST_TAGS,
  tone = "light",
  className,
}: TrustTagsProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px]",
        tone === "light" ? "text-purple-400" : "text-purple-300/80",
        className,
      )}
    >
      {tags.map((t) => (
        <li key={t.label} className="inline-flex items-center gap-1.5">
          {t.icon ? tagIcons[t.icon] : null}
          {t.label}
        </li>
      ))}
    </ul>
  );
}
