import { useNavigate } from 'react-router-dom';

import { eventCategories, sortByParams } from '../../helpers/enums';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import { VscAdd } from 'react-icons/vsc';
import scss from './EventsToolbar.module.scss';

const EventsToolbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className={scss.toolbar}>
        <li>
          <FilterDropdown
            options={Object.values(eventCategories)}
            title={'Categories'}
          />
        </li>
        <li>
          <FilterDropdown
            options={Object.values(sortByParams)}
            isSortBy={true}
            title={'SortBy'}
          />
          {/* <button
            type="button"
            className={scss.button}
            onClick={() => {}}
            title="Sort by"
          >
            <img src={sortByicon} className={scss.buttonIcon} />
            <span className={scss.buttonLabel}>Sort by</span>
          </button> */}
        </li>
        <li>
          <button
            type="button"
            className={scss.activeButton}
            onClick={() => {
              navigate('/create-event');
            }}
            title="Add new event"
          >
            <VscAdd className={scss.activeButtonIcon} />
            <span className={scss.activeButtonLabel}>Add new event</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default EventsToolbar;
