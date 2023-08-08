import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectFilter } from '../../redux/events/eventSelectors';
import { setFilter } from '../../redux/events/eventSlice';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { MdClear } from 'react-icons/md';
import scss from './Filter.module.scss';

const Filter = () => {
  const [_, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  useEffect(() => {
    setSearchParams({ filter });
  }, [filter]);

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
        placeholder={t('form.Search by keywords')}
      />
      <SearchIcon
        className={scss.buttonIcon}
        aria-label={t('form.Search by keywords')}
      />
      {filter && (
        <MdClear
          className={scss.clearIcon}
          aria-label={t('Clear')}
          onClick={clearInput}
        />
      )}
    </div>
  );
};

export default Filter;
