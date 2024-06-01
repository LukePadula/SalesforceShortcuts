import React from "react";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSearchTerm,
  onSearchTermChanged,
} from "../../slices/searchSlice";

export default function SearchBar() {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  return (
    <>
      <input
        className="search-bar"
        onChange={(e) => {
          dispatch(onSearchTermChanged(e.target.value));
        }}
      />
    </>
  );
}
