import React from "react";
import SettingsContainer from "../SettingsContainer";
import PageHeader from "../PageHeader";
import { settingsViewLabel } from "../../app/utilities/predefinedVariables";

export default function SettingsPage() {
  return (
    <div className="container-small">
      <PageHeader pageTitle={settingsViewLabel} />
      <SettingsContainer />
    </div>
  );
}
