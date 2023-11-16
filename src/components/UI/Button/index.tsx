import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { IButton } from './Button.interface';

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
