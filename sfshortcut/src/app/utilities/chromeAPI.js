import { setFavourites } from "../../slices/shortcutSlice";
import { loadSettings } from "../../slices/settingsSlice";
import { store } from "../store";

const getChromeStorage = (storageType, key) => {
  if (chrome.storage) {
    chrome.storage.sync.get(["shortcuts", "settings"], (result) => {
      if (result.shortcuts) {
        store.dispatch(setFavourites({ savedFavourites: result.shortcuts }));
      }
    });
  } else {
    store.dispatch(setFavourites({ savedFavourites: [] }));
  }
};

const setChromeStorage = (shortcuts, settings) => {
  if (chrome.storage) {
    chrome.storage.sync.get(["shortcuts", "settings"], (result) => {
      const updatedData = {};
      if (shortcuts !== undefined) {
        updatedData.shortcuts = shortcuts;
      }
      if (settings !== undefined) {
        updatedData.settings = settings;
      }
      chrome.storage.sync.set(updatedData);
    });
  }
};

export { getChromeStorage, setChromeStorage };
