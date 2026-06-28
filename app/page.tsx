import type { Metadata } from "next";

import { LandingPage } from "@/features/landing/components/landing-page";

export const metadata: Metadata = {
    title: "CodeArgus — AI code reviews on every pull request",
    description:
        "CodeArgus runs automated AI code reviews on every GitHub pull request. Catch bugs, security issues, and style regressions before merge.",
    openGraph: {
        title: "CodeArgus — AI code reviews on every pull request",
        description:
            "Automated AI reviews on every GitHub PR. Catch bugs and security issues before merge.",
        type: "website",
    },
};

export default function Home() {
    return <LandingPage />;
}
