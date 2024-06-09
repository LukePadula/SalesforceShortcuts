import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: { darkMode: true, openShortcutsInNewTab: true },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    loadSettings: (state, action) => {
      state.settings = action.payload.savedSettings;
    },
    setSettings: (state, action) => {
      const { setting, value } = action.payload;
      state.settings[setting] = value;
    },
  },
});

export const { loadSettings, setSettings } = settingsSlice.actions;
export const selectSettings = (state) => state.settings.settings;

export default settingsSlice.reducer;
