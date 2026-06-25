import { App } from "octokit";

let githubApp: App | null = null;

export async function getGithubApp(): Promise<App> {
    if (!githubApp) {
        githubApp = new App({
            appId: process.env.GITHUB_APP_ID as string,
            privateKey: process.env.GITHUB_PRIVATE_KEY!.replace(
                /\\n/g,
                "\n"
            ),
            webhooks: {
                secret: process.env.GITHUB_WEBHOOK_SECRET as string,
            },
        });
    }
    return githubApp;
}

export async function getGithubAppInstallationUrl(userId: string) {
    const appName = process.env.GITHUB_APP_NAME as string;

    const url = new URL(`https://github.com/apps/${appName}/installations/new`);
    url.searchParams.set("state", userId);

    return url.toString();
}
