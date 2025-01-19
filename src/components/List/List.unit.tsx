import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { List, ListItemRendererProps } from './List';

type MockItem = {
  id: number;
  name: string;
};

// eslint-disable-next-line react-refresh/only-export-components
const MockItemRender: React.FC<MockItem & ListItemRendererProps> = ({
  id,
  name,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => (
  <li
    data-testid={`list-item-${id}`}
    onMouseEnter={() => onMouseEnter(id)}
    onMouseLeave={() => onMouseLeave(id)}
    onClick={() => onClick(id)}
  >
    {name}
  </li>
);

describe('List Component', () => {
  const items: MockItem[] = [
    { id: 0, name: 'Item 1' },
    { id: 1, name: 'Item 2' },
    { id: 2, name: 'Item 3' },
  ];

  const onItemClick = vi.fn();
  const onItemMouseEnter = vi.fn();
  const onItemMouseLeave = vi.fn();

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders the list container and items', () => {
    render(
      <List
        items={items}
        ItemRender={MockItemRender}
        onItemClick={onItemClick}
        onItemMouseEnter={onItemMouseEnter}
        onItemMouseLeave={onItemMouseLeave}
      />
    );

    expect(screen.getByTestId('list-container')).toBeInTheDocument();
    expect(screen.getByTestId('list-items')).toBeInTheDocument();
    items.forEach((item) => {
      expect(screen.getByTestId(`list-item-${item.id}`)).toBeInTheDocument();
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('renders the additional control element if provided', () => {
    const MockControl = () => <div data-testid="mock-control">Control</div>;

    render(
      <List
        items={items}
        ItemRender={MockItemRender}
        onItemClick={onItemClick}
        onItemMouseEnter={onItemMouseEnter}
        onItemMouseLeave={onItemMouseLeave}
        AdditionalControl={MockControl}
      />
    );

    expect(screen.getByTestId('additional-control')).toBeInTheDocument();
    expect(screen.getByTestId('mock-control')).toBeInTheDocument();
  });

  it('does not render the additional control element if not provided', () => {
    render(
      <List
        items={items}
        ItemRender={MockItemRender}
        onItemClick={onItemClick}
        onItemMouseEnter={onItemMouseEnter}
        onItemMouseLeave={onItemMouseLeave}
      />
    );

    expect(screen.queryByTestId('additional-control')).not.toBeInTheDocument();
  });

  it('triggers onItemClick when a list item is clicked', () => {
    render(
      <List
        items={items}
        ItemRender={MockItemRender}
        onItemClick={onItemClick}
        onItemMouseEnter={onItemMouseEnter}
        onItemMouseLeave={onItemMouseLeave}
      />
    );

    const firstItem = screen.getByTestId('list-item-0');
    fireEvent.click(firstItem);

    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledWith(0);
  });

  it('triggers onItemMouseEnter when a list item is hovered', () => {
    render(
      <List
        items={items}
        ItemRender={MockItemRender}
        onItemClick={onItemClick}
        onItemMouseEnter={onItemMouseEnter}
        onItemMouseLeave={onItemMouseLeave}
      />
    );

    const firstItem = screen.getByTestId('list-item-0');
    fireEvent.mouseEnter(firstItem);

    expect(onItemMouseEnter).toHaveBeenCalledTimes(1);
    expect(onItemMouseEnter).toHaveBeenCalledWith(0);
  });

  it('triggers onItemMouseLeave when a list item is unhovered', () => {
    render(
      <List
        items={items}
        ItemRender={MockItemRender}
        onItemClick={onItemClick}
        onItemMouseEnter={onItemMouseEnter}
        onItemMouseLeave={onItemMouseLeave}
      />
    );

    const firstItem = screen.getByTestId('list-item-0');
    fireEvent.mouseLeave(firstItem);

    expect(onItemMouseLeave).toHaveBeenCalledTimes(1);
    expect(onItemMouseLeave).toHaveBeenCalledWith(0);
  });
});
