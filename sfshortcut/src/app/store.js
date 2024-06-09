import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../slices/navigationSlice";
import shortcutReducer from "../slices/shortcutSlice";
import settingsReducer from "../slices/settingsSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    shortcut: shortcutReducer,
    settings: settingsReducer,
  },
  middleware: [thunk],
});
