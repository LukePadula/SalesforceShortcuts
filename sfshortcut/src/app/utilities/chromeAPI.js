import { setFavourites } from "../../slices/shortcutSlice";
import { useDispatch } from "react-redux";

const getChromeStorage = (storageType, key) => {
  if (chrome.storage && chrome.storage[storageType]) {
    chrome.storage[storageType].get(["storageObject"], (result) => {
      if (result.storageObject && result.storageObject[key]) {
        const dispatch = useDispatch();
        dispatch(setFavourites(result.storageObject[key]));
      }
    });
  }
};

const setChromeStorage = (key, data) => {
  if (chrome.storage && chrome.storage[storageType]) {
    chrome.storage[storageType].get(["storageObject"], (result) => {
      let storageObject = result.storageObject || {};

      storageObject[key] = data;
      chrome.storage[storageType].set({ storageObject });
    });
  }
};

export { getChromeStorage, setChromeStorage };
