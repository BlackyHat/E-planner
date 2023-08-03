import { IEvent } from '../helpers/interfaces';

export const sortByCondition = (sortBy: string, filteredEvents: IEvent[]) => {
  switch (sortBy) {
    case 'A-Z':
      return filteredEvents.sort((a, b) => a.title.localeCompare(b.title));

    case 'Z-A':
      return filteredEvents.sort((a, b) => b.title.localeCompare(a.title));

    case 'dateASC':
      return filteredEvents.sort((a, b) => a.date.localeCompare(b.date));

    case 'dateDESC':
      return filteredEvents.sort((a, b) => b.date.localeCompare(a.date));

    case 'priorityASC':
      return filteredEvents.sort((a, b) =>
        a.priority.localeCompare(b.priority)
      );

    case 'priorityDESC':
      return filteredEvents.sort((a, b) =>
        b.priority.localeCompare(a.priority)
      );

    default:
      return filteredEvents;
  }
};

export const filterByKey = (filter: string, filteredEvents: IEvent[]) => {
  return filteredEvents.filter((event) => {
    const normalizedFilter = filter.toLowerCase();
    for (const key in event) {
      if (typeof event[key] === 'string') {
        const value = event[key] as string;
        if (value.toLowerCase().includes(normalizedFilter)) {
          return true;
        }
      }
    }
    return false;
  });
};

export const filterByCategory = (
  categoryFilter: string,
  filteredEvents: IEvent[]
) => {
  const filter = filteredEvents.filter(
    ({ category }) => category === categoryFilter
  );
  return filter;
};
