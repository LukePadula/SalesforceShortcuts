import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigationPage: "Home",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavigationPage: (state, action) => {
      state.navigationPage = action.payload;
    },
  },
});

export const { setNavigationPage } = navigationSlice.actions;
export const selectNavigationPage = (state) => state.navigation.navigationPage;

export default navigationSlice.reducer;
