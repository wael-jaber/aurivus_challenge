import type { Meta, StoryObj } from '@storybook/react';
import { CellRaster } from './CellRaster';
import { Cell } from '../../types';
import backgroundImage from './bg-test.webp'; // Adjust the path as needed

// Custom Cell Component
const CustomCell: React.FC<Cell> = ({ label, hidden, highlighted }) => (
  <div
    className={`flex items-center justify-center text-black ${
      hidden ? 'bg-white' : 'bg-transparent'
    } ${highlighted ? 'border-red-500' : 'border-gray-300'} border`}
    style={{ width: '100%', height: '100%' }}
  >
    <span>{`${label} ${hidden ? '(Hidden)' : ''} ${
      highlighted ? '(Highlighted)' : ''
    }`}</span>
  </div>
);

const meta: Meta<typeof CellRaster> = {
  title: 'components/CellRaster',
  component: CellRaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    cols: 3,
    rows: 3,
    image: backgroundImage, // Replace with a valid base64 string or mock image path
    cells: [
      { id: 1, label: 'A', hidden: false, highlighted: false },
      { id: 2, label: 'B', hidden: true, highlighted: true },
      { id: 3, label: 'C', hidden: true, highlighted: false },
      { id: 4, label: 'D', hidden: false, highlighted: true },
      { id: 5, label: 'E', hidden: false, highlighted: false },
      { id: 6, label: 'F', hidden: false, highlighted: false },
      { id: 7, label: 'G', hidden: true, highlighted: true },
      { id: 8, label: 'H', hidden: false, highlighted: false },
      { id: 9, label: 'I', hidden: false, highlighted: false },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomCell: Story = {
  args: {
    cellComponent: CustomCell, // Pass the custom cell component
  },
};
