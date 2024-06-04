import React from "react";
import "./HomePage.css";
import { useSelector } from "react-redux";
import { selectFavorites, selectShortcuts } from "../../slices/shortcutSlice";
import ShortcutFavouriteItem from "../shortcuts/ShortcutFavouriteItem";
import ActionBlocked from "../ActionBlocked";

export default function HomePage() {
  const favourites = useSelector(selectFavorites);
  const shortcuts = useSelector(selectShortcuts);

  let content;

  if (favourites.length > 0) {
    content = (
      <div className="favourite-shortcut-container">
        {favourites.map((key) => (
          <div key={key} className="shortcut-item">
            <ShortcutFavouriteItem label={key} config={shortcuts[key]} />
          </div>
        ))}
      </div>
    );
  } else {
    content = <ActionBlocked type={"noFavourites"} />;
  }

  return (
    <div className="home-container">
      {content}
      <div className="object-shortcut-container"></div>
    </div>
  );
}
