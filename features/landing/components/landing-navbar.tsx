"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { LandingLogo } from "@/features/landing/components/landing-logo";
import { LandingNavLink } from "@/features/landing/components/landing-motion";
import { cn } from "@/lib/utils";

export function LandingNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 border-b transition-all duration-300",
                scrolled
                    ? "border-border bg-background/95 shadow-sm backdrop-blur-lg"
                    : "border-transparent bg-background/60 backdrop-blur-md",
            )}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
                <LandingLogo />
                <nav className="hidden items-center gap-6 md:flex">
                    <LandingNavLink href="#features">Features</LandingNavLink>
                    <LandingNavLink href="#reviews">Reviews</LandingNavLink>
                    <LandingNavLink href="#how-it-works">
                        How it works
                    </LandingNavLink>
                    <LandingNavLink href="#faq">FAQ</LandingNavLink>
                </nav>
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <Link
                        href="/sign-in"
                        className="hidden text-xs text-muted-foreground transition-colors duration-200 hover:text-foreground sm:inline"
                    >
                        Sign in
                    </Link>
                    <Button
                        asChild
                        size="sm"
                        className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Link href="/sign-in">Get started</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
