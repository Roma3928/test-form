import { FC } from 'react';
import Navigation from '../Navigation';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.contetnt}>
          <div className={styles.logo}>
            <h1 className={styles.title}>Y_LAB Development</h1>
            <p className={styles.desription}>Digital-производство</p>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
