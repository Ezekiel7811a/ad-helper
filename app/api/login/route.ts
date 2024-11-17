import { NextRequest, NextResponse } from "next/server";
import { env } from "process";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const { username, password } = await request.json();

    if (username === env.USER_NAME && password === env.PASSWORD) {
        const payload = { username };

        if (!env.JWT_SECRET)
            throw new Error("JWT_SECRET environment variable is not set");

        const token = jwt.sign(payload, env.JWT_SECRET, {
            expiresIn: "7d",
        });

        const response = NextResponse.json(
            { message: "Login successful" },
            { status: 200 }
        );

        // Set the session cookie
        response.cookies.set("session", token, {
            httpOnly: true,
            value: token,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });
        return response;
    }

    return Response.json({ message: "Login failed" }, { status: 401 });
}

export async function GET(request: Request) {
    const token = request.headers.get("session");
    if (!token) {
        return Response.json(
            { message: "You are not logged in" },
            { status: 401 }
        );
    }
    if (!env.JWT_SECRET) {
        return Response.json({
            message: "JWT_SECRET environment variable is not set",
        });
    }

    try {
        jwt.verify(token, env.JWT_SECRET);
        return Response.json({ message: "You are logged in" }, { status: 200 });
    } catch (err) {
        const errorMessage =
            err instanceof Error ? err.message : "Unknown error";
        return Response.json(errorMessage, { status: 401 });
    }
}
