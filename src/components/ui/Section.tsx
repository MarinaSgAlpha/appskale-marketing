import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps<T extends ElementType> = {
  as?: T;
  /**
   * Vertical spacing variant.
   * - `default`: top/bottom 64/80/100px
   * - `tight`: top/bottom 48/64/80px
   * - `hero`: more breathing room above the fold
   */
  spacing?: "default" | "tight" | "hero";
  /** Background variant. Most sections are white; some are tinted/dark. */
  tone?: "white" | "tinted" | "dark";
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const spacingMap = {
  default: "py-16 md:py-20 lg:py-[100px]",
  tight: "py-12 md:py-16 lg:py-20",
  hero: "pt-24 md:pt-32 lg:pt-[120px] pb-16 md:pb-20 lg:pb-[100px]",
} as const;

const toneMap = {
  white: "bg-white",
  tinted: "bg-purple-50",
  dark: "bg-purple-950 text-white",
} as const;

export function Section<T extends ElementType = "section">({
  as,
  spacing = "default",
  tone = "white",
  className,
  children,
  ...rest
}: SectionProps<T>) {
  const Tag = (as ?? "section") as ElementType;
  return (
    <Tag
      className={cn(
        "relative overflow-hidden",
        spacingMap[spacing],
        toneMap[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
