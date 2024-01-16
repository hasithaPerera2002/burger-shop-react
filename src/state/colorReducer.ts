import {createSlice} from "@reduxjs/toolkit";

interface ColorReducer {
    value:string
}

const initialState:ColorReducer =  {
  value: 'primary'
}

export const colorSlice = createSlice({
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

export const {primary, secondary} = colorSlice.actions;
export default colorSlice.reducer;
