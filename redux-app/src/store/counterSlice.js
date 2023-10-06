import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 value :0,
 text:''
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
        state.value+=1
    },
    decrement: (state, action) => {
        state.value-=1
    },
    incrementByAmount: (state, action) => {
        state.text=action.payload

  }
}
});

export const { increment, decrement,incrementByAmount } = countSlice.actions;

export default countSlice.reducer;
