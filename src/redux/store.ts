import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './slices/main_slice';

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore paths in the state that include the `cells` Map
        ignoredPaths: ['main.cells'],
        // Ignore specific actions that contain non-serializable values
        ignoredActionPaths: ['payload'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
