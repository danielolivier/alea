import { fireEvent, render } from "@testing-library/react";

import { Button, buttonVariants } from "@/components/ui/button";

describe("button", () => {
  test("renders component by default", () => {
    const { getByText } = render(<Button>Example</Button>);
    const buttonElement = getByText("Example");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe("BUTTON");
    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "default", size: "default" })
    );
  });

  test("applies custom class names correctly", () => {
    const { getByText } = render(
      <Button className="custom-class">Example</Button>
    );
    const buttonElement = getByText("Example");

    expect(buttonElement).toHaveClass("custom-class");
  });

  test("handles click events correctly", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Example</Button>
    );
    const buttonElement = getByText("Example");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("applies the correct variant based on the 'variant' prop", () => {
    const { getByText, rerender } = render(
      <Button variant="destructive">Example</Button>
    );
    const buttonElement = getByText("Example");

    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "destructive", size: "default" })
    );

    rerender(<Button variant="secondary">Example</Button>);

    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "secondary", size: "default" })
    );
  });

  test("applies the correct size based on the 'size' prop", () => {
    const { getByText, rerender } = render(<Button size="sm">Example</Button>);
    const buttonElement = getByText("Example");

    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "default", size: "sm" })
    );

    rerender(<Button size="lg">Example</Button>);
    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "default", size: "lg" })
    );
  });
});
