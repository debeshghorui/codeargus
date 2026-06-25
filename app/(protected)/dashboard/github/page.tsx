import React from "react";
import { Metadata } from "next";
import { requireAuth } from "@/features/auth/actions";
import { getInstallationStatus } from "@/features/github/server/installation";
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header";
import { GithubConnectCard } from "@/features/github/components/github-connect-card";

export const metadata: Metadata = {
    title: "GitHub App",
    description: "GitHub App",
};

export default async function GithubDashboardPage() {
    const session = await requireAuth();
    const installation = await getInstallationStatus(session.user.id);

    return (
        <>
        <DashboardHeader
            title="GitHub App"
            description={
                installation.connected
                    ? "Your GitHub App is installed and ready to use."
                    : "Your GitHub App is not installed. Please install it to continue."
            }
        />
        <GithubConnectCard
            userId={session.user.id}
            installation={installation}
        />
        </>
    );
}
