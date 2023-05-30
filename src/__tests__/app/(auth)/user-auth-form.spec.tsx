import "@testing-library/jest-dom";
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FieldValues, FormState, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { UserAuthForm } from "@/app/(auth)/components/user-auth-form";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(),
}));

jest.mock("react-hot-toast", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

const pushMock = jest.fn();
const mockedFormData = {
  email: "test@example.com",
  password: "password",
};

describe("user-auth-form", () => {
  const mockedSignIn = signIn as jest.MockedFunction<typeof signIn>;
  const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
  const mockedUseForm = useForm as jest.MockedFunction<typeof useForm>;
  const mockedToast = toast as jest.Mocked<typeof toast>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(cleanup);

  test("renders component", () => {
    mockedUseForm.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: { errors: {}, isValid: true } as Partial<
        FormState<FieldValues>
      >,
    });

    render(<UserAuthForm />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
  });

  test("fills form and submits successfully", async () => {
    mockedUseRouter.mockReturnValue({
      push: pushMock,
      back: () => {},
      forward: () => {},
      refresh: () => {},
      replace: () => {},
      prefetch: () => {},
    });

    mockedUseForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: (onSubmit) => (e) => {
        e?.preventDefault();
        onSubmit(mockedFormData);
      },
      formState: { errors: {}, isValid: false } as Partial<
        FormState<FieldValues>
      >,
    });

    mockedSignIn.mockResolvedValueOnce({
      error: undefined,
      ok: true,
      status: 200,
      url: null,
    });

    render(<UserAuthForm />);

    await act(async () => {
      fireEvent.submit(screen.getByRole("button", { name: "Sign In" }));
    });

    expect(mockedSignIn).toHaveBeenCalledTimes(1);
    expect(mockedSignIn).toHaveBeenCalledWith("credentials", {
      email: mockedFormData.email?.toLowerCase(),
      password: mockedFormData.password.toLowerCase(),
      redirect: false,
    });

    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenCalledWith("/dashboard");

    expect(mockedToast.success).toHaveBeenCalledTimes(1);
    expect(mockedToast.success).toHaveBeenCalledWith("Successfully signed in");
    expect(mockedToast.error).not.toHaveBeenCalled();
  });

  test("fills form and submits unsuccessfully", async () => {
    mockedUseRouter.mockReturnValue({
      push: pushMock,
      back: () => {},
      forward: () => {},
      refresh: () => {},
      replace: () => {},
      prefetch: () => {},
    });

    mockedUseForm.mockReturnValue({
      register: jest.fn(),
      handleSubmit: (onSubmit) => (e) => {
        e?.preventDefault();
        onSubmit(mockedFormData);
      },
      formState: { errors: {}, isValid: false } as Partial<
        FormState<FieldValues>
      >,
    });

    mockedSignIn.mockResolvedValueOnce({
      error: "Sign in failed",
      ok: false,
      status: 500,
      url: null,
    });

    render(<UserAuthForm />);

    await act(async () => {
      fireEvent.submit(screen.getByRole("button", { name: "Sign In" }));
    });

    expect(screen.getByRole("button", { name: "Sign In" })).toHaveTextContent(
      "Sign In"
    );

    expect(mockedSignIn).toHaveBeenCalledTimes(1);
    expect(mockedSignIn).toHaveBeenCalledWith("credentials", {
      email: mockedFormData.email?.toLowerCase(),
      password: mockedFormData.password.toLowerCase(),
      redirect: false,
    });

    expect(pushMock).not.toHaveBeenCalled();

    expect(mockedToast.success).not.toHaveBeenCalledTimes(1);
    expect(mockedToast.error).toHaveBeenCalledWith(
      "Something went wrong with your login"
    );
  });

  test("displays email validation error message", () => {
    const mockErrors = {
      email: { message: "Email is required" },
    };

    mockedUseForm.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: { errors: mockErrors, isValid: false },
    });

    render(<UserAuthForm />);

    expect(screen.getByText(mockErrors.email.message)).toBeInTheDocument();
    expect(screen.getByText(mockErrors.email.message)).toHaveTextContent(
      "Email is required"
    );
  });

  test("displays password validation error message", () => {
    const mockErrors = {
      password: { message: "Password is required" },
    };

    mockedUseForm.mockReturnValueOnce({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: { errors: mockErrors, isValid: false },
    });

    render(<UserAuthForm />);

    expect(screen.getByText(mockErrors.password.message)).toBeInTheDocument();
    expect(screen.getByText(mockErrors.password.message)).toHaveTextContent(
      "Password is required"
    );
  });
});
