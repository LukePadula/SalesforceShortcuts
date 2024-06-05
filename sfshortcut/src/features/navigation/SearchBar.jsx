import React from "react";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  onSearchTermChanged,
  selectSearchTerm,
} from "../../slices/shortcutSlice";
import { handleNavigationChange } from "../../slices/navigationSlice";

export default function SearchBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  return (
    <>
      <input
        className="search-bar"
        placeholder="Search.."
        onChange={(e) => {
          if (!searchTerm) {
            dispatch(handleNavigationChange("List"));
          }
          dispatch(onSearchTermChanged(e.target.value));
        }}
      />
    </>
  );
}
