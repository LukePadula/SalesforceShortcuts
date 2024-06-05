import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSettings, selectSettings } from "../slices/settingsSlice";
import "./SettingsContainer.css";
import CustomCheckbox from "./CustomCheckbox";
import { resetFavourites } from "../app/utilities/chromeAPI";

export default function SettingsContainer() {
  const dispatch = useDispatch();
  const userSettings = useSelector(selectSettings);

  const updateSetting = (e) => {
    dispatch(setSettings({ setting: e.target.id, value: e.target.checked }));
  };

  return (
    <div className="settings-container">
      <CustomCheckbox
        label="Dark mode"
        id="darkMode"
        onChangeFunction={updateSetting}
        value={userSettings.darkMode}
      />
      <CustomCheckbox
        label="Open shortcuts in new tab"
        id="openShortcutsInNewTab"
        onChangeFunction={updateSetting}
        value={userSettings.openShortcutsInNewTab}
      />
      <CustomCheckbox
        label="Reset favourites"
        onChangeFunction={resetFavourites}
      />
    </div>
  );
}
