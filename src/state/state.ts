
import {colorSlice} from "./colorReducer";
import {authSlice} from "./authReducer";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        color: colorSlice.reducer,
        auth: authSlice.reducer,
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
