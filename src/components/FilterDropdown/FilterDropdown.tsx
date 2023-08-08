import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectCategoryFilter,
  selectSortBy,
} from '../../redux/events/eventSelectors';
import { setCategoryFilter, setSortBy } from '../../redux/events/eventSlice';

import { ReactComponent as SortByIcon } from '../../assets/icons/sortBy.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-small.svg';
import scss from './FilterDropdown.module.scss';

interface DropdownProps {
  options: string[];
  title: string;
  isSortBy?: boolean;
}

const FilterDropdown: React.FC<DropdownProps> = ({
  options,
  title,
  isSortBy,
}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleOptionChange = (option: string) => {
    if (isSortBy) {
      dispatch(setSortBy(option));
    } else if (option === 'All') {
      dispatch(setCategoryFilter(null));
    } else {
      dispatch(setCategoryFilter(option));
    }
    setOpen(!open);
  };

  const getValue = () => {
    if (isSortBy) {
      return useAppSelector(selectSortBy);
    } else {
      return useAppSelector(selectCategoryFilter);
    }
  };
  return (
    <>
      <div
        className={clsx(scss.dropdownOverlay, open ? scss.active : scss.closed)}
        onClick={() => setOpen(false)}
      ></div>
      <div className={scss.dropdownContainer}>
        <button
          className={clsx(scss.button)}
          onClick={() => setOpen(!open)}
          type="button"
          aria-label={isSortBy ? 'Sort by params' : 'Filter by category'}
        >
          {isSortBy ? (
            <SortByIcon
              className={scss.buttonIcon}
              aria-label={isSortBy ? 'Sort by params' : 'Filter by category'}
            />
          ) : (
            <FilterIcon
              className={scss.buttonIcon}
              aria-label={isSortBy ? 'Sort by params' : 'Filter by category'}
            />
          )}

          <span className={scss.buttonLabel}>{t(getValue() || t(title))}</span>
        </button>

        <ul
          className={clsx(
            scss.dropdownMenu,
            open ? scss.active : scss.closed,
            isSortBy && scss.sortItme
          )}
        >
          {options.map((option) => (
            <li
              key={option}
              className={scss.dropdownItem}
              onClick={() => handleOptionChange(option)}
              value={option}
            >
              <span>{t(option)}</span>
              {isSortBy && (
                <ArrowIcon
                  aria-label={t('Sort by')}
                  className={scss.iconArrow}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterDropdown;
