import { setUrl } from "../../slices/navigationSlice";
import { store } from "../store";

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
  console.log(urlPath, "PATH");
  if (validateCurrentUrl(url)) {
    let breakIndex = url.indexOf(".com/");
    let locationHost = url.substring(0, breakIndex + 4);

    const newURL = `${locationHost}/lightning${urlPath}`;
    console.log(newURL, "NEW URL");
    // GET SETTINGS FOR NEW TAB

    navigateTab(
      `${locationHost}/lightning${urlPath}`,
      store.getState().settings.settings.openShortcutsInNewTab
    );
  }
};

async function getCurrentTab() {
  let tabs = await chrome.tabs.query({ active: true });

  if (tabs.length > 0) {
    return tabs[0].url;
  } else {
    console.log("No active tab found.");
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
    store.dispatch(setUrl(url));
    return true;
  }
};

export { navigateTab, navigateShortcut, validateUrl };
