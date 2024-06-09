import React, { useEffect } from "react";
import NavigationBar from "./navigation/NavigationBar";
import ContentContainer from "./ContentContainer";
import "./ViewContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../slices/shortcutSlice";
import { selectAlertModal } from "../slices/navigationSlice";
import AlertModal from "./AlertModal";
import { validateUrl } from "../app/utilities/chromeNavigationUtils";
import { getChromeStorage, setChromeStorage } from "../app/utilities/chromeAPI";
import { selectSettings } from "../slices/settingsSlice";

export default function ViewContainer() {
  const dispatch = useDispatch();
  const shortcutFavourites = useSelector(selectFavorites);
  const userSettings = useSelector(selectSettings);
  const alertModalConfig = useSelector(selectAlertModal);
  // Get when first renders
  useEffect(() => {
    const initialize = async () => {
      // Validate URL
      await validateUrl();
      // Get Chrome Storage
      await getChromeStorage();
    };

    initialize();
  }, []);

  // Every time shortcut changes
  useEffect(() => {
    setChromeStorage(shortcutFavourites, undefined);
  }, [shortcutFavourites]);

  // Every time settings change
  useEffect(() => {
    setChromeStorage(undefined, userSettings);
  }, [userSettings]);

  return (
    <div className="container">
      <NavigationBar />
      <ContentContainer />
      {alertModalConfig && <AlertModal config={alertModalConfig} />}
    </div>
  );
}
