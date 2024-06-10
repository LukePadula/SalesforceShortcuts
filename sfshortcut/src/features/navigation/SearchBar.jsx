import React from "react";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  onSearchTermChanged,
  selectSearchTerm,
} from "../../slices/shortcutSlice";
import { handleNavigationChange } from "../../slices/navigationSlice";
import { shortcutListViewLabel } from "../../app/utilities/predefinedVariables";

export default function SearchBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  return (
    <>
      <input
        className="search-bar"
        value={searchTerm}
        placeholder="Search.."
        onChange={(e) => {
          if (!searchTerm) {
            dispatch(handleNavigationChange(shortcutListViewLabel));
          }
          dispatch(onSearchTermChanged(e.target.value));
        }}
      />
    </>
  );
}
