import React from "react";
import { useDispatch } from "react-redux";
import "./CustomCheckbox.css";

export default function CustomCheckbox({
  label,
  id,
  onChangeFunction = () => {},
  value,
}) {
  const dispatch = useDispatch();

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        onChange={(e) => onChangeFunction(e)}
        checked={value}
      />
      <span className="custom-checkbox"></span>
      {label}
    </label>
  );
}
