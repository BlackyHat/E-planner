import { selectFilteredEvents } from '../../redux/events/eventSelectors';
import {
  setCategoryFilter,
  setFilter,
  setSortBy,
} from '../../redux/events/eventSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import scss from './LangSwitcher.module.scss';
const LangSwitcher = () => {
  const events = useAppSelector(selectFilteredEvents);
  // console.log('🚀 ~ LangSwitcher ~ EVENTS:', events);

  const dispatch = useAppDispatch();

  const langChange = () => {
    dispatch(setCategoryFilter('art'));
    dispatch(setSortBy('Z-A'));
    dispatch(setFilter(''));
  };

  return (
    <div onClick={langChange} className={scss.container}>
      UK +
    </div>
  );
};

export default LangSwitcher;
