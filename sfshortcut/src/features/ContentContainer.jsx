import React from "react";
import { useSelector } from "react-redux";
import { selectNavigationPage } from "../slices/navigationSlice";
import "./ContentContainer.css";
import {
  homeViewLabel,
  shortcutListViewLabel,
  settingsViewLabel,
} from "../app/utilities/predefinedVariables";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SettingsPage from "./pages/SettingsPage";
import PageHeader from "./PageHeader";

export default function ContentContainer() {
  const contentPageMap = {
    [homeViewLabel]: HomePage,
    [shortcutListViewLabel]: ListPage,
    [settingsViewLabel]: SettingsPage,
  };

  const page = useSelector(selectNavigationPage);
  const PageComponent = contentPageMap[page] || HomePage;

  if (page != homeViewLabel) {
    return (
      <div className="content-container">
        <PageHeader pageTitle={page} />
        <PageComponent />
      </div>
    );
  } else {
    return (
      <div>
        {page !== homeViewLabel ? <PageHeader pageTitle={page} /> : null}
        <PageComponent />
      </div>
    );
  }
}
