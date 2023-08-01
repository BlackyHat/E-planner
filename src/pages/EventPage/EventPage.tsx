import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import scss from './EventPage.module.scss';
import EventCard from '../../components/EventCard/EventCard';

export const EventPage = () => {
  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('eventId');
  console.log('🚀 ---------------------------------🚀');
  console.log('🚀 ~ EventPage ~ eventId:', searchParams);
  console.log('🚀 ---------------------------------🚀');

  return (
    <>
      <Link className={scss.backLink} to="/">
        <IoMdArrowBack className={scss.linkIcon} />
        Go back
      </Link>
      <EventCard id={eventId} />
    </>
  );
};
