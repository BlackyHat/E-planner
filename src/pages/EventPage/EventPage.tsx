import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import scss from './EventPage.module.scss';
import EventCard from '../../components/EventCard/EventCard';

export const EventPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('eventId');
  return (
    <>
      <a onClick={() => navigate(-1)} className={scss.backLink}>
        <IoMdArrowBack className={scss.linkIcon} />
        Go back
      </a>
      <EventCard id={eventId} />
    </>
  );
};
