import { STATUS, eventCategories, sortByParams } from '../../helpers/enums';
import { IEvent } from '../../helpers/interfaces';

interface eventsState {
  filter: string;
  categoryFilter: null | eventCategories;
  sortBy: null | sortByParams;
  events: IEvent[];
  status: STATUS;
}

export const eventsInitState = {
  filter: '',
  categoryFilter: null,
  sortBy: null,
  events: [],
  status: STATUS.IDLE,
} as eventsState;
