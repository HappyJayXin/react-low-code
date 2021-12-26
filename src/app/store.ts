import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import playgroundSlice from '../features/Playground/playgroundSlice';

export function makeStore() {
  return configureStore({
    reducer: { playground: playgroundSlice },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
