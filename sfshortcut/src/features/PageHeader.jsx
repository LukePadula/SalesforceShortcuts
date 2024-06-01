import React from "react";
import { useDispatch } from "react-redux";
import "./PageHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { setNavigationPage } from "../slices/navigationSlice";

export default function PageHeader({ pageTitle }) {
  const dispatch = useDispatch();

  return (
    <div className="page-header">
      {pageTitle != "Home" ? (
        <button onClick={() => dispatch(setNavigationPage("Home"))}>
          <FontAwesomeIcon className="navigate-back-icon" icon={faArrowLeft} />
        </button>
      ) : null}
      <h1 className="page-title">{pageTitle}</h1>
    </div>
  );
}
