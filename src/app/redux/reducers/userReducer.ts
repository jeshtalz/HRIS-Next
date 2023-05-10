"use client";

import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    token: string,
    name: string
}

const initialState: UserState = {
    token: '',
    name: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;