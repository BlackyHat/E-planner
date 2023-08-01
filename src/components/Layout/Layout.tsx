import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import scss from './Layout.module.scss';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div className={scss.wrapper}>
      <AppBar />
      <main className={scss.main}>
        <div className={scss.container}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Layout;
