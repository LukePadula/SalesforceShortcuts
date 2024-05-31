import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavigation: (state, action) => {
      state.navigationPage = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  navigationSlice.actions;
export const selectCount = (state) => state.counter.value;

export default navigationSlice.reducer;
