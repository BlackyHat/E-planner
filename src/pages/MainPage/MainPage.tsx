import { useEffect, useState } from 'react';
import EventList from '../../components/EventList/EventList';
import EventsToolbar from '../../components/EventsToolbar/EventsToolbar';
import PaginatedItems from '../../components/Pagination/Pagination';
import { publicApi } from '../../http/http';
import { toast } from 'react-hot-toast';

export const MainPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function getEvents() {
      try {
        const { data } = await publicApi.get('/events');
        const { events } = data;
        setEvents(events);
        toast.success('Events loaded.');
      } catch (error) {
        toast.error('Something went wrong.');
      }
    }

    getEvents();
  }, []);

  console.log('🚀 ~ getEvents ~ events:', events);
  return (
    <>
      <EventsToolbar />
      <EventList />
      <PaginatedItems itemsPerPage={1} />
    </>
  );
};
