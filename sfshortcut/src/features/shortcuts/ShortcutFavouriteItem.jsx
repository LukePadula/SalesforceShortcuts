import React from "react";
import "./ShortcutFavouriteItem.css";
import { navigateTab } from "../../app/utilities/chromeNavigationUtils";

export default function ShortcutFavouriteItem({ label, config }) {
  return (
    <button className="favourite-button" onClick={() => navigateTab()}>
      <p>{label}</p>
    </button>
  );
}
