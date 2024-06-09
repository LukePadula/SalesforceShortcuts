import React from "react";
import "./ShortcutFavouriteItem.css";
import { navigateShortcut } from "../../app/utilities/chromeNavigationUtils";

export default function ShortcutFavouriteItem({ label, config }) {
  return (
    <button
      className="favourite-button"
      onClick={() => navigateShortcut(config.path)}
    >
      <p className="favourite-title">{config.label}</p>
    </button>
  );
}
