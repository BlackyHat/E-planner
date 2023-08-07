import { STATUS } from '../../helpers/enums';

import { createSlice } from '@reduxjs/toolkit';
import { eventsInitState } from './events.initState';
import {
  addEvent,
  fetchEvents,
  removeEvent,
  updateEvent,
} from './eventsOperations';

const handlePending = (state: typeof eventsInitState) => {
  state.status = STATUS.LOADING;
};

const handleRejected = (state: typeof eventsInitState) => {
  state.status = STATUS.ERROR;
};

const eventSlice = createSlice({
  name: 'events',
  initialState: eventsInitState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchEvents.pending, handlePending)
      .addCase(addEvent.pending, handlePending)
      .addCase(updateEvent.pending, handlePending)
      .addCase(removeEvent.pending, handlePending)
      .addCase(fetchEvents.rejected, handleRejected)
      .addCase(addEvent.rejected, handleRejected)
      .addCase(updateEvent.rejected, handleRejected)
      .addCase(removeEvent.rejected, handleRejected)
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = STATUS.SUCCESS;
        state.events = action.payload;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.status = STATUS.SUCCESS;
        state.events.push(action.payload.event);
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.status = STATUS.SUCCESS;
        const idx = state.events.findIndex(
          (event) => event._id === action.payload.event._id
        );
        state.events[idx] = action.payload.event;
      })
      .addCase(removeEvent.fulfilled, (state, action) => {
        state.status = STATUS.SUCCESS;
        const idx = state.events.findIndex(
          (event) => event._id === action.payload._id
        );
        state.events.splice(idx, 1);
      }),
});

export const eventReducer = eventSlice.reducer;
export const { setCategoryFilter, setFilter, setSortBy } = eventSlice.actions;
