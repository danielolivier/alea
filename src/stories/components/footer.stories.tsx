import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const meta: Meta<typeof Footer> = {
  title: "components/footer",
  component: Footer,
  decorators: [
    (Story: React.ComponentType) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
