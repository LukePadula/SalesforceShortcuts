import React from "react";
import "./NavigationButtonContainer.css";
import NavigationButton from "./NavigationButton";

export default function NavigationButtonContainer() {
  return (
    <div className="button-container">
      <NavigationButton buttonConfig={{ label: "Home" }} />
      <NavigationButton buttonConfig={{}} />
      <NavigationButton buttonConfig={{}} />
    </div>
  );
}
