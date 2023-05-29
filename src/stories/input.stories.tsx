import { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/ui/input";

const meta: Meta<typeof Input> = {
  title: "input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputText: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
};

export const InputPassword: Story = {
  args: {
    type: "password",
  },
};
