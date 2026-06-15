"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { URLS } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/apple-search-ads-attribution-setup-guide", label: "Setup Guide" },
  { href: "/#faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("size-[18px]", className)}
    >
      <rect
        x="2.5"
        y="4.5"
        width="15"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 6l7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-5", className)}
    >
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M4 7h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "px-4 pt-4 sm:px-6 sm:pt-5",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 rounded-full px-3 sm:pl-5 sm:pr-3",
          "border border-white/60",
          scrolled
            ? "bg-white/80 shadow-[0_4px_24px_-8px_rgba(39,31,54,0.12)] backdrop-blur-xl"
            : "bg-white/55 backdrop-blur-lg",
        )}
      >
        <Link href="/" aria-label="AppSkale home" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[14px] text-purple-800/85">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 transition-colors hover:bg-purple-50 hover:text-purple-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            aria-label="Contact"
            className="hidden h-10 items-center justify-center rounded-full bg-white px-3 text-purple-700 ring-1 ring-purple-100 transition-colors hover:bg-purple-50 sm:inline-flex"
          >
            <MailIcon />
          </Link>
          <Button
            href={URLS.login}
            variant="secondary"
            size="md"
            className="h-10 px-4"
          >
            Login
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="inline-flex size-10 items-center justify-center rounded-full bg-white text-purple-700 ring-1 ring-purple-100 transition-colors hover:bg-purple-50 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="absolute inset-x-4 top-[72px] rounded-3xl border border-white/70 bg-white/95 p-3 shadow-[0_24px_48px_-12px_rgba(39,31,54,0.18)] backdrop-blur-xl sm:inset-x-6 lg:hidden"
          role="dialog"
          aria-label="Site navigation"
        >
          <ul className="flex flex-col gap-1 text-[15px] text-purple-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center rounded-2xl px-4 py-3 transition-colors hover:bg-purple-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
