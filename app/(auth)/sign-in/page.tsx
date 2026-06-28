import type { Metadata } from "next";

import { SignInScreen } from "@/features/auth/components/sign-in-screen";

export const metadata: Metadata = {
    title: "Sign in",
    description:
        "Sign in with GitHub to connect CodeArgus and start AI code reviews on your pull requests.",
};

type SignInPageProps = {
    searchParams: Promise<{ callbackUrl?: string }>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
    const { callbackUrl } = await searchParams;

    return <SignInScreen callbackUrl={callbackUrl ?? "/"} />;
}
