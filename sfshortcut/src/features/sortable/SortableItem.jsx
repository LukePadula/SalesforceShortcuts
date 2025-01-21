import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem({
  Component,
  id,
  config,
  userSettings,
  faChevronDown,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="shortcut-item"
    >
      <Component
        config={config}
        shortcutKey={id}
        label={id}
        faChevronDown={faChevronDown}
        userSettings={userSettings}
        itemReOrderEnabled={true}
      />
    </div>
  );
}
