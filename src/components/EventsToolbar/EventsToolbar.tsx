import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { eventCategories, sortByParams } from '../../helpers/enums';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import { VscAdd } from 'react-icons/vsc';
import scss from './EventsToolbar.module.scss';

const EventsToolbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <ul className={scss.toolbar}>
        <li>
          <FilterDropdown
            options={Object.values(eventCategories)}
            title={t('Categories')}
          />
        </li>
        <li>
          <FilterDropdown
            options={Object.values(sortByParams)}
            isSortBy={true}
            title={t('SortBy')}
          />
        </li>
        <li>
          <button
            type="button"
            className={scss.activeButton}
            onClick={() => {
              navigate('/create-event');
            }}
            title={t('Add new event')}
          >
            <VscAdd className={scss.activeButtonIcon} />
            <span className={scss.activeButtonLabel}>{t('Add new event')}</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default EventsToolbar;
