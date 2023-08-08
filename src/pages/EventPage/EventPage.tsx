import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import EventCard from '../../components/EventCard/EventCard';
import { toast } from 'react-hot-toast';
import BackLink from '../../components/BackLink/BackLink';
import scss from './EventPage.module.scss';

export const EventPage = () => {
  const { eventId } = useParams();
  const { t } = useTranslation();

  if (!eventId) {
    toast.error(t('notify.No data. Something went wrong.'));
    return null;
  }

  return (
    <>
      <h1 className={scss.hiddenTitle}>{t('Event Page')}</h1>
      <BackLink />
      <EventCard id={eventId} />
    </>
  );
};
