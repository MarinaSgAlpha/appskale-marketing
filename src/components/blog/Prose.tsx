import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type WithChildren = { children: ReactNode; className?: string };

export function P({ children, className }: WithChildren) {
  return (
    <p
      className={cn(
        "mt-5 text-[15px] leading-[1.65] text-purple-800/85 sm:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function H2({ children, id, className }: WithChildren & { id?: string }) {
  return (
    <h2
      id={id}
      className={cn(
        "mt-14 mb-3 text-[26px] font-semibold leading-[1.05] -tracking-[0.02em] text-purple-900 sm:text-[32px] md:text-[36px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ children, id, className }: WithChildren & { id?: string }) {
  return (
    <h3
      id={id}
      className={cn(
        "mt-10 mb-2 text-[16px] font-semibold leading-[1.25] -tracking-[0.02em] text-purple-900 sm:text-[17px] md:text-[18px]",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ children, id, className }: WithChildren & { id?: string }) {
  return (
    <h4
      id={id}
      className={cn(
        "mt-12 mb-2 text-[19px] font-bold leading-snug -tracking-[0.02em] text-purple-900 sm:text-[22px]",
        className,
      )}
    >
      {children}
    </h4>
  );
}

export function UL({ children, className }: WithChildren) {
  return (
    <ul
      className={cn(
        "mt-5 list-disc space-y-2 pl-6 text-[15px] leading-[1.65] text-purple-800/85 marker:text-purple-400 sm:text-base",
        className,
      )}
    >
      {children}
    </ul>
  );
}

export function OL({ children, className }: WithChildren) {
  return (
    <ol
      className={cn(
        "mt-5 list-decimal space-y-2 pl-6 text-[15px] leading-[1.65] text-purple-800/85 marker:text-purple-400 sm:text-base",
        className,
      )}
    >
      {children}
    </ol>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="pl-1">{children}</li>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-purple-900">{children}</strong>;
}

export function Em({ children }: { children: ReactNode }) {
  return <em className="italic">{children}</em>;
}

type AProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
};

export function A({ children, href, external, className }: AProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const cls = cn(
    "font-medium text-purple-500 underline decoration-purple-300 underline-offset-[3px] transition-colors hover:text-purple-700 hover:decoration-purple-500",
    className,
  );
  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

type ImageBlockProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export function InlineImage({ src, alt, width, height, caption }: ImageBlockProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-purple-200/50 bg-purple-50 shadow-[0_8px_24px_-16px_rgba(39,31,54,0.18)]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 760px, 100vw"
        className="h-auto w-full"
      />
      {caption ? (
        <figcaption className="border-t border-purple-200/50 bg-white/60 px-4 py-3 text-center text-[13px] italic text-purple-800/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function Banner({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative my-14 h-[260px] overflow-hidden rounded-3xl border border-purple-200/50 bg-purple-50 shadow-[0_12px_32px_-16px_rgba(39,31,54,0.22)] sm:h-[360px] md:h-[400px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 760px, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-2 border-purple-300/70 pl-5 text-[15px] italic leading-[1.7] text-purple-800/70 sm:text-base">
      {children}
    </blockquote>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return (
    <pre className="my-6 overflow-x-auto rounded-2xl bg-[#161820] px-5 py-5 text-[13.5px] leading-[1.5] text-[#eee] shadow-[0_8px_24px_-16px_rgba(39,31,54,0.22)] sm:text-[14px]">
      <code className="font-mono">{children}</code>
    </pre>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded bg-purple-100 px-1.5 py-0.5 font-mono text-[12.5px] text-purple-900">
      {children}
    </code>
  );
}

type TableProps = {
  headers: ReactNode[];
  rows: ReactNode[][];
};

export function Table({ headers, rows }: TableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-purple-200/55">
      <table className="w-full border-collapse text-[14px] leading-[1.5] sm:text-[15px]">
        <thead>
          <tr className="bg-purple-100/40">
            {headers.map((h, i) => (
              <th
                key={i}
                className={cn(
                  "px-3 py-2.5 text-left align-top font-semibold text-purple-900",
                  i > 0 && "border-l border-purple-200/55",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-t border-purple-200/55">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={cn(
                    "px-3 py-2.5 align-top text-purple-800/85",
                    ci > 0 && "border-l border-purple-200/55",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
