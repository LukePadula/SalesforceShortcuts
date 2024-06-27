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
import {
  selectNavigateToRecordVisable,
  setNavigateToRecordVisable,
} from "../slices/navigationSlice";
import NavigateToRecordModal from "../app/modalTools/navigateToRecordModal";

export default function ViewContainer() {
  const dispatch = useDispatch();
  const shortcutFavourites = useSelector(selectFavorites);
  const userSettings = useSelector(selectSettings);
  const alertModalConfig = useSelector(selectAlertModal);
  const navigateToRecordModalVisable = useSelector(
    selectNavigateToRecordVisable
  );

  useEffect(() => {
    const initialize = async () => {
      console.log("STARTED");
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

  if (navigateToRecordModalVisable) {
    return (
      <div className="container">
        <NavigateToRecordModal />
        <div
          className="modal-overlay"
          onClick={(e) => dispatch(setNavigateToRecordVisable())}
        >
          <NavigationBar />
          <ContentContainer />
          {alertModalConfig && <AlertModal config={alertModalConfig} />}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <NavigationBar />
      <ContentContainer />
      {alertModalConfig && <AlertModal config={alertModalConfig} />}
    </div>
  );
}
