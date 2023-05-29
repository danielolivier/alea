import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStorybook: Story = {
  args: {
    variant: "default",
    children: "Button Storybook",
  },
};
