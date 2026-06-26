import {
    DashboardSquare01Icon,
    FolderLibraryIcon,
    GitBranchIcon,
    GithubIcon,
    Settings01Icon,
} from "@hugeicons/core-free-icons";

export const DASHBOARD_ROUTES = {
    overview: "/dashboard",
    repos: "/dashboard/repos",
    pullRequest: "/dashboard/pull-request",
    github: "/dashboard/github",
    settings: "/dashboard/settings",
} as const;

export type DashboardRoute =
    (typeof DASHBOARD_ROUTES)[keyof typeof DASHBOARD_ROUTES];

export const DASHBOARD_NAV_ITEMS = [
    {
        title: "Overview",
        href: DASHBOARD_ROUTES.overview,
        icon: DashboardSquare01Icon,
    },
    {
        title: "Repositories",
        href: DASHBOARD_ROUTES.repos,
        icon: FolderLibraryIcon,
    },
    {
        title: "PullRequests",
        href: DASHBOARD_ROUTES.pullRequest,
        icon: GitBranchIcon,
    },
    {
        title: "GitHub App",
        href: DASHBOARD_ROUTES.github,
        icon: GithubIcon,
    },
    {
        title: "Settings",
        href: DASHBOARD_ROUTES.settings,
        icon: Settings01Icon,
    },
] as const;
