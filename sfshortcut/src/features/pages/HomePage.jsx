import React, { useRef } from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorites,
  selectObjectFavourites,
  selectShortcuts,
} from "../../slices/shortcutSlice";
import ShortcutFavouriteItem from "../shortcuts/ShortcutFavouriteItem";
import ActionBlocked from "../ActionBlocked";
import { selectCurrentUrl } from "../../slices/navigationSlice";
import PageFilterSelector from "../navigation/PageFilterSelector";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  setHomepageFilter,
  selectHomePageFilter,
} from "../../slices/navigationSlice";

export default function HomePage() {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  const filter = useSelector(selectHomePageFilter);
  const favourites = useSelector(selectFavorites);
  const objectFavourites = useSelector(selectObjectFavourites);

  const shortcuts = useSelector(selectShortcuts);
  const url = useSelector(selectCurrentUrl);
  let content;
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: filter,
    afterChange: (current) => dispatch(setHomepageFilter(current)),
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  if (!url) {
    return (
      <div className="container-small">
        <ActionBlocked type={"invalidUrl"} />
      </div>
    );
  } else if (favourites.length > 0) {
    return (
      <div className="container-mid">
        <PageFilterSelector goToSlide={goToSlide} />
        <Slider ref={sliderRef} {...sliderSettings}>
          <div className="page">
            <div className="favourite-shortcut-container">
              {favourites.map((key) => (
                <div key={key} className="shortcut-item">
                  <ShortcutFavouriteItem label={key} config={shortcuts[key]} />
                </div>
              ))}
            </div>
          </div>
          <div className="page">
            <div className="favourite-shortcut-container">
              {objectFavourites.map((key) => (
                <div key={key} className="shortcut-item">
                  <ShortcutFavouriteItem label={key} config={shortcuts[key]} />
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    );
  } else {
    return (
      <div className="container-small">
        <PageFilterSelector />
        <ActionBlocked type={"noFavourites"} />;
      </div>
    );
  }
}
