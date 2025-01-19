import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell } from '../../types';

interface LayoutState {
  // A hash map is better for performance since we can use the IDs as keys
  // but for now using an array
  cells: Cell[];
  cols: number;
  rows: number;
  appliedCellNumber: number;
  image: string | null;
}

const initialState: LayoutState = {
  cells: [],
  cols: 1,
  rows: 1,
  appliedCellNumber: 0,
  image: null,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    /** This will be used to generate the array of cells */
    createCells: (state, action: PayloadAction<number>) => {
      state.cells = new Array(action.payload).fill(0).map((_, index) => ({
        id: index,
        label: `Cell ${index + 1}`,
        hidden: false,
        highlighted: false,
      }));
      state.appliedCellNumber = action.payload;
    },
    /** Toggle the cell visibility on/off */
    toggleCellVisibility: (state, action: PayloadAction<number>) => {
      const cell = state.cells.find((c) => c.id === action.payload);
      if (cell) {
        cell.hidden = !cell.hidden;
      }
    },
    /** Toggle the highlighted state for a single cell by its ID */
    cellHighlightOn: (state, action: PayloadAction<number>) => {
      const cell = state.cells.find((c) => c.id === action.payload);
      if (cell) {
        cell.highlighted = true;
      }
    },

    cellHighlightOff: (state, action: PayloadAction<number>) => {
      const cell = state.cells.find((c) => c.id === action.payload);
      if (cell) {
        cell.highlighted = false;
      }
    },
    setCols: (state, action: PayloadAction<number>) => {
      state.cols = action.payload;
    },
    setRows: (state, action: PayloadAction<number>) => {
      state.rows = action.payload;
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload; // Save the image
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
} = mainSlice.actions;

export default mainSlice.reducer;
