import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  clearAlertModal,
  selectAlertModal,
  selectIsClosing,
} from "../slices/navigationSlice";
import "./AlertModal.css";

export default function AlertModal() {
  const alertModal = useSelector(selectAlertModal);
  const isClosing = useSelector(selectIsClosing);

  if (!alertModal) return null;

  const alertTitle = `${alertModal.label} has been ${
    alertModal.newValue ? "added to" : "removed from"
  } favourites `;

  const alertIconClasses = `alert-modal-icon ${
    alertModal.newValue ? "icon-favourite-selected" : null
  }`;

  return (
    <button className={`alert-modal-button ${isClosing ? "closing" : ""}`}>
      <div className="alert-modal-content">
        <FontAwesomeIcon className={alertIconClasses} icon={faStar} />
        <div className="alert-modal-title">{alertTitle}</div>
      </div>
    </button>
  );
}
