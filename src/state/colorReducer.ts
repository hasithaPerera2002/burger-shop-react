import {createSlice} from "@reduxjs/toolkit";

interface ColorReducer {
    value:string
}

const initialState:ColorReducer =  {
  value: 'primary'
}

export const colorReducer = createSlice({
    name: 'color',
    initialState,
    reducers: {
       primary: (state) => {
           state.value = 'primary'
       },
         secondary: (state) => {

              state.value = 'secondary'
         },
    }

});

export const {primary, secondary} = colorReducer.actions;
export default colorReducer.reducer;
