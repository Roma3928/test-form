import { FC } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.contetnt}>
          <Link to="/">
            <div className={styles.logo}>
              <h1 className={styles.title}>Y_LAB Development</h1>
              <p className={styles.desription}>Digital-производство</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
