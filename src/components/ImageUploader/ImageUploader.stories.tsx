import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ImageUploader } from './ImageUploader';

const meta = {
  title: 'components/ImageUploader',
  component: ImageUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onImageUpload: fn() },
} satisfies Meta<typeof ImageUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
