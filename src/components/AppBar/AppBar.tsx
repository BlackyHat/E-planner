import { Link } from 'react-router-dom';
import Filter from '../Filter/Filter';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import scss from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <Link to="/" className={scss.title}>
          Event Planner
        </Link>
        <Filter />
        <LangSwitcher />
      </div>
    </header>
  );
};

export default AppBar;
