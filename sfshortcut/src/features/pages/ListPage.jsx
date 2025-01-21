import React from "react";
import ShortcutList from "../ShortcutList";
import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectObjectFavourites,
  selectShortcuts,
  selectObjectShortcuts,
} from "../../slices/shortcutSlice";
import PageSlider from "./PageSlider";
import { selectSettings } from "../../slices/settingsSlice";
import "./ListPage.css";

export default function ListPage() {
  const favourites = useSelector(selectFavorites);
  const objectFavourites = useSelector(selectObjectFavourites);
  const shortcuts = useSelector(selectShortcuts);
  const objectShortcuts = useSelector(selectObjectShortcuts);
  const userSettings = useSelector(selectSettings);

  const allSetupShortcuts = { ...shortcuts };
  const allObjectShortcuts = { ...objectShortcuts };

  favourites.forEach((key) => {
    if (allSetupShortcuts[key]) {
      allSetupShortcuts[key] = { ...allSetupShortcuts[key], favourite: true };
    }
  });

  objectFavourites.forEach((key) => {
    if (allObjectShortcuts[key]) {
      allObjectShortcuts[key] = { ...allObjectShortcuts[key], favourite: true };
    }
  });

  return (
    <div className="shortcut-list-container container-mid">
      <div className="item-list">
        <PageSlider
          Component={ShortcutList}
          propsArray={[
            {
              filterLabel: "All",
              data: { ...allSetupShortcuts, ...allObjectShortcuts },
              userSettings,
            },
            {
              filterLabel: "Objects",
              data: allObjectShortcuts,
              userSettings,
            },
          ]}
        />
      </div>
    </div>
  );
}
