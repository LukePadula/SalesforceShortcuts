import React, { useState } from "react";
import "./PageSlider.css";
import { homeViewLabel } from "../../app/utilities/predefinedVariables";
import PageFilterSelector from "../navigation/PageFilterSelector";

export default function PageSlider({ Component, propsArray, allowSort }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log(allowSort);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <PageFilterSelector
        goToSlide={goToSlide}
        page={homeViewLabel}
        propsArray={propsArray}
        allowSort={allowSort}
      />
      <div className="slider">
        <div
          className="slider-content"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {propsArray.map((props, index) => (
            <div key={index} className="page">
              {index === currentSlide && <Component {...props} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
