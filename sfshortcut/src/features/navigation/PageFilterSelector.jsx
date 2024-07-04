import React from "react";
import "./PageFilterSelector.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHomePageFilter,
  setHomepageFilter,
} from "../../slices/navigationSlice";
import {
  setupFilter,
  objectsFilter,
} from "../../app/utilities/predefinedVariables";

export default function PageFilterSelector({ goToSlide }) {
  const dispatch = useDispatch();
  const homePageFilterIndex = useSelector(selectHomePageFilter);

  const handleFilterClick = (index) => {
    if (homePageFilterIndex != index) {
      goToSlide(index);
      dispatch(setHomepageFilter(index));
    }
  };

  return (
    <div className="filter-selection-container">
      <button
        id={setupFilter}
        className={
          homePageFilterIndex === 0
            ? "filter-container selected"
            : "filter-container"
        }
        onClick={(e) => handleFilterClick(0)}
      >
        Setup
      </button>
      <button
        id={objectsFilter}
        className={
          homePageFilterIndex === 1
            ? "filter-container selected"
            : "filter-container"
        }
        onClick={(e) => handleFilterClick(1)}
      >
        Objects
      </button>
    </div>
  );
}
