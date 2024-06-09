import React from "react";
import ShortcutListItem from "./shortcuts/ShortcutListItem";
import "./ShortcutList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ShortcutList({ shortcuts, favourites }) {
  const updatedShortcuts = { ...shortcuts };

  Object.keys(updatedShortcuts).forEach((key) => {
    updatedShortcuts[key] = { ...updatedShortcuts[key], favourite: false };
  });

  favourites.forEach((key) => {
    if (updatedShortcuts[key]) {
      updatedShortcuts[key] = { ...updatedShortcuts[key], favourite: true };
    }
  });

  return (
    <div className="list-container">
      {Object.keys(updatedShortcuts).map((key) => (
        <ShortcutListItem
          shortcutKey={key}
          config={updatedShortcuts[key]}
          starIcon={{ FontAwesomeIcon, iconType: faStar }}
        />
      ))}
    </div>
  );
}
