import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isLogin = false;
    if (isLogin) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    //return NextResponse.redirect(new URL("/", request.url));
  //return NextResponse.next();
}

export const config = {
  matcher: ["/produk", "/about"],
};


