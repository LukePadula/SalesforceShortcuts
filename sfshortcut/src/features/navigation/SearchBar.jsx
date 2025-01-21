import React, { useEffect, useRef } from "react";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  onSearchTermChanged,
  onRestoreFullSearchResults,
  selectSearchTerm,
} from "../../slices/shortcutSlice";
import { handleNavigationChange } from "../../slices/navigationSlice";
import { shortcutListViewLabel } from "../../app/utilities/predefinedVariables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  return (
    <div className="search-container">
      <div className="search-icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        className="search-bar"
        ref={searchRef}
        value={searchTerm}
        placeholder="Search.."
        onChange={(e) => {
          if (!searchTerm) {
            dispatch(handleNavigationChange(shortcutListViewLabel));
          }
          dispatch(onSearchTermChanged(e.target.value));
        }}
      />
      {searchTerm && (
        <button
          onClick={() => dispatch(onRestoreFullSearchResults())}
          className="search-clear-container"
        >
          <FontAwesomeIcon className="search-clear-icon" icon={faXmark} />
        </button>
      )}
    </div>
  );
}
