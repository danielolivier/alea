"use client";

import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { Skeleton } from "@/components/ui/skeleton";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function fetchUsers(): Promise<UserListResponse> {
  const response = await fetch("https://reqres.in/api/users?&per_page=20", {
    method: "GET",
  });
  return response.json();
}

export function UsersTable() {
  const { data, error, isLoading } = useQuery<UserListResponse>({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });

  if (error) toast.error("Couldn't find data");

  if (isLoading)
    return (
      <div className="grid items-start gap-2">
        <Skeleton className="w-full h-[calc(100vh-240px)]"></Skeleton>
        <div className="flex justify-end w-full">
          <Skeleton className="h-12 w-96"></Skeleton>
        </div>
      </div>
    );

  return <DataTable columns={columns} data={data!.data} />;
}
