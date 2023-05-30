import { Meta, StoryObj } from "@storybook/react";

import { UserAccountNav } from "@/components/user-account-nav";

const meta: Meta<typeof UserAccountNav> = {
  title: "components/user-account-nav",
  component: UserAccountNav,
  args: {
    user: {
      email: "user@example.com",
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserAccountNav>;

export const Default: Story = {};
