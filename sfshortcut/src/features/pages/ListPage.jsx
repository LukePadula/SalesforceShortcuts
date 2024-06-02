import React from "react";
import ShortcutList from "../ShortcutList";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../slices/shortcutSlice";

export default function ListPage() {
  const favourites = useSelector(selectFavorites);

  return <ShortcutList favourites={favourites} />;
}
