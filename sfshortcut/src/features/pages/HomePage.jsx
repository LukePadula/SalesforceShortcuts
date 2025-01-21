import React from "react";
import "./HomePage.css";
import { useSelector } from "react-redux";
import {
  selectObjectShortcuts,
  selectFavorites,
  selectObjectFavourites,
  selectShortcuts,
  selectItemReOrder,
} from "../../slices/shortcutSlice";
import { selectSettings } from "../../slices/settingsSlice";
import PageSlider from "./PageSlider";
import FavouriteList from "../FavouriteList";
import ActionBlocked from "../ActionBlocked";

export default function HomePage({ urlValid }) {
  const objectShortcuts = useSelector(selectObjectShortcuts);
  const favourites = useSelector(selectFavorites);
  const objectFavourites = useSelector(selectObjectFavourites);
  const shortcuts = useSelector(selectShortcuts);
  const userSettings = useSelector(selectSettings);
  const itemReOrderEnabled = useSelector(selectItemReOrder);

  if (!urlValid) {
    return <ActionBlocked type="invalidUrl" />;
  }

  const propsArray = [
    {
      data: favourites,
      shortcuts,
      filterLabel: "Setup",
      userSettings,
      itemReOrderEnabled,
    },
    {
      data: objectFavourites,
      shortcuts: objectShortcuts,
      filterLabel: "Objects",
      userSettings,
      itemReOrderEnabled,
    },
  ];

  return (
    <div className="container-mid">
      <PageSlider
        Component={FavouriteList}
        propsArray={
          userSettings["openObjectTabOnLaunch"]
            ? propsArray.reverse()
            : propsArray
        }
        allowSort={true}
      />
    </div>
  );
}
