import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DimensionInputs } from './DimensionInputs';

const meta = {
  title: 'components/DimensionInputs',
  component: DimensionInputs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onRowsChange: fn(), onColsChange: fn() },
} satisfies Meta<typeof DimensionInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imageDimensions: { width: 100, height: 200 },
    cols: 12,
    rows: 10,
  },
};
