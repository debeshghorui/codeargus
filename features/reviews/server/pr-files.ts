import { getGithubApp } from "@/features/github/utils/github-app";
import { PullRequestFile } from "../types/review";

export async function getPullRequestFiles(
    installationId: number,
    repoFullName: string,
    prNumber: number
): Promise<PullRequestFile[]> {
    const app = await getGithubApp();
    const octokit = await app.getInstallationOctokit(installationId);

    const [owner, repo]= repoFullName.split("/");

    const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/pulls/{pull_number}/files",
        { owner, repo, pull_number: prNumber, per_page: FILES_PER_PAGE }
    )

    return data.map((file) => ({
        filePath: file.filename,
        patch: file.patch,
    }));
}