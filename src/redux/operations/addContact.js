
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = 'https://connections-api.herokuapp.com/';


export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}contacts`, {
                ...data
             });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);