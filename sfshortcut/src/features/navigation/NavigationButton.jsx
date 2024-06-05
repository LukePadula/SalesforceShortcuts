import React from "react";
import "./NavigationButton.css";
import { useDispatch } from "react-redux";
import { handleNavigationChange } from "../../slices/navigationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faGear } from "@fortawesome/free-solid-svg-icons";
import { faSalesforce } from "@fortawesome/free-brands-svg-icons";

import { navigateTab } from "../../app/utilities/chromeNavigationUtils";

export default function NavigationButton({ buttonLabel, selected }) {
  const dispatch = useDispatch();

  const iconMap = {
    Home: faHome,
    List: faList,
    Settings: faGear,
    Salesforce: faSalesforce,
  };

  const salesforceClass =
    buttonLabel === "Salesforce" ? "salesforce-icon" : null;
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
          if (buttonLabel === "Salesforce") {
            navigateTab("https://login.salesforce.com/?locale=uk", true);
          } else {
            dispatch(handleNavigationChange(buttonLabel));
          }
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
