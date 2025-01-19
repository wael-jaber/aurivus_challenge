import { describe, it, expect } from 'vitest';
import reducer, {
  createCells,
  toggleCellVisibility,
  cellHighlightOn,
  cellHighlightOff,
  setCols,
  setRows,
  setImage,
} from './main_slice';

describe('mainSlice', () => {
  const initialState = {
    cells: [],
    cols: 1,
    rows: 1,
    appliedCellNumber: 0,
    image: null,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle createCells', () => {
    const cellCount = 5;
    const nextState = reducer(initialState, createCells(cellCount));
    expect(nextState.cells).toHaveLength(cellCount);
    expect(nextState.appliedCellNumber).toBe(cellCount);
    expect(nextState.cells[0]).toEqual({
      id: 0,
      label: 'Cell 1',
      hidden: false,
      highlighted: false,
    });
  });

  it('should handle toggleCellVisibility', () => {
    const initial = reducer(initialState, createCells(3));
    const nextState = reducer(initial, toggleCellVisibility(1));
    expect(nextState.cells[1].hidden).toBe(true);

    const revertedState = reducer(nextState, toggleCellVisibility(1));
    expect(revertedState.cells[1].hidden).toBe(false);
  });

  it('should handle cellHighlightOn', () => {
    const initial = reducer(initialState, createCells(3));
    const nextState = reducer(initial, cellHighlightOn(2));
    expect(nextState.cells[2].highlighted).toBe(true);
  });

  it('should handle cellHighlightOff', () => {
    const initial = reducer(initialState, createCells(3));
    const highlightedState = reducer(initial, cellHighlightOn(2));
    const nextState = reducer(highlightedState, cellHighlightOff(2));
    expect(nextState.cells[2].highlighted).toBe(false);
  });

  it('should handle setCols', () => {
    const cols = 5;
    const nextState = reducer(initialState, setCols(cols));
    expect(nextState.cols).toBe(cols);
  });

  it('should handle setRows', () => {
    const rows = 4;
    const nextState = reducer(initialState, setRows(rows));
    expect(nextState.rows).toBe(rows);
  });

  it('should handle setImage', () => {
    const image = 'data:image/png;base64,sampleImageData';
    const nextState = reducer(initialState, setImage(image));
    expect(nextState.image).toBe(image);
  });
});
