import { NextResponse, userAgent } from "next/server";
import type { NextRequest, NextMiddleware } from "next/server";

export const middleware: NextMiddleware = (request: NextRequest) => {
  const requestHeaders: Headers = new Headers(request.headers);

  try {
    const { isBot, device } = userAgent(request);
    const deviceType: string = [
      "mobile",
      "wearable",
      "smarttv",
      "tablet",
    ].includes(device.type || "")
      ? "h5"
      : "web";
    requestHeaders.set("x-is-bot", `${isBot}`);
    requestHeaders.set("x-device-type", deviceType);
  } catch (error) {
    console.info("middleware headers error: ", error);
  }

  // You can also set request headers in NextResponse.rewrite
  const response: NextResponse = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  return response;
};

// Skip public files and API routes
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.svg|favicon.ico|fonts|assets|images|manifest.json|sitemap.xml|robots.txt).*)",
  ],
};
