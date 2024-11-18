import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { env } from "process";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    if (env.ENVIRONMENT === "dev") {
        return NextResponse.next();
    }

    const cookies = request.cookies.get("session")?.value;
    if (!cookies) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    const res = await fetch(new URL("/api/login", request.url), {
        headers: {
            session: cookies,
        },
    });

    if (res.status === 200) {
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/((?!login|_next|api).*)",
};
