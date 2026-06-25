"use server";

import { getServerSession } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { disconnectInstallation } from "../server/installation";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";


export async function disconnectGithubApp() {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }

    await disconnectInstallation(session.user.id);

    redirect(DASHBOARD_ROUTES.github);
}