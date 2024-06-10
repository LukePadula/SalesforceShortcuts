import React from "react";
import { useDispatch } from "react-redux";
import "./PageHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { handleNavigationChange } from "../slices/navigationSlice";
import { homeViewLabel } from "../app/utilities/predefinedVariables";

export default function PageHeader({ pageTitle }) {
  const dispatch = useDispatch();

  return (
    <div className="page-header">
      <button onClick={() => dispatch(handleNavigationChange(homeViewLabel))}>
        <FontAwesomeIcon className="navigate-back-icon" icon={faArrowLeft} />
      </button>
      <h1 className="page-title">{pageTitle}</h1>
    </div>
  );
}
