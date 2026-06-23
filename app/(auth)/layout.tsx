import { requireUnauth } from "@/features/auth/actions";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await requireUnauth();
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            {children}
        </div>
    );
}
