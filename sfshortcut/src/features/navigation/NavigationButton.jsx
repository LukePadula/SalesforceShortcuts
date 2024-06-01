import React from "react";
import "./NavigationButton.css";
import { useDispatch } from "react-redux";
import { setNavigationPage } from "../../slices/navigationSlice";
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

  const buttonStyleClass = selected
    ? "nav-button selected-nav-button"
    : "nav-button";

  return (
    <div className="nav-button-container">
      <button
        className={buttonStyleClass}
        type="button"
        onClick={() => {
          if (buttonLabel === "Salesforce") {
            navigateTab("https://login.salesforce.com/?locale=uk");
          } else {
            dispatch(setNavigationPage(buttonLabel));
          }
        }}
      >
        <FontAwesomeIcon className="nav-icon" icon={iconMap[buttonLabel]} />
      </button>
    </div>
  );
}
