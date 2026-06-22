"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { DEFAULT_AUTH_CALLBACK_URL, SIGN_IN_URL, getSafeCallbackPath } from "../utils/index"

// Sign in with GitHub
export async function signInWithGitHub(formData: FormData) {
    const callbackURL = formData.get("callbackUrl");

    const redirectTo = getSafeCallbackPath(
        typeof callbackURL === "string" ? callbackURL : DEFAULT_AUTH_CALLBACK_URL,
    );

    const result = await auth.api.signInSocial({
        body: {
            provider: "github",
            callbackURL: redirectTo,
        },
        headers: await headers(),
    });

    if (result.url) {
        redirect(result.url);
    }
}

// Get server session
export async function getServerSession() {
    return await auth.api.getSession({
        headers: await headers(),
    })
}

// Require authentication
export async function requireAuth(redirectTo = SIGN_IN_URL) {
    const session = await getServerSession();

    if (!session) {
        redirect(redirectTo);
    }

    return session;
}

// Require unauthentication
export async function requireUnauth(redirectTo = DEFAULT_AUTH_CALLBACK_URL) {
    const session = await getServerSession();

    if (session) {
        redirect(redirectTo);
    }

    // return session;
}