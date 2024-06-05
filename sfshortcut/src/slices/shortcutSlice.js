import { createSlice } from "@reduxjs/toolkit";
import {
  defaultShortcuts,
  defaultFavourites,
} from "../app/utilities/defaultShortcutData";

const initialState = {
  shortcutFavourites: defaultFavourites,
  shortcuts: defaultShortcuts,
};

export const shortcutSlice = createSlice({
  name: "shortcut",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      const { savedFavourites } = action.payload;
      let newData = state.shortcuts;
      let favouritesList;

      if (Array.isArray(savedFavourites) && savedFavourites.length > 0) {
        favouritesList = savedFavourites;
        state.shortcutFavourites = savedFavourites;
      } else {
        favouritesList = defaultFavourites;
      }

      favouritesList.forEach((element) => {
        newData[element].favourite = true;
      });

      state.shortcuts = newData;
    },
    setShortcutFavourite: (state, action) => {
      const { shortcutKey } = action.payload;

      let newShortCutFavourites = state.shortcutFavourites;

      if (newShortCutFavourites.includes(shortcutKey)) {
        console.log("REMOVE");
        newShortCutFavourites = state.shortcutFavourites.filter(
          (item) => item !== shortcutKey
        );
      } else {
        console.log("ADD");
        newShortCutFavourites.push(shortcutKey);
      }

      console.log(newShortCutFavourites);
      state.shortcutFavourites = newShortCutFavourites;
    },
    onSearchTermChanged: (state, action) => {
      const oldSearchTerm = state.searchTerm;
      const newSearchTerm = action.payload.toLowerCase().replace(/\s+/g, "_");

      console.log(newSearchTerm, "SEARCH");

      //WHAT IS THIS FOR?
      state.searchTerm = newSearchTerm;
      let searchResults = {};

      // Restore full search results.
      if (oldSearchTerm && !newSearchTerm) {
        searchResults = defaultShortcuts;
      } else {
        for (const key in defaultShortcuts) {
          if (key.includes(newSearchTerm)) {
            searchResults[key] = defaultShortcuts[key];
          }
        }
      }
      state.shortcuts = searchResults;
    },
  },
});

export const { setFavourites, setShortcutFavourite, onSearchTermChanged } =
  shortcutSlice.actions;
export const selectFavorites = (state) => state.shortcut.shortcutFavourites;
export const selectShortcuts = (state) => state.shortcut.shortcuts;
export const selectSearchTerm = (state) => state.shortcut.searchTerm;

export default shortcutSlice.reducer;
