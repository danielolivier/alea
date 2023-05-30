import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { Metadata } from "next";
import { UsersTable } from "../components/users-table";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) redirect(authOptions?.pages?.signIn || "/login");

  return (
    <div className="container mx-auto">
      <UsersTable></UsersTable>
    </div>
  );
}
