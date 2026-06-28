import { inngest } from "../client";

import { prisma } from "@/lib/db";
import { getPullRequestFiles } from "@/features/reviews/server/pr-files";
import { consoleLog } from "@/devoloper";

export const reviewPrFunction = inngest.createFunction({
    id: "review-pull-request",
    triggers: {
        event: "app/pull-request.created",
    },
}, async ({ event, step }) => {
    consoleLog("Inngest", "Reviewing pull request", event);

    const pullRequestId = event.data.pullRequestId;

    const pullRequest = await step.run("mark-pr-as-processing", async () => {
        return await prisma.pullRequest.update({
            where: { id: pullRequestId },
            data: { status: "processing" },
        });
    })

    const chunk = await step.run("chunk-pr-content", async () => {
        const files = await getPullRequestFiles(
            pullRequest.installationId,
            pullRequest.repoFullName,
            pullRequest.prNumber,
        );

        return await chunkPrFiles(pullRequest.prNumber, files);
    })
});