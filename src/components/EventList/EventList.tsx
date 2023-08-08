import EventListItem from '../EventListItem/EventListItem';
import { IEvent } from '../../helpers/interfaces';

import scss from './EventList.module.scss';

const EventList: React.FC<{ events: IEvent[] }> = ({ events }) => {
  return (
    <ul className={scss.container}>
      {events.length > 0 &&
        events.map((event) => <EventListItem key={event._id} data={event} />)}
    </ul>
  );
};

export default EventList;
