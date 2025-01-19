import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ApplyButton } from './ApplyButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Buttons/ApplyButton',
  component: ApplyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onImageUpload: fn() },
} satisfies Meta<typeof ApplyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { isDisabled: false } };

export const Disabled: Story = { args: { isDisabled: true } };
