import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

const meta: Meta<typeof ModeToggle> = {
  title: "components/mode-toggle",
  component: ModeToggle,
  decorators: [
    (Story: React.ComponentType) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {};
