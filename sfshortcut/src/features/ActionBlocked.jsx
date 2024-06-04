import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { handleNavigationChange } from "../slices/navigationSlice";
import "./ActionBlocked.css";

export default function ActionBlocked({ type }) {
  const dispatch = useDispatch();
  const contentMap = {
    noFavourites: {
      title: "No Favourites..",
      subtitle: "Go to the shortcut list page to pin some shortcuts",
      iconType: "faList",
    },
    invalidUrl: {
      title: "Salesforce.com not found",
      subtitle: "Please login into Salesforce before using shortcuts. ",
      iconType: "faList",
    },
  };

  return (
    <div className="no-favourites-container">
      <h1 className="no-favourites-title">{contentMap[type].title}</h1>
      <p className="no-favourites-subtitle">{contentMap[type].subtitle}</p>
      <button
        className="no-favourites-navigate-button"
        onClick={() => dispatch(handleNavigationChange("List"))}
      >
        <FontAwesomeIcon icon={faList} />
        <p>Shortcuts</p>
      </button>
    </div>
  );
}