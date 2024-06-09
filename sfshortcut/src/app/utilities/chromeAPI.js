import { setFavourites } from "../../slices/shortcutSlice";
import { loadSettings } from "../../slices/settingsSlice";
import { store } from "../store";
import { defaultFavourites } from "./defaultShortcutData";

const getChromeStorage = (storageType, key) => {
  if (chrome.storage) {
    chrome.storage.local.get(["shortcuts", "settings"], (result) => {
      if (result.shortcuts) {
        store.dispatch(setFavourites({ savedFavourites: result.shortcuts }));
      }

      if (result.settings) {
        store.dispatch(loadSettings({ savedSettings: result.settings }));
      }
    });
  } else {
    store.dispatch(setFavourites({ savedFavourites: [] }));
  }
};

const setChromeStorage = (shortcuts, settings) => {
  if (chrome.storage) {
    chrome.storage.local.get(["shortcuts", "settings"], (result) => {
      if (shortcuts !== undefined) {
        result.shortcuts = shortcuts;
      }
      if (settings !== undefined) {
        result.settings = settings;
      }
      chrome.storage.local.set(result);
    });
  }
};

const resetFavourites = () => {
  setChromeStorage([]);
  store.dispatch(setFavourites({ savedFavourites: defaultFavourites }));
  window.close();
};
export { getChromeStorage, setChromeStorage, resetFavourites };
