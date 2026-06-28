"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LandingMobileCta() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 480);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-lg transition-transform duration-300 sm:hidden",
                visible ? "translate-y-0" : "translate-y-full",
            )}
            aria-hidden={!visible}
        >
            <Button asChild size="lg" className="w-full">
                <Link href="/sign-in">
                    <HugeiconsIcon icon={GithubIcon} strokeWidth={2} className="size-4" />
                    Start reviewing PRs free
                </Link>
            </Button>
        </div>
    );
}
