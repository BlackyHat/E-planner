import { IEvent } from '../helpers/interfaces';

const priorityOrder: Record<string, number> = {
  High: 1,
  Medium: 2,
  Low: 3,
};

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
      return filteredEvents.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
      );

    case 'priorityDESC':
      return filteredEvents.sort(
        (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
      );

    default:
      return filteredEvents;
  }
};

export const filterByKey = (filter: string, filteredEvents: IEvent[]) => {
  return filteredEvents.filter(({ title, description }) => {
    const normalizedFilter = filter.toLowerCase();
    const isInclude =
      title.toLowerCase().includes(normalizedFilter) ||
      description.toLowerCase().includes(normalizedFilter);
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
