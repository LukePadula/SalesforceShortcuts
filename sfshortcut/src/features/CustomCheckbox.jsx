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
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        onChange={(e) => onChangeFunction(e)}
        checked={value}
        class="custom-checkbox "
      />
      <label>{label}</label>
    </div>
  );
}
