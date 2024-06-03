import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { handleNavigationChange } from "../slices/navigationSlice";
import "./NoFavourites.css";

export default function NoFavourites() {
  const dispatch = useDispatch();

  return (
    <div className="no-favourites-container">
      <h1 className="no-favourites-title">No Favourites..</h1>
      <p className="no-favourites-subtitle">
        Go to the shortcut list page to pin some shortcuts
      </p>
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
