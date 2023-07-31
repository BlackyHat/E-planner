import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import scss from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={scss.container}>
      <h1>Layout HEADER</h1>
      {/* <AppBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
