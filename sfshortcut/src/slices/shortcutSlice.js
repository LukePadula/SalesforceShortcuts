import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shortcutFavourites: {
    Home: { path: "/lightning/page/home", favourite: true },
    Setup: { path: "/lightning/setup/SetupOneHome/home", favourite: true },
    s: { path: "/lightning/page/home", favourite: true },
    d: { path: "/lightning/setup/SetupOneHome/home", favourite: true },
    a: { path: "/lightning/page/home", favourite: true },
    z: { path: "/lightning/setup/SetupOneHome/home", favourite: true },
    a1: { path: "/lightning/setup/SetupOneHome/home", favourite: true },
    a2: { path: "/lightning/setup/SetupOneHome/home", favourite: true },
    a3: { path: "/lightning/setup/SetupOneHome/home", favourite: true },
    l: { path: "/lightning/setup/SetupOneHome/home", favourite: true },
  },
  shortcuts: {},
};

export const shortcutSlice = createSlice({
  name: "shortcut",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.shortcutFavourites = action.payload;
    },
  },
});

export const { setFavourites } = shortcutSlice.actions;
export const selectFavorites = (state) => state.shortcut.shortcutFavourites;

export default shortcutSlice.reducer;
