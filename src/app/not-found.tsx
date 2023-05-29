import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center rounded-md p-8 text-center animate-in fade-in-50 mx-auto">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center h-full">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Icons.warning className="h-10 w-10" />
        </div>
        <h2 className="mt-6 text-xl font-semibold">Uh oh! Not Found</h2>
        <p className="mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground">
          This page could not be found. Please try again.
        </p>
        <Button variant="ghost">
          <a href="/">Go back</a>
        </Button>
      </div>
    </div>
  );
}
