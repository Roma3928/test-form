import { createSlice } from '@reduxjs/toolkit';
import { AuthInitalState } from './auth.interface';
import { login, logout } from './auth.actions';

const initialState: AuthInitalState = {
  id: null,
  email: null,
  accessToken: '',
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.id = payload.id;
        state.email = payload.email;
        state.accessToken = payload.accessToken;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.id = null;
        state.email = null;
        state.accessToken = '';
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.id = null;
        state.email = null;
        state.accessToken = '';
      });
  },
});
