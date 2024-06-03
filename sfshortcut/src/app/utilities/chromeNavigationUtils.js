import { setUrl } from "../../slices/navigationSlice";
import { useDispatch } from "react-redux";
import { store } from "../store";

const navigateTab = (url, fullLink = false) => {
  const link = fullLink
    ? url
    : "https://creative-hawk-k51mlq-dev-ed.trailblaze.lightning.force.com/lightning/" +
      url;

  if (chrome.storage) {
    chrome.tabs.update({
      link,
    });
    window.close();
  }
};

const navigateShortcut = (urlPath) => {
  const currentUrl = getCurrentUrl();

  if (validateCurrentUrl(currentUrl)) {
    let breakIndex = currentUrl.indexOf(".com/");
    let locationHost = currentUrl.substring(0, breakIndex + 4);

    navigateTab(`${locationHost}${urlPath}`);
  }
};

const getCurrentUrl = (callback) => {
  if (chrome.tabs) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const currentUrl = tabs[0].url;
      callback(currentUrl); // Pass the URL to the callback function
    });
  }
};

const validateCurrentUrl = (url) => {
  return url.includes("lightning.force.com") || url.includes("salesforce.com");
};

const validateUrl = () => {
  getCurrentUrl((url) => {
    console.log(url);
    if (validateCurrentUrl(url)) {
      store.dispatch(setUrl(url));
    }
  });
};

export { navigateTab, navigateShortcut, validateUrl };
