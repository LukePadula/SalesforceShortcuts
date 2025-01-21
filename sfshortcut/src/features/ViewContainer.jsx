import React, { useEffect } from "react";
import NavigationBar from "./navigation/NavigationBar";
import ContentContainer from "./ContentContainer";
import "./ViewContainer.css";
import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectObjectFavourites,
} from "../slices/shortcutSlice";
import { selectAlertModal } from "../slices/navigationSlice";
import AlertModal from "./AlertModal";
import { validateUrl } from "../app/utilities/chromeNavigationUtils";
import { getChromeStorage, setChromeStorage } from "../app/utilities/chromeAPI";
import { selectSettings } from "../slices/settingsSlice";
import { selectCurrentUrl } from "../slices/navigationSlice";

export default function ViewContainer() {
  const userSettings = useSelector(selectSettings);
  const shortcutFavourites = useSelector(selectFavorites);
  const objectFavourites = useSelector(selectObjectFavourites);
  const alertModalConfig = useSelector(selectAlertModal);
  const currentValidUrl = useSelector(selectCurrentUrl);

  useEffect(() => {
    const initialize = async () => {
      getChromeStorage();

      // console.log(
      //   window.matchMedia &&
      //     window.matchMedia("(prefers-color-scheme: dark)").matches
      // );
      await validateUrl();
    };

    initialize();
  }, []);

  useEffect(() => {
    setChromeStorage(shortcutFavourites, objectFavourites, undefined);
  }, [shortcutFavourites, objectFavourites]);

  useEffect(() => {
    setChromeStorage(undefined, undefined, userSettings);
  }, [userSettings]);

  return (
    <div
      className="view-container"
      data-theme={userSettings.darkMode === false ? "light" : "dark"}
    >
      <NavigationBar />
      <ContentContainer urlValid={currentValidUrl ? true : false} />
      {alertModalConfig && <AlertModal config={alertModalConfig} />}
    </div>
  );
}
