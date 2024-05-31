import React from "react";
import SearchBar from "./SearchBar";
import NavigationButtonContainer from "./NavigationButtonContainer";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="navigation-container">
      <SearchBar />
      <NavigationButtonContainer />
    </div>
  );
}
