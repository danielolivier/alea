import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const columns: Array<ColumnDef<User>> = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      return (
        <Image
          src={row.getValue("avatar")}
          height={32}
          width={32}
          alt={`${row.getValue("first_name")} ${row.getValue(
            "last_name"
          )} avatar`}
          className="rounded-full"
        />
      );
    },
  },
];
