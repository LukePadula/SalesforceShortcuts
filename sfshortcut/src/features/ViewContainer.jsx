import React, { useEffect } from "react";
import NavigationBar from "./navigation/NavigationBar";
import ContentContainer from "./ContentContainer";
import "./ViewContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { setFavourites, selectFavorites } from "../slices/shortcutSlice";
import { selectAlertModal } from "../slices/navigationSlice";
import AlertModal from "./AlertModal";
import { validateUrl } from "../app/utilities/chromeNavigationUtils";

export default function ViewContainer() {
  const dispatch = useDispatch();
  const shortcuts = useSelector(selectFavorites);
  const alertModalConfig = useSelector(selectAlertModal);

  // Get when first renders
  useEffect(() => {
    validateUrl();
    if (chrome.storage) {
      chrome.storage.sync.get(["shortcuts"], (result) => {
        if (result.shortcuts) {
          dispatch(setFavourites({ savedFavourites: result.shortcuts }));
        }
      });
    } else {
      dispatch(setFavourites({ savedFavourites: [] }));
    }
  }, []);

  // Every time shortcut changes
  useEffect(() => {
    console.log("CHANGE");
    if (chrome.storage) {
      chrome.storage.sync.set({ shortcuts });
    }
  }, [shortcuts]);

  return (
    <div className="container">
      <NavigationBar />
      <ContentContainer />
      {alertModalConfig && <AlertModal config={alertModalConfig} />}
    </div>
  );
}
