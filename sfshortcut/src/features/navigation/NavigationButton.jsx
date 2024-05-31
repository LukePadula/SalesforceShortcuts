import React from "react";
import "./NavigationButton.css";
import { useDispatch } from "react-redux";
import { setNavigationPage } from "../../slices/navigationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faGear } from "@fortawesome/free-solid-svg-icons";

export default function NavigationButton({ buttonLabel, selected }) {
  const dispatch = useDispatch();
  console.log(selected);

  const iconMap = {
    Home: faHome,
    List: faList,
    Settings: faGear,
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
          dispatch(setNavigationPage(buttonLabel));
        }}
      >
        <FontAwesomeIcon className="nav-icon" icon={iconMap[buttonLabel]} />
      </button>
    </div>
  );
}
