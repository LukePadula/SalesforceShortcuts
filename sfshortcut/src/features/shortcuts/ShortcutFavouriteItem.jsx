import React from "react";
import "./ShortcutFavouriteItem.css";
import { navigateShortcut } from "../../app/utilities/chromeNavigationUtils";
import ItemIcon from "../ItemIcon";
import ListItemDropDown from "../ListItemDropDown";

export default function ShortcutFavouriteItem({
  shortcutKey,
  config,
  faChevronDown,
  userSettings,
  itemReOrderEnabled,
}) {
  console.log(itemReOrderEnabled, "SHAKE?");
  return (
    <div className={itemReOrderEnabled ? "shake" : ""}>
      <button
        className="favourite-button"
        onClick={() => {
          if (!itemReOrderEnabled) {
            navigateShortcut(config.path, true);
          }
        }}
      >
        <div className="list-item-column">
          <ItemIcon iconName={config.pageGroupIcon} size="small" />
        </div>
        <div className="list-item-column">
          <h2 className="favourite-title">{config.label}</h2>
        </div>
        <div className="list-item-column">
          <ListItemDropDown
            config={config}
            faChevronDown={faChevronDown}
            shortcutKey={shortcutKey}
            userSettings={userSettings}
            itemReOrderEnabled={itemReOrderEnabled}
          />
        </div>
      </button>
    </div>
  );
}
