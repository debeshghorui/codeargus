import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    AiBrainIcon,
    AlertCircleIcon,
    ArrowRight01Icon,
    ChartBarLineIcon,
    Clock01Icon,
    File01Icon,
    FlashIcon,
    GithubIcon,
    GitBranchIcon,
    QuoteUpIcon,
    SecurityCheckIcon,
    SparklesIcon,
    Tick02Icon,
    UserBlock01Icon,
} from "@hugeicons/core-free-icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LandingFaq } from "@/features/landing/components/landing-faq";
import { LandingLogo } from "@/features/landing/components/landing-logo";
import {
    HoverLift,
    Reveal,
} from "@/features/landing/components/landing-motion";
import { LandingMobileCta } from "@/features/landing/components/landing-mobile-cta";
import { LandingNavbar } from "@/features/landing/components/landing-navbar";
import { LandingPrCard } from "@/features/landing/components/landing-pr-card";
import { cn } from "@/lib/utils";

function Icon({
    icon,
    className,
}: {
    icon: typeof FlashIcon;
    className?: string;
}) {
    return <HugeiconsIcon icon={icon} strokeWidth={2} className={className} />;
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            {children}
        </p>
    );
}

function SectionHeader({
    eyebrow,
    title,
    description,
    align = "center",
}: {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "center" | "left";
}) {
    const centered = align === "center";

    return (
        <div className={cn(!centered && "text-left")}>
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2
                className={cn(
                    "landing-headline mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl",
                    centered && "mx-auto max-w-2xl",
                )}
            >
                {title}
            </h2>
            <div
                className={cn(
                    "mt-4 flex items-center gap-3",
                    centered ? "landing-section-rule" : "",
                )}
                aria-hidden
            >
                {!centered ? (
                    <>
                        <span className="landing-section-rule-dot" />
                        <span className="h-px w-12 bg-border sm:w-16" />
                    </>
                ) : (
                    <span className="landing-section-rule-dot" />
                )}
            </div>
            {description ? (
                <p
                    className={cn(
                        "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
                        centered && "mx-auto max-w-2xl",
                    )}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
}

function PrimaryCta({
    label = "Start reviewing PRs free",
    className,
}: {
    label?: string;
    className?: string;
}) {
    return (
        <Button
            asChild
            size="lg"
            className={cn(
                "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
                className,
            )}
        >
            <Link href="/sign-in">
                <Icon icon={GithubIcon} className="size-4" />
                {label}
            </Link>
        </Button>
    );
}

function Hero() {
    return (
        <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center overflow-hidden border-b border-border">
            <div className="landing-grid-bg pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_60%)]" />
            <div className="relative mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <div
                        className="landing-hero-in mb-5"
                        style={{ "--hero-delay": "80ms" } as React.CSSProperties}
                    >
                        <Badge variant="outline" className="gap-1.5 px-3 py-1">
                            <Icon
                                icon={SparklesIcon}
                                className="landing-sparkle-icon size-3 text-primary"
                            />
                            AI reviews on every GitHub PR
                        </Badge>
                    </div>
                    <h1
                        className="landing-headline landing-hero-in text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]"
                        style={{ "--hero-delay": "160ms" } as React.CSSProperties}
                    >
                        Find and fix bugs{" "}
                        <span className="text-primary">before merge</span>
                    </h1>
                    <p
                        className="landing-hero-in mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
                        style={{ "--hero-delay": "240ms" } as React.CSSProperties}
                    >
                        CodeArgus reviews every pull request in under 30 seconds —
                        flagging security flaws, logic errors, and regressions
                        so your team ships with confidence.
                    </p>
                    <div
                        className="landing-hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                        style={{ "--hero-delay": "320ms" } as React.CSSProperties}
                    >
                        <PrimaryCta />
                        <Button asChild size="lg" variant="outline" className="group">
                            <a href="#how-it-works">
                                See how it works
                                <Icon
                                    icon={ArrowRight01Icon}
                                    className="landing-arrow-nudge size-4"
                                />
                            </a>
                        </Button>
                    </div>
                    <p
                        className="landing-hero-in mt-4 font-mono text-[10px] text-muted-foreground"
                        style={{ "--hero-delay": "400ms" } as React.CSSProperties}
                    >
                        Free for open source · No credit card required
                    </p>
                </div>
                <div
                    className="landing-hero-in landing-pr-glow relative mx-auto w-full max-w-lg lg:max-w-none lg:mx-0"
                    style={{ "--hero-delay": "280ms" } as React.CSSProperties}
                >
                    <div className="absolute -top-3 right-0 z-10 hidden sm:block">
                        <Card size="sm" className="landing-float border-primary/20 shadow-md">
                            <CardContent className="flex items-center gap-2 py-2">
                                <Icon
                                    icon={Clock01Icon}
                                    className="size-3.5 text-primary"
                                />
                                <span className="font-mono text-[10px] text-muted-foreground">
                                    reviewed in{" "}
                                    <span className="text-foreground">2.4s</span>
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                    <LandingPrCard />
                    <div className="absolute -bottom-3 left-0 z-10 hidden sm:block">
                        <Card size="sm" className="landing-float-delayed border-destructive/20 shadow-md">
                            <CardContent className="flex items-center gap-2 py-2">
                                <Icon
                                    icon={SecurityCheckIcon}
                                    className="size-3.5 text-destructive"
                                />
                                <span className="font-mono text-[10px] text-muted-foreground">
                                    <span className="text-destructive">3</span>{" "}
                                    issues found
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LanguageSupport() {
    const languages = [
        "TypeScript",
        "JavaScript",
        "Python",
        "Go",
        "Rust",
        "Java",
        "Ruby",
        "PHP",
        "C#",
        "Kotlin",
        "Swift",
    ];

    const capabilities = [
        { value: "<30s", label: "review time" },
        { value: "12+", label: "languages" },
        { value: "24/7", label: "on every push" },
        { value: "Inline", label: "PR comments" },
    ];

    return (
        <section id="languages" className="border-b border-border bg-card">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Works with your stack
                    </p>
                    <h2 className="landing-headline mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                        Reviews adapt to the languages in each PR
                    </h2>
                </Reveal>
                <Reveal delay={80}>
                    <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
                        {languages.map((lang) => (
                            <Badge
                                key={lang}
                                variant="outline"
                                className="font-mono text-[11px] tracking-wide"
                            >
                                {lang}
                            </Badge>
                        ))}
                    </div>
                </Reveal>
                <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 divide-x divide-border border border-border bg-background sm:grid-cols-4">
                    {capabilities.map((item, i) => (
                        <Reveal
                            key={item.label}
                            delay={i * 60}
                            className="px-4 py-6 text-center sm:py-7"
                        >
                            <div className="landing-stat-value text-2xl font-semibold tracking-tight sm:text-3xl">
                                {item.value}
                            </div>
                            <div className="mt-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                {item.label}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Problem() {
    const pains = [
        {
            icon: Clock01Icon,
            title: "Reviews take hours",
            desc: "PRs sit open while reviewers context-switch between meetings and deep work.",
        },
        {
            icon: UserBlock01Icon,
            title: "Standards drift",
            desc: "What gets flagged on Monday is ignored on Friday when the deadline hits.",
        },
        {
            icon: AlertCircleIcon,
            title: "Security slips through",
            desc: "Obvious vulnerabilities merge because nobody had time for a thorough pass.",
        },
        {
            icon: SecurityCheckIcon,
            title: "Reviewers burn out",
            desc: "Seniors spend hours on typos and null checks instead of architecture.",
        },
    ];

    return (
        <section className="border-b border-border py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <SectionHeader
                        eyebrow="The problem"
                        title="Manual reviews don't scale with your velocity"
                        description="Every team knows the pain — fast shipping and thorough reviews rarely coexist without a tradeoff."
                    />
                </Reveal>
                <div className="mt-14 grid gap-4 sm:grid-cols-2">
                    {pains.map((item, i) => (
                        <Reveal key={item.title} delay={i * 80}>
                            <div className="landing-pain-card flex gap-5 p-6">
                                <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-muted/40 text-destructive">
                                    <Icon icon={item.icon} className="size-4" />
                                </span>
                                <div>
                                    <h3 className="text-sm font-medium">{item.title}</h3>
                                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReviewTypes() {
    const types = [
        {
            badge: "security",
            variant: "destructive" as const,
            title: "Vulnerability scanning",
            desc: "Injection flaws, auth bypasses, secret leaks, and OWASP Top 10 patterns.",
            file: "api/users/route.ts",
        },
        {
            badge: "logic",
            variant: "outline" as const,
            title: "Logic & correctness",
            desc: "Race conditions, null paths, off-by-one errors, and unreachable branches.",
            file: "lib/checkout.ts",
        },
        {
            badge: "performance",
            variant: "secondary" as const,
            title: "Performance hints",
            desc: "N+1 queries, unnecessary re-renders, blocking I/O, and hot-path allocations.",
            file: "hooks/useData.ts",
        },
    ];

    return (
        <section id="reviews" className="border-b border-border bg-muted/30 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <SectionHeader
                        eyebrow="Review coverage"
                        title="Every PR, every angle"
                        description="Inline comments on the exact lines that matter — not generic summaries pasted at the bottom."
                    />
                </Reveal>
                <div className="mt-14 grid gap-4 md:grid-cols-3">
                    {types.map((item, i) => (
                        <Reveal key={item.title} delay={i * 100}>
                            <HoverLift>
                                <Card className="h-full border-border/80 bg-card transition-colors duration-300 hover:border-primary/30 hover:ring-primary/20">
                                    <CardHeader className="gap-4">
                                        <div className="flex items-center justify-between gap-2">
                                            <Badge variant={item.variant}>
                                                {item.badge}
                                            </Badge>
                                            <span className="truncate font-mono text-[10px] text-muted-foreground">
                                                {item.file}
                                            </span>
                                        </div>
                                        <CardTitle className="text-base">{item.title}</CardTitle>
                                        <CardDescription className="leading-relaxed">
                                            {item.desc}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </HoverLift>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Features() {
    const items = [
        {
            icon: FlashIcon,
            title: "Instant PR reviews",
            desc: "Triggered on every push. Full diff analysis in under 30 seconds.",
            bullets: [
                "Inline diff comments",
                "Change summary on the PR",
                "Suggested fix patches",
            ],
        },
        {
            icon: SecurityCheckIcon,
            title: "Security & bug detection",
            desc: "Flags vulnerabilities, logic bugs, and risky patterns before they reach main.",
            bullets: [
                "OWASP coverage",
                "Secret leak detection",
                "Dependency alerts",
            ],
        },
        {
            icon: ChartBarLineIcon,
            title: "Team dashboard",
            desc: "Track review health across repos from one workspace.",
            bullets: [
                "Per-repo metrics",
                "Issue breakdowns",
                "Review history",
            ],
        },
    ];

    return (
        <section id="features" className="border-b border-border py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <SectionHeader
                        eyebrow="Features"
                        title="Ship safer without slowing down"
                        description="Automated first-pass reviews so your team focuses on architecture and product — not typos."
                    />
                </Reveal>
                <div className="mt-14 grid gap-4 lg:grid-cols-3">
                    {items.map(({ icon, title, desc, bullets }, i) => (
                        <Reveal key={title} delay={i * 100}>
                            <HoverLift>
                                <Card
                                    className={cn(
                                        "group h-full border-border/80 bg-card transition-all duration-300 hover:border-primary/30 hover:ring-primary/20",
                                        i === 0 && "landing-feature-spotlight lg:row-span-1",
                                    )}
                                >
                                    <CardHeader className="gap-4">
                                        <span className="flex size-11 items-center justify-center border border-border bg-muted/50 text-primary transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/30">
                                            <Icon icon={icon} className="size-5" />
                                        </span>
                                        <CardTitle className="text-base">{title}</CardTitle>
                                        <CardDescription className="leading-relaxed">
                                            {desc}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2.5">
                                            {bullets.map((b) => (
                                                <li
                                                    key={b}
                                                    className="flex items-start gap-2.5 text-xs text-muted-foreground"
                                                >
                                                    <Icon
                                                        icon={Tick02Icon}
                                                        className="mt-0.5 size-3.5 shrink-0 text-primary"
                                                    />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </HoverLift>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    const steps = [
        {
            icon: GithubIcon,
            title: "Connect GitHub",
            desc: "Install the app on your org and select repos to enable.",
        },
        {
            icon: GitBranchIcon,
            title: "Open a pull request",
            desc: "Push commits as usual. CodeArgus triggers on every PR update.",
        },
        {
            icon: AiBrainIcon,
            title: "Review & merge",
            desc: "Get inline comments and a summary. Fix, discuss, ship.",
        },
    ];

    return (
        <section
            id="how-it-works"
            className="border-b border-border bg-muted/30 py-20 sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <SectionHeader
                        eyebrow="How it works"
                        title="Up and running in three steps"
                        description="Connect once. Every PR after that gets a first-pass review automatically."
                    />
                </Reveal>
                <div className="relative mt-14">
                    <div className="landing-step-rail pointer-events-none hidden md:block" aria-hidden />
                    <div className="grid gap-6 md:grid-cols-3">
                        {steps.map((step, i) => (
                            <Reveal key={step.title} delay={i * 120}>
                                <HoverLift>
                                    <Card className="group relative z-[1] h-full border-border/80 bg-card transition-all duration-300 hover:border-primary/30">
                                        <CardHeader className="gap-4">
                                            <div className="flex items-center gap-3">
                                                <span className="flex size-11 items-center justify-center border border-border bg-background text-primary shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
                                                    <Icon
                                                        icon={step.icon}
                                                        className="size-5 transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                </span>
                                            </div>
                                            <CardTitle className="text-base">
                                                {step.title}
                                            </CardTitle>
                                            <CardDescription className="leading-relaxed">
                                                {step.desc}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </HoverLift>
                            </Reveal>
                        ))}
                    </div>
                </div>
                <Reveal delay={360} className="mt-14 text-center">
                    <PrimaryCta label="Connect GitHub — it's free" />
                </Reveal>
            </div>
        </section>
    );
}

function Comparison() {
    const rows = [
        {
            label: "Time to first feedback",
            manual: "Hours to days",
            codeargus: "< 30 seconds",
        },
        {
            label: "Consistency across PRs",
            manual: "Varies by reviewer",
            codeargus: "Same standards every time",
        },
        {
            label: "Security pattern coverage",
            manual: "Depends on expertise",
            codeargus: "Always-on OWASP checks",
        },
        {
            label: "Available",
            manual: "Business hours",
            codeargus: "24 / 7 on every push",
        },
    ];

    return (
        <section className="border-b border-border py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
                    <Reveal direction="right">
                        <SectionHeader
                            align="left"
                            eyebrow="Why CodeArgus"
                            title="Your first reviewer, not your only one"
                            description="Manual reviews are essential — but they're slow, inconsistent, and easy to skip when deadlines hit. CodeArgus handles the first pass so nothing slips through."
                        />
                    </Reveal>
                    <Reveal delay={120}>
                        <Card className="overflow-hidden p-0">
                            <div className="grid grid-cols-3 border-b border-border bg-muted/40 text-[10px] font-medium uppercase tracking-wider">
                                <div className="px-4 py-3 text-muted-foreground" />
                                <div className="border-l border-border px-4 py-3 text-muted-foreground">
                                    Manual review
                                </div>
                                <div className="border-l border-border px-4 py-3 text-primary">
                                    CodeArgus
                                </div>
                            </div>
                            {rows.map((row, i) => (
                                <div
                                    key={row.label}
                                    className={cn(
                                        "landing-comparison-row group grid grid-cols-3 text-xs",
                                        i < rows.length - 1 &&
                                            "border-b border-border",
                                    )}
                                >
                                    <div className="px-4 py-3.5 text-muted-foreground">
                                        {row.label}
                                    </div>
                                    <div className="border-l border-border px-4 py-3.5 text-muted-foreground">
                                        {row.manual}
                                    </div>
                                    <div className="landing-comparison-highlight border-l border-border bg-primary/5 px-4 py-3.5 font-medium transition-colors duration-200">
                                        {row.codeargus}
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    const quotes = [
        {
            quote: "We cut review turnaround from half a day to minutes. The security catches alone paid for themselves in the first week.",
            author: "Engineering lead",
            org: "Series B fintech",
            initials: "EL",
        },
        {
            quote: "It catches the boring stuff — null checks, leaked keys, bad imports — so our seniors can actually review architecture.",
            author: "Staff engineer",
            org: "Developer tools startup",
            initials: "SE",
        },
        {
            quote: "Onboarding new repos takes one click. Every PR gets the same bar for quality without us writing custom CI rules.",
            author: "Platform team",
            org: "Open-source maintainer",
            initials: "PT",
        },
    ];

    return (
        <section className="border-b border-border bg-card py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <SectionHeader
                        eyebrow="Teams"
                        title="Trusted by developers who ship daily"
                    />
                </Reveal>
                <div className="mt-14 grid gap-4 md:grid-cols-3">
                    {quotes.map((item, i) => (
                        <Reveal key={item.author} delay={i * 100}>
                            <HoverLift>
                                <Card className="group flex h-full flex-col border-border/80 bg-background transition-all duration-300 hover:border-primary/20">
                                    <CardHeader className="gap-4">
                                        <Icon
                                            icon={QuoteUpIcon}
                                            className="size-4 text-primary/70"
                                        />
                                        <CardDescription className="text-sm leading-relaxed text-foreground/85">
                                            &ldquo;{item.quote}&rdquo;
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="mt-auto pt-0">
                                        <Separator className="mb-4" />
                                        <div className="flex items-center gap-3">
                                            <span className="landing-avatar">
                                                {item.initials}
                                            </span>
                                            <div>
                                                <p className="text-xs font-medium">
                                                    {item.author}
                                                </p>
                                                <p className="font-mono text-[10px] text-muted-foreground">
                                                    {item.org}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </HoverLift>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CtaBanner() {
    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal>
                    <Card className="relative overflow-hidden border-primary/25 bg-muted/30">
                        <div className="landing-cta-grid pointer-events-none absolute inset-0 opacity-60" />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_12%,transparent),transparent_70%)]" />
                        <CardContent className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
                            <h2 className="landing-headline text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                                Ready to ship{" "}
                                <span className="text-primary">cleaner code?</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Connect GitHub, pick your repos, and get your first
                                AI review on the next pull request — free, no card
                                required.
                            </p>
                            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <PrimaryCta />
                                <Button asChild size="lg" variant="ghost">
                                    <Link href="/sign-in">
                                        <Icon icon={File01Icon} className="size-4" />
                                        Sign in
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Reveal>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30 pb-20 sm:pb-12">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <LandingLogo />
                        <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
                            AI-powered code reviews on every GitHub pull
                            request. Catch bugs and security issues before they
                            reach production.
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-medium">Product</p>
                        <nav className="mt-3 flex flex-col gap-2 text-xs text-muted-foreground">
                            <a
                                href="#features"
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                How it works
                            </a>
                            <a
                                href="#faq"
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                FAQ
                            </a>
                        </nav>
                    </div>
                    <div>
                        <p className="text-xs font-medium">Legal</p>
                        <nav className="mt-3 flex flex-col gap-2 text-xs text-muted-foreground">
                            <a
                                href="#"
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                GitHub
                            </a>
                        </nav>
                    </div>
                </div>
                <Separator className="my-8" />
                <p className="font-mono text-[10px] text-muted-foreground">
                    © {new Date().getFullYear()} CodeArgus. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export function LandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <LandingNavbar />
            <main>
                <Hero />
                <LanguageSupport />
                <Problem />
                <ReviewTypes />
                <Features />
                <HowItWorks />
                <Comparison />
                <Testimonials />
                <LandingFaq />
                <CtaBanner />
            </main>
            <Footer />
            <LandingMobileCta />
        </div>
    );
}
