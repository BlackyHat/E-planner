import clsx from 'clsx';
import scss from './EventsToolbar.module.scss';
import { CiFilter } from 'react-icons/ci';
import { GrSort } from 'react-icons/gr';
import { VscAdd } from 'react-icons/vsc';

const EventsToolbar = () => {
  return (
    <ul className={scss.toolbar}>
      <li>
        <button
          type="button"
          className={scss.button}
          onClick={() => {}}
          title="Category"
        >
          <CiFilter className={scss.buttonIcon} />
          <span className={scss.buttonLabel}>Category</span>
        </button>
      </li>
      <li>
        <button
          type="button"
          className={scss.button}
          onClick={() => {}}
          title="Sort by"
        >
          <GrSort className={scss.buttonIcon} />
          <span className={scss.buttonLabel}>Sort by</span>
        </button>
      </li>
      <li>
        <button
          type="button"
          className={clsx([scss.button, scss.active])}
          onClick={() => {}}
          title="Add new event"
        >
          <VscAdd className={scss.buttonIcon} />
          <span className={scss.buttonLabel}>Add new event</span>
        </button>
      </li>
    </ul>
  );
};

export default EventsToolbar;
