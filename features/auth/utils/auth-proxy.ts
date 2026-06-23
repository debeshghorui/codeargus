import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import {
    SIGN_IN_URL,
    DEFAULT_AUTH_CALLBACK_URL,
    getSafeCallbackPath,
} from "./index";
import { NextRequest, NextResponse } from "next/server";

// Redirect to sign in page
function redirectToSignIn(request: NextRequest, pathName: string) {
    const signInUrl = new URL(SIGN_IN_URL, request.url);
    // Include query string so filters/search params survive the round-trip to the sign in page
    signInUrl.searchParams.set(
        "callbackUrl",
        `${pathName}${request.nextUrl.search}`
    );

    return NextResponse.redirect(signInUrl);
}

// Get the path to redirect to after authentication
function getPostAuthRedirectPath(request: NextRequest): string {
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl");

    return getSafeCallbackPath(
        typeof callbackUrl === "string"
            ? callbackUrl
            : DEFAULT_AUTH_CALLBACK_URL
    );
}

// Handle auth proxy
// "/" is always public
// "/sign-in" : logged-in users are redirected to the dashboard;
// Guests are redirected to the sign in page
export async function handelAuthProxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname === "/") {
        return NextResponse.next();
    }

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (pathname === SIGN_IN_URL) {
        if (session) {
            const redirectPath = getPostAuthRedirectPath(request);
            return NextResponse.redirect(new URL(redirectPath, request.url));
        }

        return NextResponse.next();
    }

    // Protected routes
    if (!session) {
        return redirectToSignIn(request, pathname);
    }

    return NextResponse.next();
}
