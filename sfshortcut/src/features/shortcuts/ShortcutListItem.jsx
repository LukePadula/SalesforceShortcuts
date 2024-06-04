import React from "react";
import "./ShortcutListItem.css";
import { navigateShortcut } from "../../app/utilities/chromeNavigationUtils";
import { useDispatch } from "react-redux";
import { setShortcutFavourite } from "../../slices/shortcutSlice";
import { displayAlertModal } from "../../slices/navigationSlice";

export default function ShortcutListItem({ shortcutKey, config, starIcon }) {
  const { FontAwesomeIcon, iconType } = starIcon;
  const dispatch = useDispatch();

  const starIconClass = config.favourite
    ? "star-icon-selected"
    : "star-icon-unselected";

  const handleClick = async () => {
    dispatch(
      setShortcutFavourite({
        shortcutKey,
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
    <button className="list-button-container">
      <div className="list-button-content">
        <div className="list-content-cont">
          <p className="list-item-title">{config.label}</p>
        </div>
        <div className="list-content-cont">
          <p className="list-item-type">Setup</p>
        </div>
        <div className="list-content-cont">
          <button onClick={handleClick}>
            <FontAwesomeIcon
              className={`star-icon ${starIconClass}`}
              icon={iconType}
            />
          </button>
        </div>
      </div>
    </button>
  );
}
