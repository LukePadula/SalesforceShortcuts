import React from "react";
import "./PageFilterSelector.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectNavigationPage,
  selectHomePageFilter,
  setHomepageFilter,
} from "../../slices/navigationSlice";
import {
  setupFilter,
  objectsFilter,
} from "../../app/utilities/predefinedVariables";

export default function PageFilterSelector() {
  const currentPage = useSelector(selectNavigationPage);
  const homePageFilter = useSelector(selectHomePageFilter);
  const dispatch = useDispatch();

  const handleFilterClick = (e) => {
    dispatch(setHomepageFilter(e.target.id));
  };

  return (
    <div className="filter-selection-container">
      <button
        id={setupFilter}
        className={
          homePageFilter === setupFilter
            ? "filter-container selected"
            : "filter-container"
        }
        onClick={(e) => handleFilterClick(e)}
      >
        Setup
      </button>
      <button
        id={objectsFilter}
        className={
          homePageFilter === objectsFilter
            ? "filter-container selected"
            : "filter-container"
        }
        onClick={(e) => handleFilterClick(e)}
      >
        Objects
      </button>
    </div>
  );
}
