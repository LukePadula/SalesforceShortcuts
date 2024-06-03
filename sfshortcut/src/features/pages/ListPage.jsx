import React from "react";
import ShortcutList from "../ShortcutList";
import { useSelector } from "react-redux";
import { selectFavorites, selectShortcuts } from "../../slices/shortcutSlice";

export default function ListPage() {
  const favourites = useSelector(selectFavorites);
  const shortcuts = useSelector(selectShortcuts);

  return <ShortcutList shortcuts={shortcuts} favourites={favourites} />;
}
