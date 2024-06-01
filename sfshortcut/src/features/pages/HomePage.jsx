import React from "react";
import "./HomePage.css";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../slices/shortcutSlice";
import ShortcutFavouriteItem from "../shortcuts/ShortcutFavouriteItem";

export default function HomePage() {
  const favourites = useSelector(selectFavorites);

  console.log(favourites, "FAVS");

  return (
    <div className="home-container">
      <div className="favourite-shortcut-container">
        {Object.keys(favourites).map((key) => (
          <div key={key} className="shortcut-item">
            <ShortcutFavouriteItem label={key} config={favourites[key]} />
          </div>
        ))}
      </div>
      <div className="object-shortcut-container"></div>
    </div>
  );
}
