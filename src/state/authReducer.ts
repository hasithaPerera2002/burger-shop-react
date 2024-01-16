import {createSlice} from "@reduxjs/toolkit";

interface AuthReducer {
    token: string | null;
    isLoggedIn: boolean;
}

const initialState: AuthReducer = {
    token: null,
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
   initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.token = null;
            state.isLoggedIn = false;
        }
    }
});
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;