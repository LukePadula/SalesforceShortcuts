import React from "react";
import ShortcutList from "../ShortcutList";
import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectObjectFavourites,
  selectShortcuts,
} from "../../slices/shortcutSlice";
import PageHeader from "../PageHeader";
import { shortcutListViewLabel } from "../../app/utilities/predefinedVariables";

export default function ListPage() {
  const favourites = useSelector(selectFavorites);
  const objectFavourites = useSelector(selectObjectFavourites);
  const shortcuts = useSelector(selectShortcuts);

  return (
    <div className="container-mid">
      <PageHeader pageTitle={shortcutListViewLabel} />
      <ShortcutList
        shortcuts={shortcuts}
        favourites={favourites}
        objectFavourites={objectFavourites}
      />
    </div>
  );
}
