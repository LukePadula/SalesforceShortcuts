import React from "react";
import "./NavigationButtonContainer.css";
import { useSelector } from "react-redux";
import { selectNavigationPage } from "../../slices/navigationSlice";
import NavigationButton from "./NavigationButton";

export default function NavigationButtonContainer() {
  const currentPage = useSelector(selectNavigationPage);

  return (
    <div className="button-container">
      <NavigationButton buttonLabel="Home" selected={currentPage === "Home"} />
      <NavigationButton buttonLabel="List" selected={currentPage === "List"} />
      <NavigationButton
        buttonLabel="Settings"
        selected={currentPage === "Settings"}
      />
    </div>
  );
}
