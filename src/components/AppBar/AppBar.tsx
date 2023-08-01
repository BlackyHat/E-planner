import Filter from '../Filter/Filter';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import scss from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <span className={scss.title}>Event Planner</span>
        <Filter />
        <LangSwitcher />
      </div>
    </header>
  );
};

export default AppBar;
