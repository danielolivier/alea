import { Input } from "@/components/ui/input";

import { fireEvent, render, screen } from "@testing-library/react";

describe("input", () => {
  test("renders component", () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector("input");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(
      "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    );
  });

  test("applies custom class names correctly", () => {
    const { container } = render(<Input className="custom-class" />);
    const inputElement = container.querySelector("input");

    expect(inputElement).toHaveClass("custom-class");
  });

  test("handles value change correctly", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Example" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe(
      "Example"
    );
  });

  test("handles focus events correctly", () => {
    const handleFocus = jest.fn();
    render(<Input onFocus={handleFocus} />);

    fireEvent.focus(screen.getByRole("textbox"));
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  test("handles blur events correctly", () => {
    const handleBlur = jest.fn();
    render(<Input onBlur={handleBlur} />);

    fireEvent.blur(screen.getByRole("textbox"));
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test("disables the input when 'disabled' prop is true", () => {
    render(<Input disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  test("handles placeholder text correctly", () => {
    const placeholderText = "Enter your name";
    render(<Input placeholder={placeholderText} />);

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      placeholderText
    );
  });

  test("handles key press events correctly", () => {
    const handleKeyDown = jest.fn();
    render(<Input onKeyDown={handleKeyDown} />);

    fireEvent.keyDown(screen.getByRole("textbox"), {
      key: "Enter",
      code: 13,
      charCode: 13,
    });

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
  });
});
