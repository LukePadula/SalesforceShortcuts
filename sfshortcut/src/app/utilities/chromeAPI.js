import { setFavourites } from "../../slices/shortcutSlice";
import { loadSettings } from "../../slices/settingsSlice";
import { store } from "../store";
import {
  defaultFavourites,
  defaultObjectFavourites,
} from "./defaultShortcutData";

const getChromeStorage = () => {
  if (chrome.storage) {
    chrome.storage.local.get(
      ["shortcuts", "objectShortcuts", "settings"],
      (result) => {
        if (result.shortcuts) {
          store.dispatch(
            setFavourites({
              savedFavourites: result.shortcuts,
              favouriteType: "shortcutFavourites",
            })
          );
        }

        if (result.objectShortcuts) {
          store.dispatch(
            setFavourites({
              savedFavourites: result.objectShortcuts,
              favouriteType: "objectFavourites",
            })
          );
        }

        if (result.settings) {
          store.dispatch(loadSettings({ savedSettings: result.settings }));
        }
      }
    );
  } else {
    store.dispatch(setFavourites({ savedFavourites: [] }));
  }
};

const setChromeStorage = (shortcuts, objectShortcuts, settings) => {
  console.log(objectShortcuts, "OBJECT SHORTCUTS");
  if (chrome.storage) {
    chrome.storage.local.get(
      ["shortcuts", "objectShortcuts", "settings"],
      (result) => {
        if (shortcuts !== undefined) {
          result.shortcuts = shortcuts;
        }
        if (objectShortcuts !== undefined) {
          result.objectShortcuts = objectShortcuts;
        }
        if (settings !== undefined) {
          result.settings = settings;
        }
        chrome.storage.local.set(result);
      }
    );
  }
};

const resetFavourites = () => {
  setChromeStorage([]);
  store.dispatch(
    setFavourites({
      savedFavourites: defaultFavourites,
      favouriteType: "shortcutFavourites",
    })
  );
  store.dispatch(
    setFavourites({
      savedFavourites: defaultObjectFavourites,
      favouriteType: "objectFavourites",
    })
  );

  window.close();
};
export { getChromeStorage, setChromeStorage, resetFavourites };
