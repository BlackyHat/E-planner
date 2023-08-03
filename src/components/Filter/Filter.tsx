import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectFilter } from '../../redux/events/eventSelectors';
import { setFilter } from '../../redux/events/eventSlice';

import { MdClear } from 'react-icons/md';
import search from '../../assets/icons/search.svg';
import scss from './Filter.module.scss';
const Filter = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };
  const clearInput = () => {
    dispatch(setFilter(''));
  };
  return (
    <div className={scss.container}>
      <input
        value={filter}
        name="filter"
        onChange={handleFilter}
        className={scss.input}
        placeholder="Search by keywords"
      />
      <img src={search} className={scss.buttonIcon} />
      {filter && <MdClear className={scss.clearIcon} onClick={clearInput} />}
    </div>
  );
};

export default Filter;
