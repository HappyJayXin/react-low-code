import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppState } from '../../app/store';

export interface PlaygroundState {
  isOpen: boolean;
  type?: 'layout';
}

const initialState: PlaygroundState = {
  isOpen: false,
  type: undefined,
};

export const playgroundSlice = createSlice({
  name: 'playground',
  initialState,
  reducers: {
    toggleIsOpen: (state, action: PayloadAction<PlaygroundState['isOpen']>) => {
      state.isOpen = action.payload;
    },
    setPlaygroundType: (
      state,
      action: PayloadAction<PlaygroundState['type']>
    ) => {
      state.type = action.payload;
    },
  },
});

export const { toggleIsOpen, setPlaygroundType } = playgroundSlice.actions;

export const selectPlayground = (state: AppState) => state.playground;

export default playgroundSlice.reducer;
