import React, { useEffect, useRef } from "react";
import "./NavigateToRecordPage.css";
import { navigateShortcut } from "../../app/utilities/chromeNavigationUtils";
import PageHeader from "../PageHeader";

export default function NavigateToRecordPage() {
  const navigateRef = useRef(null);

  useEffect(() => {
    if (navigateRef.current) {
      navigateRef.current.focus();
    }
  }, []);

  return (
    <div className="container-small">
      <PageHeader pageTitle="Navigate to Record" />
      <div className="navigate-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const recordIdValue = formData.get("recordIdSearch");
            console.log(recordIdValue);
            if (recordIdValue) {
              navigateShortcut(`/lightning/r/Lead/${recordIdValue}/view`, true);
            }
          }}
          className="record-id-form"
        >
          <input
            id="recordIdSearch"
            ref={navigateRef}
            name="recordIdSearch"
            className="record-id-input"
            type="text"
            placeholder="Record Id"
          />
          <button type="submit" className="record-id-submit">
            Navigate
          </button>
        </form>
      </div>
    </div>
  );
}
