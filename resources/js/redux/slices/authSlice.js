import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: sessionStorage.getItem("token"),
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            sessionStorage.setItem("token", action.payload);
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;