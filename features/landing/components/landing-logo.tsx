import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ViewIcon } from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";

type LandingLogoProps = {
    className?: string;
};

export function LandingLogo({ className }: LandingLogoProps) {
    return (
        <Link
            href="/"
            className={cn(
                "group flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-90",
                className,
            )}
        >
            <span className="flex size-8 items-center justify-center bg-primary text-primary-foreground ring-1 ring-foreground/10 transition-transform duration-300 group-hover:scale-105">
                <HugeiconsIcon icon={ViewIcon} strokeWidth={2} className="size-4" />
            </span>
            <span className="landing-headline text-sm font-semibold tracking-tight">
                Code<span className="text-primary">Argus</span>
            </span>
        </Link>
    );
}
