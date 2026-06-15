import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "tertiary" | "ghost-dark";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "text-white shadow-[0_8px_24px_-8px_rgba(135,101,215,0.45)] hover:brightness-[1.04] active:brightness-95",
  secondary:
    "bg-white text-purple-900 border border-purple-200/70 hover:bg-purple-50 shadow-[0_1px_2px_rgba(39,31,54,0.04),0_4px_12px_-4px_rgba(39,31,54,0.08)]",
  tertiary:
    "bg-transparent text-purple-700 hover:text-purple-900 underline-offset-4 hover:underline",
  "ghost-dark":
    "bg-white/5 text-white border border-white/15 hover:bg-white/10 backdrop-blur-sm",
};

const primaryGradientStyle = {
  backgroundImage:
    "linear-gradient(140deg, #999bff 0%, #8765d7 52%, #da9ef0 100%)",
} as const;

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  showArrow?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps | "href"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("ml-1.5 size-4", className)}
    >
      <path
        d="M7.5 4.5 13 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "lg",
    className,
    children,
    showArrow = false,
    ...rest
  } = props;

  const base = cn(
    "inline-flex items-center justify-center rounded-full font-medium",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    "disabled:opacity-60 disabled:pointer-events-none",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowIcon /> : null}
    </>
  );

  const style = variant === "primary" ? primaryGradientStyle : undefined;

  if ("href" in props && typeof props.href === "string") {
    const { href } = props;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a
          {...(rest as ComponentPropsWithoutRef<"a">)}
          href={href}
          className={base}
          style={style}
          rel={(rest as ComponentPropsWithoutRef<"a">).rel ?? "noopener"}
          target={(rest as ComponentPropsWithoutRef<"a">).target ?? "_blank"}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link
        {...(rest as ComponentPropsWithoutRef<"a">)}
        href={href}
        className={base}
        style={style}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      {...(rest as ComponentPropsWithoutRef<"button">)}
      className={base}
      style={style}
    >
      {inner}
    </button>
  );
}
