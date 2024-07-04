import React from "react";
import { useSelector } from "react-redux";
import { selectNavigationPage } from "../slices/navigationSlice";
import "./ContentContainer.css";
import {
  homeViewLabel,
  shortcutListViewLabel,
  settingsViewLabel,
  navigateToRecordLabel,
} from "../app/utilities/predefinedVariables";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SettingsPage from "./pages/SettingsPage";
import PageHeader from "./PageHeader";
import NavigateToRecordModal from "../app/modalTools/NavigateToRecordModal";

export default function ContentContainer() {
  const contentPageMap = {
    [homeViewLabel]: HomePage,
    [shortcutListViewLabel]: ListPage,
    [settingsViewLabel]: SettingsPage,
    [navigateToRecordLabel]: NavigateToRecordModal,
  };

  const page = useSelector(selectNavigationPage);
  const PageComponent = contentPageMap[page] || HomePage;

  return <PageComponent />;
}
