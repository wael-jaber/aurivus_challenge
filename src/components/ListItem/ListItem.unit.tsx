import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { ListItem, ListItemProps } from './ListItem';

describe('ListItem Component', () => {
  const defaultProps: ListItemProps = {
    index: 1,
    label: 'Test Item',
    hidden: true,
    onMouseEnter: vi.fn(),
    onMouseLeave: vi.fn(),
    onClick: vi.fn(),
  };

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders the list item with the correct label and icon when hidden', () => {
    render(<ListItem {...defaultProps} />);

    const listItem = screen.getByTestId('list-item-1');
    expect(listItem).toBeInTheDocument();

    const label = screen.getByTestId('label-1');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Test Item');

    const icon = screen.getByTestId('eye-slash-icon-1');
    expect(icon).toBeInTheDocument();
  });

  it('renders the list item with the correct label and icon when visible', () => {
    render(<ListItem {...defaultProps} hidden={false} />);

    const listItem = screen.getByTestId('list-item-1');
    expect(listItem).toBeInTheDocument();

    const label = screen.getByTestId('label-1');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Test Item');

    const icon = screen.getByTestId('eye-icon-1');
    expect(icon).toBeInTheDocument();
  });

  it('triggers onMouseEnter when the list item is hovered', () => {
    const onMouseEnter = vi.fn();
    render(<ListItem {...defaultProps} onMouseEnter={onMouseEnter} />);

    const listItem = screen.getByTestId('list-item-1');
    fireEvent.mouseEnter(listItem);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledWith(1);
  });

  it('triggers onMouseLeave when the list item is unhovered', () => {
    const onMouseLeave = vi.fn();
    render(<ListItem {...defaultProps} onMouseLeave={onMouseLeave} />);

    const listItem = screen.getByTestId('list-item-1');
    fireEvent.mouseLeave(listItem);

    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledWith(1);
  });

  it('triggers onClick when the button is clicked', () => {
    const onClick = vi.fn();
    render(<ListItem {...defaultProps} onClick={onClick} />);

    const button = screen.getByTestId('toggle-button-1');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(1);
  });
});
