import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell } from '../../types';

interface mainState {
  cells: Map<number, Cell>; // Using a Map for better performance
  cols: number;
  appliedCols: number;
  rows: number;
  appliedRows: number;
  appliedCellNumber: number;
  image: string | null;
}

const initialState: mainState = {
  cells: new Map(),
  cols: 1,
  appliedCols: 1,
  rows: 1,
  appliedRows: 1,
  appliedCellNumber: 0,
  image: null,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    /** This will be used to generate the Map of cells */
    createCells: (state, action: PayloadAction<number>) => {
      const newCells = new Map<number, Cell>();
      for (let i = 0; i < action.payload; i++) {
        newCells.set(i, {
          id: i,
          label: `Cell ${i + 1}`,
          hidden: false,
          highlighted: false,
        });
      }
      state.cells = newCells;
      state.appliedCellNumber = action.payload;
    },
    /** Toggle the cell visibility on/off */
    toggleCellVisibility: (state, action: PayloadAction<number>) => {
      const cell = state.cells.get(action.payload);
      if (cell) {
        cell.hidden = !cell.hidden;
        state.cells.set(action.payload, cell); // Update the cell in the Map
      }
    },
    /** Toggle the highlighted state for a single cell by its ID */
    cellHighlightOn: (state, action: PayloadAction<number>) => {
      const cell = state.cells.get(action.payload);
      if (cell) {
        cell.highlighted = true;
        state.cells.set(action.payload, cell); // Update the cell in the Map
      }
    },
    cellHighlightOff: (state, action: PayloadAction<number>) => {
      const cell = state.cells.get(action.payload);
      if (cell) {
        cell.highlighted = false;
        state.cells.set(action.payload, cell); // Update the cell in the Map
      }
    },
    setCols: (state, action: PayloadAction<number>) => {
      state.cols = action.payload;
    },
    setRows: (state, action: PayloadAction<number>) => {
      state.rows = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload; // Save the image
    },
    applyColsAndRows: (state) => {
      state.appliedCols = state.cols;
      state.appliedRows = state.rows;
    },
  },
});

export const {
  createCells,
  toggleCellVisibility,
  cellHighlightOn,
  cellHighlightOff,
  setCols,
  setRows,
  setImage,
  applyColsAndRows,
} = mainSlice.actions;

export default mainSlice.reducer;
