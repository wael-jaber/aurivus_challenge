import { beforeAll, describe, expect, it } from 'vitest';
import { enableMapSet } from 'immer';

describe('mainSlice', () => {
  beforeAll(() => {
    // Enable Map and Set support for Immer, else tests will fail
    enableMapSet();
  });

  it('should initialize with the correct initial state', async () => {
    const mainSlice = await import('./main_slice');
    const reducer = mainSlice.default;

    const initialState = reducer(undefined, { type: '@@INIT' });
    expect(initialState).toEqual({
      cells: new Map(),
      cols: 1,
      appliedCols: 1,
      rows: 1,
      appliedRows: 1,
      appliedCellNumber: 0,
      image: null,
    });
  });

  it('should create cells correctly', async () => {
    const mainSlice = await import('./main_slice');
    const reducer = mainSlice.default;
    const actions = mainSlice;

    const state = reducer(undefined, actions.createCells(5));
    expect(state.appliedCellNumber).toBe(5);
    expect(state.cells.size).toBe(5);
    expect(state.cells.get(0)).toEqual({
      id: 0,
      label: 'Cell 1',
      hidden: false,
      highlighted: false,
    });
  });

  it('should toggle cell visibility correctly', async () => {
    const mainSlice = await import('./main_slice');
    const reducer = mainSlice.default;
    const actions = mainSlice;

    let state = reducer(undefined, actions.createCells(2));
    state = reducer(state, actions.toggleCellVisibility(0));

    expect(state.cells.get(0)?.hidden).toBe(true);

    state = reducer(state, actions.toggleCellVisibility(0));
    expect(state.cells.get(0)?.hidden).toBe(false);
  });

  it('should toggle cell highlight on correctly', async () => {
    const mainSlice = await import('./main_slice');
    const reducer = mainSlice.default;
    const actions = mainSlice;

    let state = reducer(undefined, actions.createCells(3));
    state = reducer(state, actions.cellHighlightOn(1));

    expect(state.cells.get(1)?.highlighted).toBe(true);
  });

  it('should toggle cell highlight off correctly', async () => {
    const mainSlice = await import('./main_slice');
    const reducer = mainSlice.default;
    const actions = mainSlice;

    let state = reducer(undefined, actions.createCells(3));
    state = reducer(state, actions.cellHighlightOn(1));
    state = reducer(state, actions.cellHighlightOff(1));

    expect(state.cells.get(1)?.highlighted).toBe(false);
  });

  it('should set cols and rows correctly', async () => {
    const mainSlice = await import('./main_slice');
    const reducer = mainSlice.default;
    const actions = mainSlice;

    let state = reducer(undefined, actions.setCols(10));
    expect(state.cols).toBe(10);

    state = reducer(state, actions.setRows(20));
    expect(state.rows).toBe(20);
  });

  it('should apply cols and rows correctly', async () => {
    const mainSlice = await import('./main_slice');
    const reducer = mainSlice.default;
    const actions = mainSlice;

    let state = reducer(undefined, actions.setCols(10));
    state = reducer(state, actions.setRows(20));
    state = reducer(state, actions.applyColsAndRows());

    expect(state.appliedCols).toBe(10);
    expect(state.appliedRows).toBe(20);
  });

  it('should set the image correctly', async () => {
    const mainSlice = await import('./main_slice');
    const reducer = mainSlice.default;
    const actions = mainSlice;

    const testImage = 'data:image/png;base64,...';
    const state = reducer(undefined, actions.setImage(testImage));

    expect(state.image).toBe(testImage);
  });
});
