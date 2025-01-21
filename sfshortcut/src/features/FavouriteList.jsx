import React, { useEffect, useRef } from "react";
import ShortcutFavouriteItem from "./shortcuts/ShortcutFavouriteItem";
import ActionBlocked from "./ActionBlocked";
import { setFavourites } from "../slices/shortcutSlice";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./FavouriteList.css";
import SortableList from "./sortable/SortableList";

export default function FavouriteList({
  data,
  shortcuts,
  userSettings,
  itemReOrderEnabled,
  filterLabel,
}) {
  if (!data || data.length === 0) {
    return <ActionBlocked type="noFavourites" />;
  }

  if (itemReOrderEnabled) {
    return (
      <SortableList
        data={data}
        Component={ShortcutFavouriteItem}
        userSettings={userSettings}
        faChevronDown={faChevronDown}
        shortcuts={shortcuts}
        setFavourites={setFavourites}
        filterLabel={filterLabel}
      />
    );
  }

  return (
    <div className="favourite-shortcut-container">
      <div className="favourite-list">
        {data.map((key) => (
          <div key={key} className="shortcut-item">
            <ShortcutFavouriteItem
              itemReOrderEnabled={itemReOrderEnabled}
              id={key}
              config={shortcuts[key]}
              userSettings={userSettings}
              faChevronDown={faChevronDown}
              shortcutKey={key}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
