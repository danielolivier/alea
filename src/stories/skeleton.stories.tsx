import { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "@/components/ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "skeleton",
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const SkeletonStorybook: Story = {
  args: {
    className: "h-16 w-full",
  },
};
