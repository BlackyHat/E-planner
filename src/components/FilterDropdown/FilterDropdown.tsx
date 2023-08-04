import clsx from 'clsx';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectCategoryFilter,
  selectSortBy,
} from '../../redux/events/eventSelectors';
import { setCategoryFilter, setSortBy } from '../../redux/events/eventSlice';

import sortByicon from '../../assets/icons/sortBy.svg';
import filter from '../../assets/icons/filter.svg';
import arrow from '../../assets/icons/arrow-small.svg';
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

  const handleOptionChange = (option: string) => {
    if (isSortBy) {
      dispatch(setSortBy(option));
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
        >
          <img
            src={isSortBy ? sortByicon : filter}
            className={scss.buttonIcon}
          />
          <span className={scss.buttonLabel}>{getValue() || title}</span>
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
              <span> {option}</span>
              {isSortBy && <img src={arrow} className={scss.iconArrow} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterDropdown;