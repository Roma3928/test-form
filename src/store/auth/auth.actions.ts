import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData } from '../../services/auth/auth.helper';
import { AuthFields } from '../../components/AuthForm/AuthForm.interface';
import AuthService from '../../services/auth/auth.service';

export const login = createAsyncThunk<AuthData, AuthFields>(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      const user = await AuthService.login(email, password);

      const authData: AuthData = {
        id: user.uid,
        email: user.email,
        accessToken: user.refreshToken,
      };
      return authData;
    } catch (e) {
      alert('Incorrect login or password');
      return thunkApi.rejectWithValue(e);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  return {};
});
