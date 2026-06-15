import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const max =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-[1320px]"
        : "max-w-[1200px]";

  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-10 lg:px-[100px]",
        max,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
