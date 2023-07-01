
import { getCurrentUser, logOut, login, register } from './authOperations';
import { initialState } from 'redux/initialState';

const { createSlice } = require('@reduxjs/toolkit');


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state) {
      state.isLoggedIn = false;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state) {
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = null;

    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    
    }
  },
});

export const authReducer = authSlice.reducer;
