import { FC } from 'react';
import styles from './Home.module.scss';
import { redirect } from 'react-router-dom';

const Home: FC = () => {
  let isAuth = false;

  // if (!isAuth) {
  //   return redirect('/login');
  // }

  return (
    <div className="content">
      <h1 className={styles.title}>Welcome! 👋</h1>
    </div>
  );
};

export default Home;
