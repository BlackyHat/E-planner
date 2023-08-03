import { useParams } from 'react-router-dom';

import EventCard from '../../components/EventCard/EventCard';
import { toast } from 'react-hot-toast';
import BackLink from '../../components/BackLink/BackLink';

export const EventPage = () => {
  const { eventId } = useParams();

  if (!eventId) {
    toast.error('No data. Something went wrong.');
    return null;
  }

  return (
    <>
      <BackLink />
      <EventCard id={eventId} />
    </>
  );
};
