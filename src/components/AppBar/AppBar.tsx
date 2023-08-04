import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Filter from '../Filter/Filter';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import scss from './AppBar.module.scss';

const AppBar = () => {
  const { t } = useTranslation();

  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <Link to="/" className={scss.title}>
          {t('Event Planner')}
        </Link>
        <Filter />
        <LangSwitcher />
      </div>
    </header>
  );
};

export default AppBar;
