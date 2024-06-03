import React from "react";

export default function SettingsContainer() {
  return (
    <div className="settings-container">
      <div className="settings-item">
        <input type="checkbox" id="darkMode" name="Enable Dark Mode" checked />
      </div>
      <div className="settings-item">
        <p>Open shortcuts in new tab</p>
      </div>
      <div className="settings-item">
        <input type="checkbox" id="darkMode" name="Enable Dark Mode" />
        <p>Reset Favourites</p>
      </div>
      <div className="settings-item">
        <p>How to Guide</p>
      </div>
      <div className="settings-item">
        <p>Salesforce Shortcut URL</p>
      </div>
    </div>
  );
}
