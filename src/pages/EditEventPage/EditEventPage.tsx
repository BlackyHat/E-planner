// import EventForm from '../../components/EventForm/EventForm';
import scss from './EditEventPage.module.scss';

import BackLink from '../../components/BackLink/BackLink';
import EventForm from '../../components/EventForm/EventForm';

export const EditEventPage = () => {
  return (
    <>
      <BackLink />
      <h1 className={scss.title}>Create new event</h1>
      <EventForm />
    </>
  );
};
