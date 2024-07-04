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

export default function ViewContainer() {
  const shortcutFavourites = useSelector(selectFavorites);
  const objectFavourites = useSelector(selectObjectFavourites);
  const userSettings = useSelector(selectSettings);
  const alertModalConfig = useSelector(selectAlertModal);

  useEffect(() => {
    const initialize = async () => {
      await validateUrl();
      getChromeStorage();
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
    <div className="container">
      <NavigationBar />
      <ContentContainer />
      {alertModalConfig && <AlertModal config={alertModalConfig} />}
    </div>
  );
}
