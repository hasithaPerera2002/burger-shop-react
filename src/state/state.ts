
import {colorReducer} from "./colorReducer";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        color: colorReducer.reducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
