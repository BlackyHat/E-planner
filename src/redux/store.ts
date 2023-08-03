import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { initState } from './store.initState';
import { eventReducer } from './events/eventSlice';

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    events: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
