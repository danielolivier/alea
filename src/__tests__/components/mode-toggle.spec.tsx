import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTheme } from "next-themes";

import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

jest.mock("next-themes", () => {
  const originalModule = jest.requireActual("next-themes");
  return {
    ...originalModule,
    useTheme: jest.fn(() => ({ setTheme: jest.fn() })),
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: ResizeObserver,
});

describe("mode-toggle", () => {
  const mockedUseTheme = useTheme as jest.MockedFunction<typeof useTheme>;

  afterEach(cleanup);

  test("renders the toggle button", () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ModeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole("button");
    const icon =
      screen.getByTestId("sun-icon") ?? screen.getByTestId("moon-icon");

    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveClass("h-8 w-8 px-0");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("rotate-0 scale-100 transition-all");
  });

  test("displays menu on button clicked", async () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ModeToggle />
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole("button", { name: "Toggle theme" }));

    await waitFor(() => {
      expect(screen.getByRole("menu")).toBeVisible();
      expect(screen.getByTestId("menu-sun-icon")).toBeInTheDocument();
      expect(screen.getByText("Light")).toBeInTheDocument();
      expect(screen.getByTestId("menu-moon-icon")).toBeInTheDocument();
      expect(screen.getByText("Dark")).toBeInTheDocument();
      expect(screen.getByTestId("menu-laptop-icon")).toBeInTheDocument();
      expect(screen.getByText("System")).toBeInTheDocument();
    });
  });

  test('should set theme to "light" on "Light" option click', async () => {
    const setTheme = jest.fn();
    mockedUseTheme.mockReturnValue({
      setTheme,
      themes: ["light", "dark", "system"],
    });

    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ModeToggle />
      </ThemeProvider>
    );

    let menuItems: Array<HTMLElement>;

    userEvent.click(screen.getByRole("button", { name: "Toggle theme" }));
    await waitFor(() => (menuItems = screen.getAllByRole("menuitem")));

    await act(async () => {
      fireEvent.click(menuItems![0]);
    });

    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith("light");
  });

  test('should set theme to "dark" on "Dark" option click', async () => {
    const setTheme = jest.fn();
    mockedUseTheme.mockReturnValue({
      setTheme,
      themes: ["light", "dark", "system"],
    });

    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ModeToggle />
      </ThemeProvider>
    );

    let menuItems: Array<HTMLElement>;

    userEvent.click(screen.getByRole("button", { name: "Toggle theme" }));
    await waitFor(() => (menuItems = screen.getAllByRole("menuitem")));

    await act(async () => {
      fireEvent.click(menuItems![1]);
    });

    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  test('should set theme to "system" on "System" option click', async () => {
    const setTheme = jest.fn();
    mockedUseTheme.mockReturnValue({
      setTheme,
      themes: ["light", "dark", "system"],
    });

    render(
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <ModeToggle />
      </ThemeProvider>
    );

    let menuItems: Array<HTMLElement>;

    userEvent.click(screen.getByRole("button", { name: "Toggle theme" }));
    await waitFor(() => (menuItems = screen.getAllByRole("menuitem")));

    await act(async () => {
      fireEvent.click(menuItems![2]);
    });

    expect(setTheme).toHaveBeenCalledTimes(1);
    expect(setTheme).toHaveBeenCalledWith("system");
  });
});
