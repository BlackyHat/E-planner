import BackLink from '../../components/BackLink/BackLink';
import EventForm from '../../components/EventForm/EventForm';
import scss from './CreateEventPage.module.scss';

export const CreateEventPage = () => {
  return (
    <>
      <BackLink />
      <h1 className={scss.title}>Create new event</h1>
      <EventForm />
    </>
  );
};
