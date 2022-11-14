import { configureStore } from '@reduxjs/toolkit';

import { SaveSlice } from '~/components/FormSaveProduct/SaveSlice';

const store = configureStore({
  reducer: {
    saves: SaveSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
