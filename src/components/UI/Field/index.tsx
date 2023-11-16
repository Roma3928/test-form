import { FC, useState } from 'react';
import styles from './Field.module.scss';
import { IField } from './Field.interface';
import passwordHiddenIcon from '../../../assets/img/password-hidden-icon.svg';
import passwordVisibleIcon from '../../../assets/img/password-visible-icon.svg';

const Field: FC<IField> = ({ type, label, error }) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const toggleVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      {error && <div>{error?.message}</div>}
      <div className={styles.inputBox}>
        <label>{label}</label>
        <input
          type={passwordVisible ? 'text' : type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {type === 'password' && (
          <img
            className={styles.icon}
            src={passwordVisible ? passwordHiddenIcon : passwordVisibleIcon}
            alt="Иконка видимости пароля"
            onClick={toggleVisible}
          />
        )}
      </div>
    </>
  );
};

export default Field;
