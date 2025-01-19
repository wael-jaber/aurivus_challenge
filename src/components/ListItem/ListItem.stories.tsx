import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ListItem } from './ListItem';

const meta = {
  title: 'components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onMouseEnter: fn(), onMouseLeave: fn(), onClick: fn() },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    index: 1,
    label: 'Cell 1',
    hidden: false,
  },
};

export const HiddenState: Story = {
  args: {
    index: 1,
    label: 'Cell 2',
    hidden: true,
  },
};
