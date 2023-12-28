import {createSlice} from "@reduxjs/toolkit";

interface ColorReducer {
    color:string
}

const initialState:ColorReducer =  {
  color: 'primary'
}

export const colorReducer = createSlice({
    name: 'color',
    initialState,
    reducers: {
       primary: (state) => {
           state.color = 'primary'
       },
         secondary: (state) => {

              state.color = 'secondary'
         },
    }

});

export const {primary, secondary} = colorReducer.actions;
export default colorReducer.reducer;
