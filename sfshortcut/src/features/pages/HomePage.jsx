import React from "react";
import "./HomePage.css";
import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectObjectFavourites,
  selectShortcuts,
} from "../../slices/shortcutSlice";
import ShortcutFavouriteItem from "../shortcuts/ShortcutFavouriteItem";
import ActionBlocked from "../ActionBlocked";
import {
  selectCurrentUrl,
  selectHomePageFilter,
} from "../../slices/navigationSlice";
import PageFilterSelector from "../navigation/PageFilterSelector";
import { setupFilter } from "../../app/utilities/predefinedVariables";

export default function HomePage() {
  const favourites = useSelector(selectFavorites);
  const objectFavourites = useSelector(selectObjectFavourites);

  const shortcuts = useSelector(selectShortcuts);
  const url = useSelector(selectCurrentUrl);
  const homePageFilter = useSelector(selectHomePageFilter);

  let content;

  if (!url) {
    content = <ActionBlocked type={"invalidUrl"} />;
  } else if (!favourites.length > 0) {
    content = <ActionBlocked type={"noFavourites"} />;
  } else if (homePageFilter === setupFilter) {
    content = (
      <>
        <PageFilterSelector />
        <div className="favourite-shortcut-container">
          {favourites.map((key) => (
            <div key={key} className="shortcut-item">
              <ShortcutFavouriteItem label={key} config={shortcuts[key]} />
            </div>
          ))}
        </div>
      </>
    );
  } else {
    content = (
      <>
        <PageFilterSelector />
        <div className="favourite-shortcut-container">
          {objectFavourites.map((key) => (
            <div key={key} className="shortcut-item">
              <ShortcutFavouriteItem label={key} config={shortcuts[key]} />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="home-container">
      {content}
      <div className="object-shortcut-container"></div>
    </div>
  );
}
