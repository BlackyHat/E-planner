import EventList from '../../components/EventList/EventList';
import EventsToolbar from '../../components/EventsToolbar/EventsToolbar';
import PaginatedItems from '../../components/Pagination/Pagination';

export const MainPage = () => {
  return (
    <>
      <EventsToolbar />
      <EventList />
      <PaginatedItems itemsPerPage={1} />
    </>
  );
};
