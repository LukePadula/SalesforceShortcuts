import { createSlice } from "@reduxjs/toolkit";
import {
  defaultShortcuts,
  defaultFavourites,
  defaultObjectFavourites,
} from "../app/utilities/defaultShortcutData";

const initialState = {
  shortcutFavourites: defaultFavourites,
  objectFavourites: defaultObjectFavourites,
  shortcuts: defaultShortcuts,
};

export const shortcutSlice = createSlice({
  name: "shortcut",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      const { savedFavourites, favouriteType } = action.payload;
      let newData = state.shortcuts;
      let favouritesList;

      if (Array.isArray(savedFavourites) && savedFavourites.length > 0) {
        favouritesList = savedFavourites;
        state[favouriteType] = savedFavourites;
        console.log("NON EMPTY FAVS");
      } else {
        console.log("EMPTY LIST?");
        favouritesList = defaultFavourites;
      }

      favouritesList.forEach((element) => {
        newData[element].favourite = true;
      });

      state.shortcuts = newData;
    },
    setShortcutFavourite: (state, action) => {
      const { shortcutKey, shortcutType } = action.payload;

      let favouritesLabel =
        shortcutType === "Standard Object"
          ? "objectFavourites"
          : "shortcutFavourites";

      console.log(JSON.stringify(state["objectFavourites"]), "OBJECT ");
      console.log(JSON.stringify(state["shortcutFavourites"]), "SHORTCUTS ");

      let newShortCutFavourites = state[favouritesLabel];

      if (newShortCutFavourites.includes(shortcutKey)) {
        newShortCutFavourites = state[favouritesLabel].filter(
          (item) => item !== shortcutKey
        );
      } else {
        newShortCutFavourites.push(shortcutKey);
      }
      state[favouritesLabel] = newShortCutFavourites;
    },
    onSearchTermChanged: (state, action) => {
      const oldSearchTerm = state.searchTerm;
      const newSearchTerm = action.payload.toLowerCase().replace(/\s+/g, "_");
      state.searchTerm = action.payload;
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
    onRestoreFullSearchResults: (state, action) => {
      if (state.searchTerm) {
        state.shortcuts = defaultShortcuts;
        state.searchTerm = "";
      }
    },
  },
});

export const {
  setFavourites,
  setShortcutFavourite,
  onSearchTermChanged,
  onRestoreFullSearchResults,
} = shortcutSlice.actions;
export const selectFavorites = (state) => state.shortcut.shortcutFavourites;
export const selectObjectFavourites = (state) =>
  state.shortcut.objectFavourites;
export const selectShortcuts = (state) => state.shortcut.shortcuts;
export const selectSearchTerm = (state) => state.shortcut.searchTerm;

export default shortcutSlice.reducer;
