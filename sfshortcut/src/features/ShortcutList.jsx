import React, { useEffect, useRef, useState } from "react";
import ShortcutListItem from "./shortcuts/ShortcutListItem";
import "./ShortcutList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ActionBlocked from "./ActionBlocked";
import { useDispatch } from "react-redux";

export default function ShortcutList({ data, userSettings }) {
  const [page, setPage] = useState(1); // Tracks the current page
  const itemsPerPage = 25; // Number of items to load per page
  const listContainerRef = useRef(null);
  const dispatch = useDispatch();
  const keyArray = Object.keys(data);

  useEffect(() => {
    const handleScroll = () => {
      if (listContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } =
          listContainerRef.current;

        // Check if user scrolled to the bottom
        if (scrollTop + clientHeight >= scrollHeight - 50) {
          setPage((prevPage) => prevPage + 1); // Increment the page
        }
      }
    };

    const container = listContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  console.log(data);
  const currentData = keyArray
    .slice(0, page * itemsPerPage) // Get items for the current page
    .map((key) => ({ ...data[key], shortcutKey: key })); // Include shortcutKey explicitly

  if (keyArray.length === 0) {
    return <ActionBlocked type="noSearchResults" />;
  }

  return (
    <div
      className="list-container"
      ref={listContainerRef}
      style={{ overflowY: "auto", maxHeight: "400px" }}
    >
      {currentData.map((item, index) => (
        <ShortcutListItem
          key={index}
          shortcutKey={item.shortcutKey}
          config={item}
          FontAwesomeIcon={FontAwesomeIcon}
          starIcon={faStar}
          faChevronDown={faChevronDown}
          userSettings={userSettings}
        />
      ))}
    </div>
  );
}
