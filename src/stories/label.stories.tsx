import { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/ui/label";

const meta: Meta<typeof Label> = {
  title: "label",
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const LabelStorybook: Story = {
  args: {
    children: "Label Storybook",
  },
};
