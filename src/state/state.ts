import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {colorReducer} from "./colorReducer";

const rootReducer = combineReducers  ({
  color: colorReducer
})
export const store = configureStore({
    reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
