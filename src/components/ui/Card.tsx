import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps<T extends ElementType> = {
  as?: T;
  variant?: "glass" | "solid" | "gradient" | "dark";
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const variantClasses = {
  glass:
    "bg-white/60 backdrop-blur border-2 border-white/70 shadow-[0_1px_2px_rgba(39,31,54,0.04),0_24px_48px_-12px_rgba(39,31,54,0.08)]",
  solid:
    "bg-white border border-purple-100 shadow-[0_1px_2px_rgba(39,31,54,0.04),0_8px_24px_-8px_rgba(39,31,54,0.06)]",
  gradient:
    "border-2 border-white/70 shadow-[0_1px_2px_rgba(39,31,54,0.04),0_24px_48px_-12px_rgba(39,31,54,0.1)]",
  dark: "bg-white/5 border border-white/10 backdrop-blur",
} as const;

export function Card<T extends ElementType = "div">({
  as,
  variant = "solid",
  className,
  children,
  style,
  ...rest
}: CardProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const gradientStyle =
    variant === "gradient"
      ? {
          backgroundImage:
            "linear-gradient(140deg, rgba(204,205,255,0.7) 4%, rgba(235,203,247,0.7) 60%, rgba(166,140,225,0.7) 103%)",
        }
      : undefined;

  return (
    <Tag
      className={cn(
        "rounded-[28px]",
        variantClasses[variant],
        className,
      )}
      style={{ ...gradientStyle, ...(style as object) }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
