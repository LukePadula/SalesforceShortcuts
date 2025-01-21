import { createSlice } from "@reduxjs/toolkit";
import {
  defaultShortcuts,
  defaultFavourites,
  defaultObjectFavourites,
  defaultObjectShortcuts,
} from "../app/utilities/defaultShortcutData";

const initialState = {
  shortcutFavourites: defaultFavourites,
  objectFavourites: defaultObjectFavourites,
  allShortcuts: { ...defaultShortcuts, ...defaultObjectShortcuts },
  shortcuts: defaultShortcuts,
  objectShortcuts: defaultObjectShortcuts,
  itemReOrder: false,
  listBatch: 0,
};

export const shortcutSlice = createSlice({
  name: "shortcut",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      const { savedFavourites, favouriteType } = action.payload;
      let newData = state.allShortcuts;
      let favouritesList;

      console.log(savedFavourites, favouriteType, "SET");

      if (Array.isArray(savedFavourites) && savedFavourites.length > 0) {
        favouritesList = savedFavourites;
        state[favouriteType] = savedFavourites;
      } else {
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
      const newSearchTerm = action.payload
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_");

      state.searchTerm = action.payload;

      let setupSearchResults = {};
      let objectSearchResults = {};

      if (!action.payload.trim()) {
        setupSearchResults = defaultShortcuts;
        objectSearchResults = defaultObjectShortcuts;
      } else {
        // Search logic
        for (const key in defaultShortcuts) {
          if (key.toLowerCase().includes(newSearchTerm)) {
            setupSearchResults[key] = defaultShortcuts[key];
          }
        }
        for (const key in defaultObjectShortcuts) {
          const dataKey = key.trim().toLowerCase().replace(/\s+/g, "_");

          if (dataKey.includes(newSearchTerm)) {
            objectSearchResults[key] = defaultObjectShortcuts[key];
          }
        }
      }

      state.shortcuts = setupSearchResults;
      state.objectShortcuts = objectSearchResults;
      state.allShortcuts = { ...setupSearchResults, ...objectSearchResults };
    },
    onRestoreFullSearchResults: (state, action) => {
      if (state.searchTerm) {
        state.shortcuts = defaultShortcuts;
        state.objectShortcuts = defaultObjectShortcuts;
        state.searchTerm = "";
      }
    },
    onToggleListItemDropdown: (state, action) => {
      const { shortcutKey, pageGroup } = action.payload;

      const shortcutList =
        pageGroup === "Standard Object" ? "objectShortcuts" : "shortcuts";
      const listItem = state[shortcutList][shortcutKey];

      listItem.isDropdownOpen = listItem.isDropdownOpen ? false : true;
      state[shortcutList][shortcutKey] = listItem;
    },
    onToggleFavouriteReOrder: (state, action) => {
      state.itemReOrder = !state.itemReOrder;
    },
    setListBatch: (state, action) => {
      const { batchNumber } = action.payload;

      state.listBatch = batchNumber;
    },
  },
});

export const {
  setFavourites,
  setShortcutFavourite,
  onSearchTermChanged,
  onRestoreFullSearchResults,
  onToggleListItemDropdown,
  onToggleFavouriteReOrder,
  setListBatch,
} = shortcutSlice.actions;
export const selectFavorites = (state) => state.shortcut.shortcutFavourites;
export const selectObjectFavourites = (state) =>
  state.shortcut.objectFavourites;
export const selectAllShortcuts = (state) => state.shortcut.allShortcuts;
export const selectShortcuts = (state) => state.shortcut.shortcuts;
export const selectObjectShortcuts = (state) => state.shortcut.objectShortcuts;
export const selectSearchTerm = (state) => state.shortcut.searchTerm;
export const selectItemReOrder = (state) => state.shortcut.itemReOrder;

export default shortcutSlice.reducer;
