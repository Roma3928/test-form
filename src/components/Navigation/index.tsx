import { FC } from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>{/* <Link to="/">Вход</Link> */}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
