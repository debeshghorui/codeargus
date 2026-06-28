"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
    AiBrainIcon,
    GitBranchIcon,
} from "@hugeicons/core-free-icons";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

function Icon({
    icon,
    className,
}: {
    icon: typeof GitBranchIcon;
    className?: string;
}) {
    return <HugeiconsIcon icon={icon} strokeWidth={2} className={className} />;
}

export function LandingPrCard() {
    return (
        <Card className="landing-pr-card relative z-[1] overflow-hidden border-primary/15 shadow-lg ring-1 ring-border/80">
            <div className="pointer-events-none absolute inset-x-0 top-[4.5rem] z-10 h-8 overflow-hidden">
                <div className="landing-scan-line h-full w-full" />
            </div>

            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                    <span className="landing-dot size-2 bg-muted-foreground/30" />
                    <span
                        className="landing-dot size-2 bg-muted-foreground/30"
                        style={{ animationDelay: "0.15s" }}
                    />
                    <span
                        className="landing-dot size-2 bg-muted-foreground/30"
                        style={{ animationDelay: "0.3s" }}
                    />
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                    <Icon icon={GitBranchIcon} className="size-3 text-primary" />
                    feat/add-auth-middleware
                    <Badge variant="outline" className="font-mono text-[10px]">
                        #482
                    </Badge>
                </div>
                <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">
                    +124 −18
                </span>
            </div>

            <div className="font-mono text-[11px] leading-relaxed sm:text-xs">
                <div className="border-b border-border bg-muted/20 px-4 py-2 text-muted-foreground">
                    src/auth/session.ts
                </div>
                <div className="grid grid-cols-[2rem_1fr]">
                    <div className="border-r border-border bg-muted/10 px-2 py-1 text-right text-muted-foreground/60">
                        42
                    </div>
                    <div className="px-3 py-1 text-muted-foreground">
                        <span className="text-muted-foreground/70">
                            export function{" "}
                        </span>
                        verifyToken(token: string) {"{"}
                    </div>
                    <div className="border-r border-border bg-destructive/10 px-2 py-1 text-right text-muted-foreground/60">
                        43
                    </div>
                    <div className="landing-diff-highlight bg-destructive/5 px-3 py-1">
                        <span className="text-destructive">−</span> return
                        jwt.decode(token);
                    </div>
                    <div className="border-r border-border bg-primary/10 px-2 py-1 text-right text-primary/80">
                        44
                    </div>
                    <div className="landing-diff-highlight bg-primary/5 px-3 py-1 [animation-delay:1.2s]">
                        <span className="text-primary">+</span> return
                        jwt.verify(token, process.env.JWT_SECRET);
                    </div>
                </div>
            </div>

            <div className="flex gap-3 border-t border-border bg-muted/20 p-4">
                <span className="landing-ai-avatar flex size-8 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                    <Icon icon={AiBrainIcon} className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium">CodeArgus</span>
                        <Badge variant="destructive">security</Badge>
                        <span className="font-mono text-[10px] text-muted-foreground">
                            <span className="landing-typing-dots">2s ago</span>
                        </span>
                    </div>
                    <p className="landing-comment-text mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        <span className="text-foreground">jwt.decode</span>{" "}
                        doesn&apos;t verify the signature. Use{" "}
                        <span className="text-primary">jwt.verify</span> with
                        your secret before trusting the payload.
                    </p>
                </div>
            </div>
        </Card>
    );
}
