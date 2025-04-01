import { UI } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  DndContext,
  closestCenter,
  // KeyboardSensor,
  // PointerSensor,
  // useSensor,
  // useSensors,
  // type DragEndEvent,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  // arrayMove,
  // SortableContext,
  // sortableKeyboardCoordinates,
  useSortable,
  // verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CirclePlus, GripHorizontal, Pencil, Trash } from "lucide-react";
import React from "react";

export const Education = () => {
  const [educations, setEducations] = React.useState([]);

  function handleFunc() {
    setEducations([]);
  }

  return (
    <div onAnimationEnd={handleFunc}>
      <UI.Heading text="Education summary" />
      <p className="text-neutral-500  mt-1">
        Add, edit, or delete your education.
      </p>

      <div className="mt-20">
        <div className="max-w-[35rem]">
          <DndContext
            // sensors={sensors}
            collisionDetection={closestCenter}
            // onDragEnd={handleDragEnd}
            modifiers={[restrictToParentElement]}
          >
            <div className="space-y-6">
              <SortableEducation />
              <button className="border-dashed border-2 text-sm font-semibold text-neutral-600 bg-white justify-center  px-7 py-3 rounded-lg w-full flex items-center gap-x-3">
                <CirclePlus size={18} />
                {educations.length > 0
                  ? "Add another Education"
                  : "Add Education"}
              </button>
            </div>
          </DndContext>
          <div className="flex items-center gap-x-5 mt-10">
            <UI.Button variant={"outline"} className="w-full">
              Back
            </UI.Button>
            <UI.Button className="w-full">Next</UI.Button>
          </div>
          <div className="flex justify-center">
            <UI.Button variant={"secondary"} className="w-[13rem]  mt-5">
              Back
            </UI.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SortableEducation = () => {
  const {
    attributes,
    listeners,
    // setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: 1,
    transition: {
      duration: 300,
      easing: "ease-out",
    },
  });

  const style = {
    transform: transform ? `translateY(${transform.y}px)` : undefined,
    transition,
  };

  return (
    <div
      style={style}
      className={cn(
        "border rounded-xl bg-white flex gap-x-7 items-center px-3 py-2",
        isDragging ? "shadow-lg z-10 relative" : ""
      )}
    >
      <button
        {...attributes}
        {...listeners}
        className={cn(
          "hover:bg-neutral-100  transition-colors duration-200 p-1 rounded",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
      >
        <GripHorizontal size={18} className="text-neutral-600" />
      </button>
      <div className="text-neutral-600  font-medium">
        {" "}
        <span>Self taught </span>
        <span>(Jun 2023)</span>
      </div>
      <div className="flex items-center gap-x-3 ms-auto">
        <UI.Button
          size={"sm"}
          variant={"secondary"}
          className="text-neutral-500 hover:text-neutral-600"
        >
          <Trash />
        </UI.Button>

        <UI.Button
          size={"sm"}
          variant={"secondary"}
          className="text-neutral-500 hover:text-neutral-600"
        >
          <Pencil />
        </UI.Button>
      </div>
    </div>
  );
};
