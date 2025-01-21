import React from "react";
import "./NavigationButtonContainer.css";
import { useSelector } from "react-redux";
import { selectNavigationPage } from "../../slices/navigationSlice";
import NavigationButton from "./NavigationButton";
import {
  homeViewLabel,
  shortcutListViewLabel,
  settingsViewLabel,
} from "../../app/utilities/predefinedVariables";

export default function NavigationButtonContainer() {
  const currentPage = useSelector(selectNavigationPage);

  return (
    <div className="button-container">
      <NavigationButton
        buttonLabel={homeViewLabel}
        selected={currentPage === homeViewLabel}
      />
      <NavigationButton
        buttonLabel={shortcutListViewLabel}
        selected={currentPage === shortcutListViewLabel}
      />
      <NavigationButton
        buttonLabel={settingsViewLabel}
        selected={currentPage === settingsViewLabel}
      />
    </div>
  );
}
