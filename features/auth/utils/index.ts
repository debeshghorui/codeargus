export const SIGN_IN_URL = "/sign-in";
export const DEFAULT_AUTH_CALLBACK_URL = "/dashboard";

export function getSafeCallbackPath(callbackURL: string): string {
    // Must start with `/` but not `//` - the latter is treated as an external URL by Browser
    if (callbackURL?.startsWith("/") && !callbackURL.startsWith("//")) {
        return callbackURL;
    }

    return DEFAULT_AUTH_CALLBACK_URL;
}