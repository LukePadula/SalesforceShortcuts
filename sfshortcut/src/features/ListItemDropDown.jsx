import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import "./ListItemDropDown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onToggleListItemDropdown } from "../slices/shortcutSlice";
import { navigateShortcut } from "../app/utilities/chromeNavigationUtils";

export default function ListItemDropDown({
  config,
  faChevronDown,
  shortcutKey,
  userSettings,
  itemReOrderEnabled,
}) {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const dropDownItems = [
    ...(userSettings.openShortcutsInNewTab === true
      ? [
          {
            label: "Open in current tab",
            action: (e) => {
              e.stopPropagation();
              navigateShortcut(config.path, false);
            },
          },
        ]
      : [
          {
            label: "Open in new tab",
            action: (e) => {
              e.stopPropagation();
              navigateShortcut(config.path, true);
            },
          },
        ]),
    ...(config.pageGroup === "Standard Object"
      ? [
          {
            label: "Go to list views",
            action: (e) => {
              e.stopPropagation();
              navigateShortcut(config.listViewPath);
            },
          },
        ]
      : []),
  ];

  const handleClickOutside = useCallback(
    (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(
          onToggleListItemDropdown({ shortcutKey, pageGroup: config.pageGroup })
        );
      }
    },
    [dispatch, shortcutKey]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const toggleDropdown = (e) => {
    e.stopPropagation();

    if (!itemReOrderEnabled) {
      dispatch(
        onToggleListItemDropdown({ shortcutKey, pageGroup: config.pageGroup })
      );
    }
  };

  return (
    <div className="drop-down-container">
      <button
        className="action-button"
        onClick={toggleDropdown}
        aria-expanded={config.isDropdownOpen}
      >
        <FontAwesomeIcon
          className={
            itemReOrderEnabled
              ? "action-button-icon chevron-icon sort-active"
              : "action-button-icon  chevron-icon"
          }
          icon={faChevronDown}
        />
      </button>
      {config.isDropdownOpen && (
        <div ref={dropdownRef} className="drop-down-menu-container">
          <ul>
            {dropDownItems.map((item, index) => (
              <li key={index} className="drop-down-item">
                <button id={shortcutKey} onClick={(e) => item.action(e)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
