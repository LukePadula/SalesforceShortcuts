import React from "react";
import { useDispatch } from "react-redux";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  rectSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import {
  restrictToVerticalAxis,
  restrictToHorizontalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

export default function SortableList({
  data,
  Component,
  userSettings,
  faChevronDown,
  setFavourites,
  shortcuts,
  filterLabel,
}) {
  const dispatch = useDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = data.indexOf(active.id);
      const newIndex = data.indexOf(over.id);
      const updatedData = arrayMove(data, oldIndex, newIndex);

      const type =
        filterLabel === "Setup" ? "shortcutFavourites" : "objectFavourites";

      dispatch(
        setFavourites({
          savedFavourites: updatedData,
          favouriteType: type,
        })
      );
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={data}
        modifiers={[
          restrictToVerticalAxis,
          restrictToHorizontalAxis,
          restrictToWindowEdges,
        ]}
        strategy={rectSortingStrategy}
      >
        <div className="favourite-shortcut-container">
          <div className="favourite-list">
            {data.map((key) => (
              <SortableItem
                Component={Component}
                useDragOverlay={true}
                key={key}
                id={key}
                config={shortcuts[key]}
                userSettings={userSettings}
                faChevronDown={faChevronDown}
                itemReOrderEnabled={true}
              />
            ))}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
