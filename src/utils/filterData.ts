import { IEvent } from '../helpers/interfaces';

export const sortByCondition = (sortBy: string, filteredEvents: IEvent[]) => {
  switch (sortBy) {
    case 'byNameASC':
      return filteredEvents.sort((a, b) => a.title.localeCompare(b.title));

    case 'byNameDESC':
      return filteredEvents.sort((a, b) => b.title.localeCompare(a.title));

    case 'dateASC':
      return filteredEvents.sort((a, b) =>
        new Date(a.date) < new Date(b.date) ? -1 : 1
      );

    case 'dateDESC':
      return filteredEvents.sort((a, b) =>
        new Date(a.date) > new Date(b.date) ? -1 : 1
      );

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
  return filteredEvents.filter(({ title, description }) => {
    const normalizedFilter = filter.toLowerCase();
    const isInclude =
      title.includes(normalizedFilter) ||
      description.includes(normalizedFilter);
    return isInclude;
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
