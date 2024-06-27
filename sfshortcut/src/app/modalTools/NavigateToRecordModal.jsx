import React from "react";
import "./NavigateToRecordModal.css";
import { setNavigateToRecordVisable } from "../../slices/navigationSlice";
import { useDispatch } from "react-redux";
import { navigateShortcut } from "../utilities/chromeNavigationUtils";

export default function NavigateToRecordModal() {
  const dispatch = useDispatch();

  return (
    <div className="navigate-record-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          navigateShortcut(
            `/lightning/r/Lead/${formData.get("recordIdSearch")}/view`,
            true
          );
        }}
        className="record-id-form"
      >
        <input
          id="recordIdSearch"
          name="recordIdSearch"
          className="record-id-input"
          type="text"
          placeholder="Record Id"
          //   onChange={(e) => setRecordId(e.target.value)}
        />
        <button type="submit" className="record-id-submit">
          Navigate
        </button>
      </form>
    </div>
  );
}
