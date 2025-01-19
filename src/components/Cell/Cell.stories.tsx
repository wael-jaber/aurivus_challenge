import type { Meta, StoryObj } from '@storybook/react';
import { Cell } from './Cell';
import backgroundImage from './bg-test.webp'; // Adjust the path as needed

const meta = {
  title: 'components/Cell',
  component: Cell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cell>;

export default meta;
type Story = StoryObj<typeof meta>;

// Utility wrapper with a background image
const withBackgroundImage = (StoryComponent: React.FC) => (
  <div
    className="w-64 h-64 bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    <StoryComponent />
  </div>
);

export const Primary: Story = {
  args: {
    id: 1,
    label: 'Cell 1',
    hidden: false,
    highlighted: false,
  },
  decorators: [
    (StoryComponent: React.FC) => withBackgroundImage(StoryComponent),
  ],
};

export const Highlighted: Story = {
  args: {
    id: 1,
    label: 'Cell 1',
    hidden: false,
    highlighted: true,
  },
  decorators: [
    (StoryComponent: React.FC) => withBackgroundImage(StoryComponent),
  ],
};

export const Hidden: Story = {
  args: {
    id: 1,
    label: 'Cell 1',
    hidden: true,
    highlighted: false,
  },
  decorators: [
    (StoryComponent: React.FC) => withBackgroundImage(StoryComponent),
  ],
};

export const HiddenAndHighlighted: Story = {
  args: {
    id: 1,
    label: 'Cell 1',
    hidden: true,
    highlighted: true,
  },
  decorators: [
    (StoryComponent: React.FC) => withBackgroundImage(StoryComponent),
  ],
};
