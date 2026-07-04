import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PATH_REDIRECTS: Record<string, string> = {
  "/blog/apple-search-ads-roas-revenuecat":
    "/blog/how-to-calculate-apple-search-ads-roas-with-revenuecat",
};

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const url = new URL(request.url);

  const targetPath = PATH_REDIRECTS[url.pathname];
  if (targetPath) {
    const redirectUrl = new URL(request.url);
    redirectUrl.host = "appskale.ai";
    redirectUrl.protocol = "https:";
    redirectUrl.port = "";
    redirectUrl.pathname = targetPath;
    return NextResponse.redirect(redirectUrl, 301);
  }

  if (host === "www.appskale.ai") {
    url.host = "appskale.ai";
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
