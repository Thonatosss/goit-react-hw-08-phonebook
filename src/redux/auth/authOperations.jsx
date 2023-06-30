import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const BASE_URL = 'https://connections-api.herokuapp.com/'

export const register = createAsyncThunk('auth/register', async credentials =>{
    try{
        const response = await axios.post(`${BASE_URL}users/signup`, credentials);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
});

export const login = createAsyncThunk('auth/login', async credentials =>{
    try{
        const response = await axios.post(`${BASE_URL}users/login`, credentials);
        return response.data;
    }
    catch(error){
        console.log(error);
    }
})