import { render } from "@testing-library/react";

import { Skeleton } from "@/components/ui/skeleton";

describe("skeleton", () => {
  test("renders component", () => {
    const { container } = render(<Skeleton />);
    const skeletonElement = container.querySelector("div");

    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveClass("animate-pulse rounded-md bg-muted");
  });

  test("applies custom class names correctly", () => {
    const { container } = render(<Skeleton className="custom-class" />);
    const skeletonElement = container.querySelector("div");

    expect(skeletonElement).toHaveClass("custom-class");
  });

  test("passes down HTML attributes", () => {
    const { container } = render(<Skeleton data-testid="skeleton" />);
    const skeletonElement = container.querySelector("div");

    expect(skeletonElement).toHaveAttribute("data-testid", "skeleton");
  });
});
