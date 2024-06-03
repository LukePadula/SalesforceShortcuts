import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { clearAlertModal } from "../slices/navigationSlice";
import "./AlertModal.css";

export default function AlertModal(props) {
  const { config } = props;
  const dispatch = useDispatch();

  const alertTitle = `${config.label} has been ${
    config.newValue ? "added to" : "removed from"
  } favourites `;
  const alertIconClasses = `alert-modal-icon ${
    config.newValue ? "icon-favourite-selected" : null
  }`;

  return (
    <button
      className="alert-modal-container"
      onClick={() => dispatch(clearAlertModal())}
    >
      <div className="alert-modal-content">
        <FontAwesomeIcon className={alertIconClasses} icon={faStar} />
        <div className="alert-modal-title">{alertTitle}</div>
      </div>
      <div className="close-alert-modal-container"></div>
    </button>
  );
}
