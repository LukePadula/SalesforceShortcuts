import React from "react";
import "./ShortcutListItem.css";
import { navigateTab } from "../../app/utilities/chromeNavigationUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShortcutListItem({ label, config, starIcon }) {
  const { FontAwesomeIcon, iconType } = starIcon;

  return (
    <div className="list-button-container">
      <button className="list-button" onClick={() => navigateTab()}>
        <p>{label}</p>
      </button>
      <FontAwesomeIcon className="star-icon" icon={iconType} />
    </div>
  );
}
