import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post(`${BASE_URL}users/signup`, credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post(`${BASE_URL}users/login`, credentials);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post(`${BASE_URL}users/logout`);
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state.auth.token);
    const persistedToken = state.auth.token;

    
    if (persistedToken === null) {
      return console.log('no token');
      
    }
    
    token.set(persistedToken);
    try {
      
      const response = await axios.get(`${BASE_URL}users/current`);
      console.log('dasj');
      return response.data;
      
    } catch (error) {
      console.log(error);
    }
  }
);
