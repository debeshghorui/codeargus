"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/features/landing/components/landing-motion";

const FAQ_ITEMS = [
    {
        question: "How does CodeArgus access my repositories?",
        answer: "You install the CodeArgus GitHub App on your org or account. We only request the permissions needed to read pull request diffs and post review comments — nothing more.",
    },
    {
        question: "Does it replace human code reviewers?",
        answer: "No. CodeArgus handles the first pass — catching obvious bugs, security issues, and style problems — so your team can focus on architecture, product decisions, and nuanced feedback.",
    },
    {
        question: "Which languages are supported?",
        answer: "TypeScript, JavaScript, Python, Go, Rust, Java, Ruby, PHP, C#, Kotlin, Swift, and more. Reviews adapt to the languages detected in each PR.",
    },
    {
        question: "Is my code sent to third-party AI providers?",
        answer: "Diff content from pull requests is processed to generate reviews. Check our privacy policy for full details on data handling and retention.",
    },
    {
        question: "Can I disable reviews on specific repos?",
        answer: "Yes. From the dashboard you choose which repositories have CodeArgus enabled. You can add or remove repos at any time without reinstalling the app.",
    },
] as const;

export function LandingFaq() {
    return (
        <section id="faq" className="border-t border-border bg-muted/30 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                        FAQ
                    </p>
                    <h2 className="landing-headline mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                        Common questions
                    </h2>
                    <div className="landing-section-rule mt-4" aria-hidden>
                        <span className="landing-section-rule-dot" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Everything you need to know before connecting your first
                        repository.
                    </p>
                </Reveal>
                <Reveal delay={120}>
                    <Accordion
                        type="single"
                        collapsible
                        className="mx-auto mt-14 max-w-2xl border border-border bg-card shadow-sm"
                    >
                        {FAQ_ITEMS.map((item) => (
                            <AccordionItem key={item.question} value={item.question}>
                                <AccordionTrigger className="px-4 text-left text-sm transition-colors duration-200 hover:no-underline hover:text-primary">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-4 text-sm text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Reveal>
            </div>
        </section>
    );
}
