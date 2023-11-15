import { FC } from 'react';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className="content">
      <h1 className={styles.title}>
        Welcome! <br />
        You have successfully logged in <span>👋</span>
      </h1>
    </div>
  );
};

export default Home;
