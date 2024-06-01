import React, { useEffect } from "react";
import NavigationBar from "./navigation/NavigationBar";
import ContentContainer from "./ContentContainer";
import "./ViewContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { setFavourites, selectFavorites } from "../slices/shortcutSlice";

export default function ViewContainer() {
  const dispatch = useDispatch();
  const shortcuts = useSelector(selectFavorites);

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.get(["shortcuts"], (result) => {
        if (result.shortcuts) {
          dispatch(setFavourites(result.shortcuts));
        }
      });
    }
  }, []);

  useEffect(() => {
    if (chrome.storage) {
      chrome.storage.sync.set({ shortcuts });
    }
  }, [shortcuts]);

  return (
    <div className="container">
      <NavigationBar />
      <ContentContainer />
    </div>
  );
}
