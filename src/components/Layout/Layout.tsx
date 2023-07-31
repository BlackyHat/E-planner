import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import scss from './Layout.module.scss';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div className={scss.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
