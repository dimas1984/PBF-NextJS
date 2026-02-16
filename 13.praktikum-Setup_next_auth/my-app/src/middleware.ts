import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

export function MainMiddleware(request: NextRequest) {
   const res = NextResponse.next();
   return res;
}

// Middleware ini akan memeriksa apakah pengguna sudah login sebelum mengakses halaman profile
export default withAuth(MainMiddleware, ["/profile"]);


