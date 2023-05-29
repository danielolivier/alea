import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Icons } from "@/components/icons";
import { UserAccountNav } from "@/components/user-account-nav";
import { getCurrentUser } from "@/lib/session";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();
  if (!user) return notFound();

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-end justify-between py-4">
          <Icons.logo className="h-8 w-12" />
          <UserAccountNav user={{ email: user.email }} />
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        {children}
      </main>
      <Footer className="border-t"></Footer>
    </div>
  );
}
