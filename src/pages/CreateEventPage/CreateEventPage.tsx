import { useTranslation } from 'react-i18next';

import BackLink from '../../components/BackLink/BackLink';
import EventForm from '../../components/EventForm/EventForm';
import scss from './CreateEventPage.module.scss';

export const CreateEventPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <BackLink />
      <h1 className={scss.title}>{t('Create new event')}</h1>
      <EventForm />
    </>
  );
};
