import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebarr";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserMenu } from "@/features/auth/components/user-menu";

type DashboardShellProps = {
    children: React.ReactNode;
    user: UserMenu;
    plan?: string;
};

export function DashboardShell({ children, user, plan }: DashboardShellProps) {
    return (
        <TooltipProvider>
            <SidebarProvider>
                <DashboardSidebar user={user} plan={plan} />
                <SidebarInset className="min-h-svh">{children}</SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    );
}
