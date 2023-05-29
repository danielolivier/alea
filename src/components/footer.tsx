import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
          </p>
          <a
            href="https://www.linkedin.com/in/danielolivierb/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Daniel Olivier
          </a>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
