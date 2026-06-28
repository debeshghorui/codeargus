import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    SecurityCheckIcon,
    Tick02Icon,
} from "@hugeicons/core-free-icons";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import GithubSignInForm from "@/features/auth/components/github-sign-in-form";
import { LandingLogo } from "@/features/landing/components/landing-logo";

const PERMISSIONS = [
    { scope: "read", resource: "pull request diffs" },
    { scope: "write", resource: "review comments" },
    { scope: "read", resource: "repository metadata" },
] as const;

const HIGHLIGHTS = [
    "Inline comments on every PR",
    "Security and logic checks",
    "No credit card required",
] as const;

type SignInScreenProps = {
    callbackUrl: string;
};

export function SignInScreen({ callbackUrl }: SignInScreenProps) {
    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <aside className="relative hidden overflow-hidden border-r border-border lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
                <div className="landing-grid-bg pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklch,var(--primary)_16%,transparent),transparent_55%)]" />

                <div className="relative">
                    <LandingLogo />
                </div>

                <div className="relative max-w-md">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                        GitHub App
                    </p>
                    <h1 className="landing-headline mt-4 text-3xl font-semibold leading-tight tracking-tight xl:text-4xl">
                        Connect once.
                        <br />
                        Review every PR.
                    </h1>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        CodeArgus installs as a GitHub App on your account or
                        organization — then reviews pull requests automatically.
                    </p>

                    <div className="auth-permissions mt-8 border border-border bg-card/80 p-4 font-mono text-[11px] leading-relaxed backdrop-blur-sm sm:text-xs">
                        <p className="text-muted-foreground">permissions {"{"}</p>
                        {PERMISSIONS.map((item) => (
                            <p key={item.resource} className="pl-4">
                                <span className="text-primary">{item.scope}</span>
                                <span className="text-muted-foreground/70">
                                    {" "}
                                    →{" "}
                                </span>
                                <span className="text-foreground/90">
                                    {item.resource}
                                </span>
                            </p>
                        ))}
                        <p className="text-muted-foreground">{"}"}</p>
                    </div>

                    <ul className="mt-8 space-y-3">
                        {HIGHLIGHTS.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-2.5 text-xs text-muted-foreground"
                            >
                                <HugeiconsIcon
                                    icon={Tick02Icon}
                                    strokeWidth={2}
                                    className="size-3.5 shrink-0 text-primary"
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="relative font-mono text-[10px] text-muted-foreground">
                    © {new Date().getFullYear()} CodeArgus
                </p>
            </aside>

            <div className="relative flex min-h-screen flex-col bg-background">
                <div className="landing-grid-bg pointer-events-none absolute inset-0 opacity-40 lg:hidden" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_10%,transparent),transparent_60%)] lg:hidden" />

                <header className="relative flex items-center justify-between px-4 py-4 sm:px-6">
                    <div className="lg:invisible lg:pointer-events-none">
                        <LandingLogo />
                    </div>
                    <ModeToggle />
                </header>

                <main className="relative flex flex-1 flex-col items-center justify-center px-4 pb-12 sm:px-6">
                    <div className="w-full max-w-[400px]">
                        <div className="border border-border bg-card p-8 shadow-sm sm:p-10">
                            <div className="mb-2 flex size-10 items-center justify-center border border-border bg-primary/10 text-primary">
                                <HugeiconsIcon
                                    icon={SecurityCheckIcon}
                                    strokeWidth={2}
                                    className="size-5"
                                />
                            </div>

                            <h2 className="landing-headline mt-5 text-2xl font-semibold tracking-tight">
                                Sign in
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                Use GitHub to connect your repositories and start
                                receiving AI reviews on pull requests.
                            </p>

                            <Separator className="my-8" />

                            <GithubSignInForm callbackUrl={callbackUrl} />

                            <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
                                We only request permissions needed to read diffs
                                and post comments. Revoke access anytime from
                                GitHub settings.
                            </p>
                        </div>

                        <p className="mt-6 text-center">
                            <Link
                                href="/"
                                className="font-mono text-[11px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                            >
                                ← Back to home
                            </Link>
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}
