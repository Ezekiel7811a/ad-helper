import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const allowedIP = ["127.0.0.1"];
    const rawIP = request.headers.get("x-forwarded-for") || request.ip;
    const host = request.headers.get("host"); // Cela montre le domaine ou IP cible
    const requestIP = rawIP?.replace(/^::ffff:/, ""); // Removes the ::ffff: prefix if present

    console.log(`requestIP: ${host}`);

    if (!requestIP) {
        return Response.json(
            { error: "Invalid IP", ip: requestIP, host: host },
            { status: 400 }
        );
    }

    if (!allowedIP.includes(requestIP)) {
        return Response.json(
            { error: "Invalid IP", ip: requestIP, host: host },
            { status: 400 }
        );
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/:path*",
};
