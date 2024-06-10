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

const navigateShortcut = (urlPath) => {
  const url = store.getState().navigation.url;

  if (validateCurrentUrl(url)) {
    let breakIndex = url.indexOf(".com/");
    let locationHost = url.substring(0, breakIndex + 4);

    navigateTab(
      `${locationHost}${urlPath}`,
      store.getState().settings.settings.openShortcutsInNewTab
    );
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
  return (
    url &&
    (url.includes("lightning.force.com") || url.includes("salesforce.com"))
  );
};

const validateUrl = async () => {
  const url = await getCurrentTab();
  if (validateCurrentUrl(url)) {
    console.log("VALID");
    store.dispatch(setUrl(url));
    return true;
  }
};

export { navigateTab, navigateShortcut, validateUrl };
