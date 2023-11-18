import { FC } from 'react';
import styles from './Home.module.scss';
import { useAuth } from '../../hooks/useAuth';
import Button from '../../components/UI/Button';
import { useActions } from '../../hooks/useActions';

const Home: FC = () => {
  const { logout } = useActions();
  const { email } = useAuth();

  return (
    <>
      <h1 className={styles.title}>Welcome {email}! 👋</h1>
      <div className={styles.button}>
        <Button onClick={logout}>Logout</Button>
      </div>
    </>
  );
};

export default Home;
