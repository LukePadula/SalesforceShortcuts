import { setFavourites } from "../../slices/shortcutSlice";
import { loadSettings } from "../../slices/settingsSlice";
import { store } from "../store";

const getChromeStorage = (storageType, key) => {
  if (chrome.storage) {
    chrome.storage.sync.get(["shortcuts"], (result) => {
      if (result.shortcuts) {
        store.dispatch(setFavourites({ savedFavourites: result.shortcuts }));
      }
    });
  } else {
    store.dispatch(setFavourites({ savedFavourites: [] }));
  }
};

const setChromeStorage = (shortcuts) => {
  if (chrome.storage) {
    chrome.storage.sync.set({ shortcuts });
  }
};

export { getChromeStorage, setChromeStorage };
