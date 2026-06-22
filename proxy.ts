import type { NextRequest } from "next/server";

import { handelAuthProxy } from "@/features/auth/utils/auth-proxy";

export async function proxy(request: NextRequest) {
    return handelAuthProxy(request);
}

export const config = {
    matcher: [
        "/sign-in",
        "/dashboard",
        "/dashboard/:path*",
    ],
}