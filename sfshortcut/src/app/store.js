import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import navigationReducer from "../slices/navigationSlice";
import searchReducer from "../slices/searchSlice";
import shortcutReducer from "../slices/shortcutSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navigation: navigationReducer,
    search: searchReducer,
    shortcut: shortcutReducer,
  },
});
