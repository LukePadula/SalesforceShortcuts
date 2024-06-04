import React from "react";
import { useSelector } from "react-redux";
import { selectNavigationPage } from "../slices/navigationSlice";
import "./ContentContainer.css";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import SettingsPage from "./pages/SettingsPage";
import PageHeader from "./PageHeader";

export default function ContentContainer() {
  const contentPageMap = {
    Home: HomePage,
    List: ListPage,
    Settings: SettingsPage,
  };

  const page = useSelector(selectNavigationPage);
  const PageComponent = contentPageMap[page] || HomePage;

  console.log(page, PageComponent);
  return (
    <div className="content-container">
      {page !== "Home" ? <PageHeader pageTitle={page} /> : null}
      <PageComponent />
    </div>
  );
}