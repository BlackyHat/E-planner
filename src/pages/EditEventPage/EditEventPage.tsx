import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import EventForm from '../../components/EventForm/EventForm';
import { toast } from 'react-hot-toast';
import scss from './EditEventPage.module.scss';

export const EditEventPage = () => {
  const { eventId } = useParams();
  const { t } = useTranslation();

  if (!eventId) {
    toast.error(t('notify.No data. Something went wrong.'));
    return null;
  }
  return (
    <>
      <BackLink />
      <h1 className={scss.title}>{t('Edit event')}</h1>
      <EventForm id={eventId} />
    </>
  );
};
