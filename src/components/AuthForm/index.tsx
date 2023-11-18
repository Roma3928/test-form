import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';
import loginInIcon from '../../assets/img/logIn-icon.svg';
import Field from '../UI/Field';
import Button from '../UI/Button';
import { AuthFields } from './AuthForm.interface';
import { validEmail } from './Auth.valid';
import { useActions } from '../../hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AuthForm: FC = () => {
  const { login } = useActions();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<AuthFields>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AuthFields> = (data) => {
    login(data);
    reset();
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>
        Log In <img src={loginInIcon} alt="" />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          {...register('email', {
            required: 'Email is required!',
            pattern: {
              value: validEmail,
              message: 'Invalid email',
            },
          })}
          type="email"
          label="Email"
          error={errors.email}
        />
        <Field
          {...register('password', {
            required: 'Password is required!',
            minLength: {
              value: 6,
              message: 'Minimum password length 6 characters',
            },
          })}
          type="password"
          label="Password"
          error={errors.password}
        />
        <Button>Log In</Button>
      </form>
    </div>
  );
};

export default AuthForm;
