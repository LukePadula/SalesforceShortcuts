import React from "react";
import "./PageFilterSelector.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectHomePageFilter,
  setHomepageFilter,
  selectNavigationPage,
  setAlertModal,
} from "../../slices/navigationSlice";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  onToggleFavouriteReOrder,
  selectItemReOrder,
} from "../../slices/shortcutSlice";

export default function PageFilterSelector({
  goToSlide,
  propsArray,
  allowSort,
  urlValid,
}) {
  const dispatch = useDispatch();
  const homePageFilterIndex = useSelector(selectHomePageFilter);
  const reOrder = useSelector(selectItemReOrder);
  const navigationPage = useSelector(selectNavigationPage);
  const handleFilterClick = (index) => {
    if (homePageFilterIndex != index) {
      goToSlide(index);
      dispatch(setHomepageFilter(index));
    }
  };

  return (
    <div className="filter-selection-container">
      <div className="page-filters">
        {propsArray.map((props, index) => (
          <button
            id={props.filterLabel}
            className={
              homePageFilterIndex === index
                ? "filter-container selected"
                : "filter-container"
            }
            onClick={(e) => handleFilterClick(index)}
          >
            {props.filterLabel}
          </button>
        ))}
      </div>
      {allowSort ? (
        <button
          onClick={() => {
            dispatch(onToggleFavouriteReOrder());
            // dispatch(
            //   setAlertModal(
            //     "This feature is still in development and might not work as expected"
            //   )
            // );
          }}
          className={reOrder ? "selected toggleReOrder" : "toggleReOrder"}
        >
          <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
        </button>
      ) : null}
    </div>
  );
}
