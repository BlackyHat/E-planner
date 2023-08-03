import { STATUS, eventCategories } from '../../helpers/enums';
import { IEvent } from '../../helpers/interfaces';

interface eventsState {
  filter: string;
  categoryFilter: '' | null;
  sortBy: string;
  events: IEvent[];
  status: STATUS;
}

export const eventsInitState = {
  filter: '',
  categoryFilter: null,
  sortBy: '',
  events: [],
  status: STATUS.IDLE,
} as eventsState;
