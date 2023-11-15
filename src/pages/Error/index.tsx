import { FC } from 'react';
import styles from './Error.module.scss';

const Erorr: FC = () => {
  return (
    <div className={styles.content}>
      <p>😔</p>
      <h1>Page not found</h1>
    </div>
  );
};

export default Erorr;
