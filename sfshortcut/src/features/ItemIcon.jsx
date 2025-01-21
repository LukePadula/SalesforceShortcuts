import React from "react";
import "./ItemIcon.css";

export default function ItemIcon({ iconName, size }) {
  let iconSizeClass = "icon";
  let iconSizeContainerClass = "icon-container";

  if (size === "small") {
    iconSizeClass += " icon-small";
    iconSizeContainerClass += " icon-container-small";
  }

  return (
    <div className="item-icon-container">
      <div className={iconSizeContainerClass}>
        <svg className={iconSizeClass}>
          <use href={`icons/utility-sprite/svg/symbols.svg#${iconName}`}></use>
        </svg>
      </div>
    </div>
  );
}
