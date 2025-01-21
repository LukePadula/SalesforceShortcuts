import React from "react";
import { useDispatch } from "react-redux";
import "./ListItemActions.css";
import { setShortcutFavourite } from "../slices/shortcutSlice";
import { displayAlertModal } from "../slices/navigationSlice";

import ListItemDropDown from "./ListItemDropDown";

export default function ListItemActions({
  shortcutKey,
  config,
  FontAwesomeIcon,
  starIcon,
  faChevronDown,
  itemType,
  userSettings,
}) {
  const dispatch = useDispatch();

  const starIconClass = config.favourite
    ? "star-icon-selected"
    : "star-icon-unselected";

  const handleFavourite = () => {
    dispatch(
      setShortcutFavourite({
        shortcutKey,
        shortcutType: config.pageGroup,
      })
    );
    dispatch(
      displayAlertModal({
        alertName: "favouriteUpdate",
        label: config.label,
        newValue: !config.favourite,
      })
    );
  };

  return (
    <div className="list-item-action-container">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleFavourite();
        }}
        className="action-button"
      >
        <FontAwesomeIcon
          className={`action-button-icon star-icon ${starIconClass}`}
          icon={starIcon}
        />
      </button>
      <ListItemDropDown
        shortcutKey={shortcutKey}
        config={config}
        faChevronDown={faChevronDown}
        itemType={itemType}
        userSettings={userSettings}
      />
    </div>
  );
}
