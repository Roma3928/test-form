import { useTypedSelector } from './useTypedSelector';

export const useAuth = () => {
  const { id, email, accessToken } = useTypedSelector((state) => state.auth);

  return {
    isAuth: !!accessToken,
    id,
    email,
    accessToken,
  };
};
