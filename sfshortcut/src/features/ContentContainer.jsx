import React from "react";
import { useSelector } from "react-redux";
import { selectNavigationPage } from "../slices/navigationSlice";
import {
  homeViewLabel,
  shortcutListViewLabel,
  settingsViewLabel,
} from "../app/utilities/predefinedVariables";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SettingsPage from "./pages/SettingsPage";

export default function ContentContainer({ urlValid }) {
  const contentPageMap = {
    [homeViewLabel]: HomePage,
    [shortcutListViewLabel]: ListPage,
    [settingsViewLabel]: SettingsPage,
  };

  const page = useSelector(selectNavigationPage);
  const PageComponent = contentPageMap[page] || HomePage;

  return <PageComponent urlValid={urlValid} />;
}
