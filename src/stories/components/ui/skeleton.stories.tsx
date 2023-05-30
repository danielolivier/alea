import { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@/components/ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "components/ui/skeleton",
  component: Skeleton,
  args: {
    className: "h-16 w-full",
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const SkeletonExample: Story = {};
