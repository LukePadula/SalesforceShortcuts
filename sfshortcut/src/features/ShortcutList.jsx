import React from "react";
import ShortcutListItem from "./shortcuts/ShortcutListItem";
import "./ShortcutList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ShortcutList({ favourites }) {
  return (
    <div className="list-container">
      {Object.keys(favourites).map((key) => (
        <ShortcutListItem
          label={key}
          config={favourites[key]}
          starIcon={{ FontAwesomeIcon, iconType: faStar }}
        />
      ))}
    </div>
  );
}
