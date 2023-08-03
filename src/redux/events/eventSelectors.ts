// import { createSelector } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
// import { initState } from '../store.initState';
// import { eventCategories } from '../../helpers/enums';
import { RootState } from '../store';
import {
  filterByCategory,
  filterByKey,
  sortByCondition,
} from '../../utils/filterData';
import EventList from '../../components/EventList/EventList';
// import { IEvent } from '../../helpers/interfaces';

export const selectEvents = (state: RootState) => state.events.events;

export const selectFilter = (state: RootState) => state.events.filter;
export const selectSortBy = (state: RootState) => state.events.sortBy;
export const selectcategoryFilter = (state: RootState) =>
  state.events.categoryFilter;
export const selectIsLoading = (state: RootState) => state.events.status;

export const selectEventById = (id: string) =>
  createSelector(selectEvents, (events) =>
    events.find((event) => event._id === id)
  );

// export const selectByCategory = () =>
//   createSelector(selectEvents, selectcategoryFilter, (events, categoryFilter) =>
//     events.filter((event) => event.category === categoryFilter)
//   );

// export const selectByFilter = () =>
//   createSelector(selectByCategory, selectFilter, (events, filter) =>
//     events.filter((event) => {
//       if (filter) {
//         const normalizedFilter = filter.toLowerCase();
//         for (const key in event) {
//           return !!String(event[key]).toLowerCase().includes(normalizedFilter);
//         }
//       }
//       return false;
//     })
//   );

export const selectFilteredEvents = createSelector(
  selectEvents,
  selectcategoryFilter,
  selectFilter,
  selectSortBy,
  (events, categoryFilter, filter, sortBy) => {
    let filteredEvents = [...events];

    if (categoryFilter) {
      filteredEvents = filterByCategory(categoryFilter, filteredEvents);
      console.log('🚀 ~ filteredEvents:CATEGORY', filteredEvents);
    }

    if (filter) {
      filteredEvents = filterByKey(filter, filteredEvents);
      console.log('🚀 ~ filteredEvents:FILTER', filteredEvents);
    }

    if (sortBy) {
      filteredEvents = sortByCondition(sortBy, filteredEvents);
      console.log('🚀 ~ filteredEvents:SORT-BY', filteredEvents);
    }

    return filteredEvents;
  }
);
