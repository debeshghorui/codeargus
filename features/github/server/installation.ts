import { GithubInstallationStatus } from "@/features/dashboard/lib/types";
import { getGithubApp } from "@/features/github/utils/github-app";
import { prisma } from "@/lib/db";

function getAccountLogin(account: { login?: string; slug?: string } | null | undefined): string | null {
    if (!account) return null;

    if ("login" in account && account.login) {
        return account.login;
    }

    if (account.slug) {
        return account.slug;
    }

    return null;
}

function buildDisconnectStatus(
    connected: boolean = false,
    accountLogin: string | null = null,
    installedAt: string | null = null
): GithubInstallationStatus {
    return {
        connected,
        accountLogin,
        installedAt,
    };
}

export async function getInstallationStatus(
    userId: string
): Promise<GithubInstallationStatus> {
    const installation = await prisma.githubInstallation.findUnique({
        where: { userId },
        include: { user: true },
    });

    if (!installation || !installation.deletedAt || !installation.accountLogin) {
        return buildDisconnectStatus();
    }

    return buildDisconnectStatus(
        true,
        installation.accountLogin,
        installation.createdAt.toISOString()
    );
}

export async function saveInstallation(userId: string, installationId: number) {
    const app = await getGithubApp();

    const { data } = await app.octokit.request(
        "GET /app/installations/{installation_id}",
        {
            installation_id: installationId,
        }
    )

    const accountLogin = getAccountLogin(data.account);

    await prisma.githubInstallation.upsert({
        where: { userId },
        update: {
            installationId,
            accountLogin,
            accountType: data.target_type ?? null,
        },
        create: {
            userId,
            installationId,
            accountLogin,
            accountType: data.target_type ?? null,
        },
    });
}

export async function disconnectInstallation(userId: string) {
    const installation = await prisma.githubInstallation.findUnique({
        where: { userId },
    });

    if (!installation) {
        return;
    }

    const app = await getGithubApp();

    try {
        await app.octokit.request("DELETE /app/installations/{installation_id}", {
            installation_id: installation.installationId,
        });  
    } catch (error) {
        if (
            typeof error === "object" &&
            error !== null &&
            "status" in error &&
            error.status === 404
        ) {
            // Already gone on GitHub — disconnect locally anyway
            console.log("Installation already gone on GitHub — disconnecting locally anyway");
            return;
        } else {
            console.error("Error disconnecting GitHub installation:", error);
            throw error;
        }
    }

    await prisma.githubInstallation.update({
        where: { userId },
        data: {
            accountLogin: null,
            accountType: null,
            installationId: undefined,
            deletedAt: new Date(),
        },
    });
}