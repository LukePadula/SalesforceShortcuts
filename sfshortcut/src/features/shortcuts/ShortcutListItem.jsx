import React from "react";
import "./ShortcutListItem.css";
import { navigateTab } from "../../app/utilities/chromeNavigationUtils";

export default function ShortcutListItem({ label, config }) {
  return (
    <button className="list-button" onClick={() => navigateTab()}>
      <p>{label}</p>
    </button>
  );
}
