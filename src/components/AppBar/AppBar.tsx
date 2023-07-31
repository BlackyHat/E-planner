import Filter from '../Filter/Filter';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import scss from './AppBar.module.scss';

const AppBar = () => {
  return (
    <div className={scss.wrapper}>
      <header className={scss.header}>
        <div className={scss.container}>
          <h1 className={scss.title}>Event Planner</h1>
          <div className={scss.toolbar}>
            <Filter />
            <LangSwitcher />
          </div>
        </div>
      </header>
    </div>
  );
};

export default AppBar;
