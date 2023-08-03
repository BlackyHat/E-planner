import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi } from '../../http/http';
import { IEvent } from '../../helpers/interfaces';

interface IUpdateEventProps {
  eventId: string;
  newEvent: IEvent;
}

export const fetchEvents = createAsyncThunk(
  'events/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await publicApi.get(`/events`);
      return data.events;
    } catch (error) {
      const errorMessage = (error as Error).message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const addEvent = createAsyncThunk(
  'events/addEvents',
  async (newEvent: IEvent, thunkAPI) => {
    try {
      const { data } = await publicApi.post('/events', { ...newEvent });
      return data;
    } catch (error) {
      const errorMessage = (error as Error).message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const removeEvent = createAsyncThunk(
  'events/removeEvent',
  async (eventId: string, thunkAPI) => {
    try {
      const { data } = await publicApi.delete(`/events/${eventId}`);
      return data;
    } catch (error) {
      const errorMessage = (error as Error).message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
export const updateEvent = createAsyncThunk(
  'events/updateEvent',
  async ({ eventId, newEvent }: IUpdateEventProps, thunkAPI) => {
    try {
      const { data } = await publicApi.patch(`/events/${eventId}`, {
        ...newEvent,
      });

      return data;
    } catch (error) {
      const errorMessage = (error as Error).message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
