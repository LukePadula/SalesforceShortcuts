import React from "react";
import "./NavigationButton.css";
import { useDispatch } from "react-redux";
import { handleNavigationChange } from "../../slices/navigationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faList, faGear } from "@fortawesome/free-solid-svg-icons";
import { faSalesforce } from "@fortawesome/free-brands-svg-icons";
import {
  homeViewLabel,
  shortcutListViewLabel,
  settingsViewLabel,
  navigateToRecordLabel,
} from "../../app/utilities/predefinedVariables";

export default function NavigationButton({ buttonLabel, selected }) {
  const dispatch = useDispatch();

  const iconMap = {
    [homeViewLabel]: faStar,
    [shortcutListViewLabel]: faList,
    [settingsViewLabel]: faGear,
    [navigateToRecordLabel]: faSalesforce,
  };

  const salesforceClass =
    buttonLabel === navigateToRecordLabel ? "salesforce-icon" : null;
  let buttonStyleClass;
  let iconStyleClass = "nav-icon";

  if (selected) {
    buttonStyleClass = "nav-button selected-nav-button";
  } else {
    iconStyleClass += " nav-icon-unselected";
    buttonStyleClass = "nav-button";
  }

  return (
    <div className="nav-button-container">
      <button
        className={`${buttonStyleClass} ${salesforceClass}`}
        type="button"
        onClick={() => {
          dispatch(handleNavigationChange(buttonLabel));
        }}
      >
        <FontAwesomeIcon
          className={iconStyleClass}
          icon={iconMap[buttonLabel]}
        />
      </button>
    </div>
  );
}
