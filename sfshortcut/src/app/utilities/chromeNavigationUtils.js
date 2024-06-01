const navigateTab = (url) => {
  chrome.tabs.update({
    url,
  });
  window.close();
};

const navigateShortcut = (urlPath) => {
  const currentUrl = getCurrentUrl();

  if (validateCurrentUrl(currentUrl)) {
    let breakIndex = currentUrl.indexOf(".com/");
    let locationHost = currentUrl.substring(0, breakIndex + 4);

    navigateTab(`${locationHost}${urlPath}`);
  }
};

const getCurrentUrl = () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    return tabs[0].url;
  });
};

const validateCurrentUrl = (url) => {
  return url.includes("lightning.force.com") || url.includes("salesforce.com");
};

export { navigateTab, navigateShortcut };
