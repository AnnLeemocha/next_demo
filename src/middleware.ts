import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // 根路徑直接跳轉
    // if (pathname === "/") {
    //     return NextResponse.redirect(new URL("/en", request.url));
    // }

    // 可以讀 cookie
    // const accessToken = request.cookies.get("token")?.value;
    // if (!accessToken && pathname !== "/verify") {
    //     return NextResponse.redirect(new URL("/verify", request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ["/"],
};