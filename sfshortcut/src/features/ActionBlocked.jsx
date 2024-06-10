import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faSalesforce } from "@fortawesome/free-brands-svg-icons";
import { handleNavigationChange } from "../slices/navigationSlice";
import "./ActionBlocked.css";
import { navigateTab } from "../app/utilities/chromeNavigationUtils";
import {
  shortcutListViewLabel,
  salesforceRedirectLabel,
} from "../app/utilities/predefinedVariables";

export default function ActionBlocked({ type }) {
  const dispatch = useDispatch();
  const contentMap = {
    noFavourites: {
      title: "No Favourites..",
      subtitle: "Go to the shortcut list page to pin some shortcuts",
      iconType: faList,
      iconLabel: shortcutListViewLabel,
      iconPressFunction: () =>
        dispatch(handleNavigationChange(shortcutListViewLabel)),
    },
    invalidUrl: {
      title: "Salesforce.com not found",
      subtitle: "Please login into Salesforce before using shortcuts. ",
      iconType: faSalesforce,
      iconLabel: salesforceRedirectLabel,
      iconPressFunction: () =>
        navigateTab("https://login.salesforce.com/?locale=uk", true),
    },
  };

  return (
    <div className="no-favourites-container">
      <h1 className="no-favourites-title">{contentMap[type].title}</h1>
      <p className="no-favourites-subtitle">{contentMap[type].subtitle}</p>
      <button
        className="no-favourites-navigate-button"
        onClick={() => dispatch(contentMap[type].iconPressFunction)}
      >
        <FontAwesomeIcon icon={contentMap[type].iconType} />
        <p>{contentMap[type].iconLabel}</p>
      </button>
    </div>
  );
}
