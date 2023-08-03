import EventsToolbar from '../../components/EventsToolbar/EventsToolbar';
import PaginatedItems from '../../components/Pagination/Pagination';
import { fetchEvents } from '../../redux/events/eventsOperations';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  return (
    <>
      <EventsToolbar />
      <PaginatedItems itemsPerPage={4} />
    </>
  );
};
