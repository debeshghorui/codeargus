/* 
    * api/github/callback?
        * installation_id=142509494&setup_action=install&state=Ul9X9L8vcbzi06SJYkFTqyDykfLJsGoY
*/

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "@/features/auth/actions";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";
import { saveInstallation } from "@/features/github/server/installation";
import { redirect } from "next/navigation";

function buildSignInCallbackUrl(installationId: string | null) {
    if (!installationId) {
        return `/api/github/callback?installation_id=${installationId}`;
    }

    return DASHBOARD_ROUTES.github;
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const installationId = searchParams.get("installation_id");
    const session = await getServerSession();

    if (!session) {
        const callbackUrl = buildSignInCallbackUrl(installationId);
        redirect(`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }

    if (installationId) {
        await saveInstallation(session.user.id, parseInt(installationId));
    }

    redirect(DASHBOARD_ROUTES.github);
}