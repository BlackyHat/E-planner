import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  filterByCategory,
  filterByKey,
  sortByCondition,
} from '../../utils/filterData';

export const selectEvents = (state: RootState) => state.events.events;

export const selectFilter = (state: RootState) => state.events.filter;
export const selectSortBy = (state: RootState) => state.events.sortBy;
export const selectCategoryFilter = (state: RootState) =>
  state.events.categoryFilter;
export const selectIsLoading = (state: RootState) => state.events.status;

export const selectEventById = (id: string) =>
  createSelector(selectEvents, (events) =>
    events.find((event) => event._id === id)
  );

export const selectFilteredEvents = createSelector(
  selectEvents,
  selectCategoryFilter,
  selectFilter,
  selectSortBy,
  (events, categoryFilter, filter, sortBy) => {
    let filteredEvents = [...events];

    if (categoryFilter) {
      filteredEvents = filterByCategory(categoryFilter, filteredEvents);
    }

    if (filter) {
      filteredEvents = filterByKey(filter, filteredEvents);
    }

    if (sortBy) {
      filteredEvents = sortByCondition(sortBy, filteredEvents);
    }

    return filteredEvents;
  }
);
