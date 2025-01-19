import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, afterEach, describe, it, expect, vi } from 'vitest';
import React, { useState } from 'react';
import { DimensionInputs } from './DimensionInputs';

describe('DimensionInputs', () => {
  const renderWithState = (initialProps: {
    rows: number;
    cols: number;
    imageDimensions: { width: number; height: number } | null;
  }) => {
    const Wrapper = () => {
      const [rows, setRows] = useState(initialProps.rows);
      const [cols, setCols] = useState(initialProps.cols);

      return (
        <DimensionInputs
          rows={rows}
          cols={cols}
          imageDimensions={initialProps.imageDimensions}
          onRowsChange={setRows}
          onColsChange={setCols}
        />
      );
    };

    render(<Wrapper />);
  };

  beforeEach(() => vi.clearAllMocks());
  afterEach(() => cleanup());

  it('renders the rows and cols inputs', () => {
    renderWithState({
      rows: 5,
      cols: 5,
      imageDimensions: { width: 10, height: 10 },
    });

    expect(screen.getByTestId('rows-input')).toBeInTheDocument();
    expect(screen.getByTestId('cols-input')).toBeInTheDocument();
  });

  it('disables the inputs when imageDimensions is null', () => {
    renderWithState({ rows: 5, cols: 5, imageDimensions: null });

    expect(screen.getByTestId('rows-input')).toBeDisabled();
    expect(screen.getByTestId('cols-input')).toBeDisabled();
  });

  it('validates and displays errors for invalid rows input', async () => {
    renderWithState({
      rows: 5,
      cols: 5,
      imageDimensions: { width: 10, height: 10 },
    });

    const rowsInput = screen.getByTestId('rows-input');
    await userEvent.clear(rowsInput);
    await userEvent.type(rowsInput, '15');

    expect(screen.getByTestId('rows-error')).toBeInTheDocument();
    expect(screen.getByTestId('rows-error')).toHaveTextContent(
      'Value must be between 1 and 9'
    );
  });

  it('validates and displays errors for invalid cols input', async () => {
    renderWithState({
      rows: 5,
      cols: 5,
      imageDimensions: { width: 10, height: 10 },
    });

    const colsInput = screen.getByTestId('cols-input');
    await userEvent.clear(colsInput);
    await userEvent.type(colsInput, '20');

    expect(screen.getByTestId('cols-error')).toBeInTheDocument();
    expect(screen.getByTestId('cols-error')).toHaveTextContent(
      'Value must be between 1 and 9'
    );
  });

  it('does not display errors for valid inputs', async () => {
    renderWithState({
      rows: 5,
      cols: 5,
      imageDimensions: { width: 10, height: 10 },
    });

    const rowsInput = screen.getByTestId('rows-input');
    await userEvent.clear(rowsInput);
    await userEvent.type(rowsInput, '5');
    expect(screen.queryByTestId('rows-error')).not.toBeInTheDocument();

    const colsInput = screen.getByTestId('cols-input');
    await userEvent.clear(colsInput);
    await userEvent.type(colsInput, '8');
    expect(screen.queryByTestId('cols-error')).not.toBeInTheDocument();
  });

  it('updates rows and cols when valid inputs are entered', async () => {
    renderWithState({
      rows: 5,
      cols: 5,
      imageDimensions: { width: 10, height: 10 },
    });

    const rowsInput = screen.getByTestId('rows-input');
    await userEvent.clear(rowsInput);
    await userEvent.type(rowsInput, '6');

    const colsInput = screen.getByTestId('cols-input');
    await userEvent.clear(colsInput);
    await userEvent.type(colsInput, '7');

    expect(rowsInput).toHaveValue(6);
    expect(colsInput).toHaveValue(7);
  });
});
