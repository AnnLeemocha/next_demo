// 根目錄下（或 src 內）建立 proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // // 根路徑跳轉到 /en
    // if (pathname === '/') {
    //     return NextResponse.redirect(new URL('/en', request.url));
    // }

    // // 讀取 token cookie
    // const accessToken = request.cookies.get('token')?.value;

    // // 如果沒有 token 且不是 /verify，跳轉到 /verify
    // if (!accessToken && pathname !== '/verify') {
    //     return NextResponse.redirect(new URL('/verify', request.url));
    // }

    // 其他情況繼續處理，返回 next
    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
    // matcher: ['/', '/((?!_next/static|_next/image|favicon.ico).*)'],
};
