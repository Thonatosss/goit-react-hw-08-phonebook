import { login, register } from "./authOperations";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, {payload}){
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected](state){
            state.isLoggedIn = false;
        },
        [login.fulfilled](state, {payload}){
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [login.rejected](state){
            state.isLoggedIn = true;
        }
    }
})

export const authReducer = authSlice.reducer;