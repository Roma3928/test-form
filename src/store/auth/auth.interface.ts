import { AuthData } from '../../services/auth/auth.helper';

export interface AuthInitalState extends AuthData {
  isLoading: boolean;
}
