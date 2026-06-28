"use client";

import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
};

const OFFSET: Record<NonNullable<RevealProps["direction"]>, string> = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
};

export function Reveal({
    children,
    className,
    delay = 0,
    direction = "up",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            data-visible={visible}
            className={cn(
                "landing-reveal",
                !visible && OFFSET[direction],
                className,
            )}
            style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
        >
            {children}
        </div>
    );
}

type NavLinkProps = {
    href: string;
    children: ReactNode;
};

export function LandingNavLink({ href, children }: NavLinkProps) {
    return (
        <a href={href} className="landing-nav-link group/nav">
            {children}
            <span className="landing-nav-link-line" aria-hidden />
        </a>
    );
}

export function HoverLift({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("landing-hover-lift", className)}>{children}</div>
    );
}
