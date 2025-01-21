import { setUrl, setNavigationPage } from "../../slices/navigationSlice";
import { store } from "../store";
import { homeViewLabel } from "./predefinedVariables";

const navigateTab = (url, createNewTab) => {
  if (chrome.storage) {
    if (createNewTab) {
      chrome.tabs.create({
        url,
      });
    } else {
      chrome.tabs.update({
        url,
      });
    }
    window.close();
  }
};

const navigateShortcut = (urlPath, newTabOveride) => {
  const url = store.getState().navigation.url;

  const openInNewTab =
    newTabOveride == undefined
      ? store.getState().settings.settings.openShortcutsInNewTab
      : newTabOveride;

  if (validateCurrentUrl(url)) {
    let breakIndex = url.indexOf(".com/");
    let locationHost = url.substring(0, breakIndex + 4);

    navigateTab(`${locationHost}${urlPath}`, openInNewTab);
  } else {
    store.dispatch(setNavigationPage(homeViewLabel));
  }
};

async function getCurrentTab() {
  let tabs = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tabs.length > 0) {
    return tabs[0].url;
  } else {
    return null;
  }
}
const validateCurrentUrl = (url) => {
  return url && (url.includes("lightning") || url.includes("salesforce.com"));
};

const validateUrl = async () => {
  const url = await getCurrentTab();

  if (validateCurrentUrl(url)) {
    store.dispatch(setUrl(url));
    return true;
  }
  return false;
};

export { navigateTab, navigateShortcut, validateUrl };
