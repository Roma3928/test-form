import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
