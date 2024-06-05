import React from "react";
import "./HomePage.css";
import { useSelector } from "react-redux";
import { selectFavorites, selectShortcuts } from "../../slices/shortcutSlice";
import ShortcutFavouriteItem from "../shortcuts/ShortcutFavouriteItem";
import ActionBlocked from "../ActionBlocked";
import { selectCurrentUrl } from "../../slices/navigationSlice";

export default function HomePage() {
  const favourites = useSelector(selectFavorites);
  const shortcuts = useSelector(selectShortcuts);
  const url = useSelector(selectCurrentUrl);

  let content;

  if (!url) {
    content = <ActionBlocked type={"invalidUrl"} />;
  } else if (!favourites.length > 0) {
    content = <ActionBlocked type={"noFavourites"} />;
  } else {
    content = (
      <div className="favourite-shortcut-container">
        {favourites.map((key) => (
          <div key={key} className="shortcut-item">
            <ShortcutFavouriteItem label={key} config={shortcuts[key]} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="home-container">
      {content}
      <div className="object-shortcut-container"></div>
    </div>
  );
}
