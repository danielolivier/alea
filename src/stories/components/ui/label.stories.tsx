import { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/ui/label";

const meta: Meta<typeof Label> = {
  title: "components/ui/label",
  component: Label,
  args: {
    className: "text-sm",
    children: "Label Storybook",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const LabelExample: Story = {};
