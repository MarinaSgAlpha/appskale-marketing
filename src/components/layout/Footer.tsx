import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Logo } from "@/components/ui/Logo";
import { RadialGlow } from "@/components/ui/RadialGlow";
import { URLS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-purple-100/60 pt-16 pb-10 md:pt-20 md:pb-14">
      <RadialGlow
        className="size-[700px] -top-40 left-1/2 -translate-x-1/2"
        color="purple"
        opacity={0.45}
        blur={140}
      />

      <Container>
        <Card variant="gradient" className="relative overflow-hidden">
          <div className="relative px-6 py-14 text-center sm:px-12 md:py-20">
            <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight text-purple-900 sm:text-4xl md:text-[44px]">
              Ready to scale profitably
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-purple-800/85">
              Stop guessing which keywords work. See exactly which Apple Search
              Ads keywords drive paying users, not just installs
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={URLS.signup} showArrow>
                Get Started Free
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-14 flex flex-col gap-6 border-t border-purple-200/60 pt-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-3 text-sm text-purple-800/75">
              Apple Search Ads attribution and ROAS tracking for iOS apps
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-purple-700 md:items-end">
            <Link
              href="/terms"
              className="underline-offset-4 hover:underline hover:text-purple-900"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/llms.txt"
              className="underline-offset-4 hover:underline hover:text-purple-900"
            >
              llms.txt
            </Link>
            <p className="mt-2 text-xs text-purple-700/70">
              © 2026. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
