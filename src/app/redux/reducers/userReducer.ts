"use client";

import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    token: string,
    name: string,
    email: string
}

const initialState: UserState = {
    token: '',
    name: '',
    email: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { setName, setToken,setEmail} = userSlice.actions;

export default userSlice.reducer;