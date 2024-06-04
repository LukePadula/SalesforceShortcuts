import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: {},
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    loadSettings: (state, action) => {
      state.settings = action.payload;
    },
    setSettings: (state, action) => {
      const { key, value } = action.payload;

      state.settings[key] = value;
    },
  },
});

export const { loadSettings } = settingsSlice.actions;
// export const selectNavigationPage = (state) => state.navigation.navigationPage;

export default settingsSlice.reducer;
