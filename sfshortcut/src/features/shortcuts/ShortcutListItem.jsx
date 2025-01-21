import React from "react";
import "./ShortcutListItem.css";
import { navigateShortcut } from "../../app/utilities/chromeNavigationUtils";
import ItemIcon from "../ItemIcon";
import ListItemActions from "../ListItemActions";

export default function ShortcutListItem({
  shortcutKey,
  config,
  FontAwesomeIcon,
  starIcon,
  faChevronDown,
  userSettings,
}) {
  console.log(shortcutKey);

  return (
    <div className="list-item">
      <button
        className="list-button-container"
        onClick={() => navigateShortcut(config.path)}
      >
        <div className="list-item-column">
          <ItemIcon iconName={config.pageGroupIcon} size="large" />
        </div>
        <div className="list-item-column">
          <h2 className="list-item-title">{config.label}</h2>
          <small className="list-item-subtitle">{config.pageGroup}</small>
        </div>
        <div className="list-item-column">
          <ListItemActions
            shortcutKey={shortcutKey}
            config={config}
            FontAwesomeIcon={FontAwesomeIcon}
            starIcon={starIcon}
            faChevronDown={faChevronDown}
            itemType="List"
            userSettings={userSettings}
          />
        </div>
      </button>
    </div>
  );
}
