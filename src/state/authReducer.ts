import {createSlice} from "@reduxjs/toolkit";

interface AuthReducer {
    token: string | null;
    isLoggedIn: boolean;
    role?: string;
}

const initialState: AuthReducer = {
    token: null,
    isLoggedIn: true,
    role:'user'
}

export const authSlice = createSlice({
    name: 'auth',
   initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.role = action.payload?.role;
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