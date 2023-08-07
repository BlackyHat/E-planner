import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import EventCard from '../../components/EventCard/EventCard';
import { toast } from 'react-hot-toast';
import BackLink from '../../components/BackLink/BackLink';

export const EventPage = () => {
  const { eventId } = useParams();
  const { t } = useTranslation();

  if (!eventId) {
    toast.error(t('notify.No data. Something went wrong.'));
    return null;
  }

  return (
    <>
      <BackLink />
      <EventCard id={eventId} />
    </>
  );
};
