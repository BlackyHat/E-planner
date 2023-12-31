import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { eventCategories, sortByParams } from '../../helpers/enums';
import FilterDropdown from '../FilterDropdown/FilterDropdown';

import { VscAdd } from 'react-icons/vsc';
import scss from './EventsToolbar.module.scss';

const EventsToolbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const optionsCategories = ['All', ...Object.values(eventCategories)];
  return (
    <ul className={scss.toolbar}>
      <li>
        <FilterDropdown options={optionsCategories} title={t('Categories')} />
      </li>
      <li>
        <FilterDropdown
          options={Object.values(sortByParams)}
          isSortBy={true}
          title={t('Sort by')}
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
          aria-label={t('Add new event')}
        >
          <VscAdd className={scss.activeButtonIcon} arai-label={t('Add')} />
          <span className={scss.activeButtonLabel}>{t('Add new event')}</span>
        </button>
      </li>
    </ul>
  );
};

export default EventsToolbar;
