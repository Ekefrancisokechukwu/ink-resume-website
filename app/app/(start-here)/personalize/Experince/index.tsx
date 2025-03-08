import { UI } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CirclePlus, GripVertical, Pencil, Trash } from "lucide-react";
import React from "react";

type ExperienceItem = {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
};

const initialItems: ExperienceItem[] = [
  {
    id: "1",
    company: "Pickriders",
    position: "Frontend Developer",
    period: "Jan 2024 - Present",
    description: [
      "Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving",
      "Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving",
      "Demonstrating a seamless integration of data science acumen and business consulting proficiency, effectively driving",
    ],
  },
  {
    id: "2",
    company: "TechCorp",
    position: "Full Stack Developer",
    period: "Jun 2023 - Dec 2023",
    description: [
      "Led the development of a high-performance web application using React and Node.js",
      "Implemented responsive design principles, ensuring seamless user experience across devices",
      "Collaborated with UX designers to create intuitive and visually appealing user interfaces",
    ],
  },
  {
    id: "3",
    company: "DataSolutions",
    position: "Data Analyst",
    period: "Jan 2023 - May 2023",
    description: [
      "Analyzed large datasets using SQL and Python to derive actionable insights",
      "Created data visualization dashboards using Tableau, improving decision-making processes",
      "Contributed to the development of machine learning models for predictive analytics",
    ],
  },
];

type ExperinceProps = {
  nextPage: () => void;
  prevPage: () => void;
};

export const Experience = ({ nextPage, prevPage }: ExperinceProps) => {
  const [items, setItems] = React.useState<ExperienceItem[]>(initialItems);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div>
      <UI.Heading text="Experience summary" />
      <p className="text-neutral-500  mt-1">
        Add, edit, or delete your work experience.
      </p>

      <div className="mt-20">
        <div className="max-w-[35rem]">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToParentElement]}
          >
            <div className="space-y-6">
              <SortableContext
                items={items.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {items.map((item) => (
                  <SortableExperienceItem key={item.id} item={item} />
                ))}
              </SortableContext>
              <button className="border-dashed border-2 text-sm font-semibold text-neutral-600 bg-white justify-center  px-7 py-3 rounded-lg w-full flex items-center gap-x-3">
                <CirclePlus size={18} />{" "}
                {items.length > 0 ? "Add another Job" : "Add Job"}
              </button>
            </div>
          </DndContext>
          <div className="flex items-center gap-x-7 justify-end mt-[3rem]">
            <UI.Button variant={"outline"} onClick={prevPage}>
              Back
            </UI.Button>
            <UI.Button onClick={nextPage}>Save and Continue</UI.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SortableExperienceItem = ({ item }: { item: ExperienceItem }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: item.id,
    transition: {
      duration: 300,
      easing: "ease-out",
    },
  });

  const style = {
    transform: transform ? `translateY(${transform.y}px)` : undefined,
    transition,
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <article
      ref={setNodeRef}
      style={style}
      className={isDragging ? "relative z-10" : ""}
    >
      <div className="flex items-center justify-between gap-x-3">
        <div className="flex items-center gap-x-1">
          <button
            {...attributes}
            {...listeners}
            className={cn(
              "transition-all  p-1 hover:bg-neutral-100 rounded-md duration-300",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
          >
            <GripVertical size={17} className="text-neutral-500" />
          </button>{" "}
          <h4 className="font-semibold">{item.company}</h4>
          <UI.Button size={"sm"} variant={"ghost"}>
            <Pencil size={15} />
          </UI.Button>
        </div>
        <button className="flex items-center gap-x-2 text-sm p-1 hover:underline font-semibold text-neutral-600">
          <CirclePlus size={15} /> Add another position
        </button>
      </div>
      <div
        className={cn(
          "border mt-1 bg-white p-3 transition-all duration-500 rounded-lg",
          isDragging ? "shadow-lg " : ""
        )}
      >
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-medium text-sm">{item.position}</h5>
            <p className="text-sm mt-1 text-neutral-500">{item.period}</p>
          </div>
          <div className="flex items-center gap-x-3">
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
        <div className="mt-2 text-sm text-neutral-500">
          {/* <p className="text-neutral-500">
                    Demonstrating a seamless integration of data science acumen
                    and business consulting proficiency, effectively driving
                    transformative initiatives and delivering strategic insights
                    to optimize organizational performance.
                  </p> */}
          <ul className=" list-disc space-y-3 ">
            {item.description.map((desc, i) => (
              <li key={i} className="ml-5">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};
