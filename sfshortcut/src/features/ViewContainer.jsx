import React, { useEffect } from "react";
import NavigationBar from "./navigation/NavigationBar";
import ContentContainer from "./ContentContainer";
import "./ViewContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { setFavourites, selectFavorites } from "../slices/shortcutSlice";
import { selectAlertModal } from "../slices/navigationSlice";
import AlertModal from "./AlertModal";
import { validateUrl } from "../app/utilities/chromeNavigationUtils";
import { loadSettings } from "../slices/settingsSlice";
import { getChromeStorage, setChromeStorage } from "../app/utilities/chromeAPI";

export default function ViewContainer() {
  const dispatch = useDispatch();
  const shortcutFavourites = useSelector(selectFavorites);
  const alertModalConfig = useSelector(selectAlertModal);

  // Get when first renders
  useEffect(() => {
    validateUrl();
    getChromeStorage();
  }, []);

  // Every time shortcut changes
  useEffect(() => {
    console.log("CHANGE");
    setChromeStorage(shortcutFavourites);
  }, [shortcutFavourites]);

  return (
    <div className="container">
      <NavigationBar />
      <ContentContainer />
      {alertModalConfig && <AlertModal config={alertModalConfig} />}
    </div>
  );
}
