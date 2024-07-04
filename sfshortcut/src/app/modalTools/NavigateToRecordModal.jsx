import React, { useEffect, useRef } from "react";
import "./NavigateToRecordModal.css";
import { useDispatch } from "react-redux";
import { navigateShortcut } from "../utilities/chromeNavigationUtils";

export default function NavigateToRecordModal() {
  const dispatch = useDispatch();
  const navigateRef = useRef(null);

  useEffect(() => {
    if (navigateRef.current) {
      navigateRef.current.focus();
    }
  }, []);

  return (
    <div className="navigate-record-container container-small">
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
  );
}
