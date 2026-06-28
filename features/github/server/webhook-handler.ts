import { savePullRequest } from "@/features/reviews/server/save-pull-request";
import { getGithubApp } from "../utils/github-app";
import { consoleLog } from "@/devoloper";

const REVIEWABLE_ACTIONS = ["opened", "synchronize", "reopened"];

export type PullRequestWebhookPayload = {
    action: string;
    installation: { id: number };
    repository: { full_name: string };
    pull_request: { 
        number: number;
        title: string;
        user: { login: string } | null;
        head: { sha: string };
        base: { ref: string };
    };
}

async function verifySignature(payload: string, signature: string) {
    if (!signature) {
        return false;
    }

    const app = await getGithubApp();
    // Octokit wraps GitHub's webhook crypto - rejects forged payloads

    return app.webhooks.verify(payload, signature);
}

export async function handleGithubWebhook(request: Request) {
    const body = await request.text();

    consoleLog("GitHub", "Webhook body", body);

    const signature = request.headers.get("x-hub-signature-256");
    
    consoleLog("GitHub", "Webhook headers", request.headers);
    
    
    if (!signature) {
        return Response.json({ received: false });
    }

    const eventName = request.headers.get("x-github-event");
    if (!eventName) {
        return Response.json({ received: false });
    }

    const isValid = await verifySignature(body, signature);
    if (!isValid) {
        return Response.json({ received: false });
    }

    if (eventName !== "pull_request") {
        return Response.json({ received: true });
    }

    const event = JSON.parse(body) as PullRequestWebhookPayload;

    consoleLog("GitHub", "Pull request webhook received", event);

    if (!REVIEWABLE_ACTIONS.includes(event.action)) {
        return Response.json({ received: true});
    }

    const pullRequest = await savePullRequest(event);
    // TODO: Map GitHub's installation id

    // TODO: Trigger reviewable job

    return Response.json({ received: true });
}