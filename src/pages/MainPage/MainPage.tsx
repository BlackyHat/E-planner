import EventsToolbar from '../../components/EventsToolbar/EventsToolbar';
import scss from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={scss.main}>
      <EventsToolbar />
    </div>
  );
};
