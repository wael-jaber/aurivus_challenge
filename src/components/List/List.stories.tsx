import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { List } from './List';
import { ListItem } from '../ListItem';

const meta = {
  title: 'components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    onItemClick: fn(),
    onItemMouseEnter: fn(),
    onItemMouseLeave: fn(),
    // TODO : messed up typing must fix the component which has a bug
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ItemRender: (props: any) => (
      <ListItem
        index={props.id}
        key={props.id}
        label={props.label}
        hidden={props.hidden}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      />
    ),
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { id: 1, label: 'cell1', hidden: false },
      { id: 2, label: 'cell2', hidden: false },
      { id: 3, label: 'cell3', hidden: false },
      { id: 4, label: 'cell4', hidden: false },
    ],
  },
};

export const HiddenState: Story = {
  args: {
    items: [
      { id: 1, label: 'cell1', hidden: false },
      { id: 2, label: 'cell2', hidden: true },
      { id: 3, label: 'cell3', hidden: false },
      { id: 4, label: 'cell4', hidden: true },
    ],
  },
};

export const ExtraControls: Story = {
  args: {
    AdditionalControl: () => {
      return (
        <div className="w-full flex">
          <button className="text-blue-800 border-none bg-transparent ml-auto text-xs">
            Clear All
          </button>
        </div>
      );
    },
    items: [
      { id: 1, label: 'cell1', hidden: false },
      { id: 2, label: 'cell2', hidden: false },
      { id: 3, label: 'cell3', hidden: false },
      { id: 4, label: 'cell4', hidden: false },
    ],
  },
};
