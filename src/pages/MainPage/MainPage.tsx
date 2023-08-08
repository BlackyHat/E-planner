import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchEvents } from '../../redux/events/eventsOperations';
import { useAppDispatch } from '../../redux/hooks';

import EventsToolbar from '../../components/EventsToolbar/EventsToolbar';
import PaginatedItems from '../../components/Pagination/Pagination';
import scss from './MainPage.module.scss';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  return (
    <>
      <h1 className={scss.hiddenTitle}>{t('Main page Event Planner')}</h1>
      <EventsToolbar />
      <PaginatedItems itemsPerPage={4} />
    </>
  );
};
