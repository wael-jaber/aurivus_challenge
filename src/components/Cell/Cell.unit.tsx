import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Cell } from './Cell';

describe('Cell Component', () => {
  const cellProps = {
    id: 1,
    label: 'Cell 1',
    hidden: false,
    highlighted: false,
  };

  it('renders the cell with correct label', () => {
    render(<Cell {...cellProps} />);
    const cell = screen.getByTestId('cell-1');
    const label = screen.getByTestId('cell-label-1');

    expect(cell).toBeInTheDocument();
    expect(label).toHaveTextContent('Cell 1');
  });

  it('applies the correct styles when hidden', () => {
    render(<Cell {...cellProps} hidden />);
    const cell = screen.getByTestId('cell-1');
    const label = screen.getByTestId('cell-label-1');

    expect(cell).toHaveClass('bg-white');
    expect(label).toHaveClass('opacity-50');
  });

  it('applies the correct styles when highlighted', () => {
    render(<Cell {...cellProps} highlighted />);
    const cell = screen.getByTestId('cell-1');

    expect(cell).toHaveClass('border-red-500');
  });

  it('hides the label when `hideLabel` is true', () => {
    render(<Cell {...cellProps} hideLabel />);
    const label = screen.getByTestId('cell-label-1');

    expect(label).toHaveClass('hidden');
  });

  it('renders correctly when both hidden and highlighted', () => {
    render(<Cell {...cellProps} hidden highlighted />);
    const cell = screen.getByTestId('cell-1');
    const label = screen.getByTestId('cell-label-1');

    expect(cell).toHaveClass('bg-white border-red-500');
    expect(label).toHaveClass('opacity-50');
  });
});
