import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "components/ui/button",
  component: Button,
  args: {
    children: "Button Testing",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonExample: Story = {
  args: {
    variant: "default",
  },
};
