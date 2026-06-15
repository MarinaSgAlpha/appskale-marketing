type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { mark: 22, text: "text-[17px]" },
  md: { mark: 26, text: "text-[19px]" },
  lg: { mark: 32, text: "text-[24px]" },
} as const;

/**
 * AppSkale rocket mark + wordmark.
 * The rocket mark uses the Heroicons "rocket-launch" outline (MIT licensed)
 * adapted with the brand gradient stroke.
 */
export function Logo({ className, variant = "full", size = "md" }: LogoProps) {
  const { mark, text } = sizeMap[size];
  return (
    <span className={className} aria-label="AppSkale" role="img">
      <span className="inline-flex items-center gap-2">
        <RocketMark size={mark} />
        {variant === "full" ? (
          <span
            className={`${text} font-semibold tracking-tight text-purple-900`}
          >
            AppSkale<span className="text-purple-400">.AI</span>
          </span>
        ) : null}
      </span>
    </span>
  );
}

function RocketMark({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="rm-grad"
          x1="2"
          y1="2"
          x2="22"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#999bff" />
          <stop offset="55%" stopColor="#8765d7" />
          <stop offset="100%" stopColor="#da9ef0" />
        </linearGradient>
      </defs>
      <g
        stroke="url(#rm-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </g>
    </svg>
  );
}
