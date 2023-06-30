
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = 'https://connections-api.herokuapp.com/';


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`${BASE_URL}contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);