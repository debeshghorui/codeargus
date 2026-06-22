import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from '@/components/ui/card';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldSet
} from '@/components/ui/field';

import GithubSignInForm from '@/features/auth/components/github-sign-in-form';

export const metadata: Metadata = {
    title: 'Sign In',
    description: 'Sign In to your account',
};

type SignInPageProps = {
    searchParams: Promise<{ callbackUrl?: string }>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
    const { callbackUrl } = await searchParams;

    return (
        <Card className="w-full max-w-sm border-border/80 shadow-sm">
            <CardHeader className="items-center text-center">
                <div className="mb-6 flex justify-center pt-2">
                    <Image
                        src="/logoipsum.svg"
                        alt="Chai AI Code Reviewer"
                        width={172}
                        height={172}
                        priority
                        className="text-foreground"
                    />
                </div>
                <CardTitle className="text-base">Welcome back</CardTitle>
                <CardDescription>
                    Sign in with GitHub to review and manage your code.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            <GithubSignInForm callbackUrl={callbackUrl ?? "/"} />
                            <FieldDescription className="text-center">
                                We only request the permissions needed to identify your
                                account. You can revoke access anytime from GitHub settings.
                            </FieldDescription>
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </CardContent>
        </Card>
    );
}