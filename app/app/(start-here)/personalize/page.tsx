"use client";

import { UI } from "@/components/ui";
import { StepperNav } from "./StepperNav";
import {
  Check,
  ChevronsUpDown,
  CirclePlus,
  CircleUser,
  GripVertical,
  Pencil,
  Plus,
  Trash,
} from "lucide-react";
import { countries, months } from "@/constant";
import React from "react";
import { cn, generateYears } from "@/lib/utils";
import { motion } from "motion/react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";

const personalLinks = ["linkedin", "x", "website", "github", "behance"];

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

const PersonalizePage = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const years = generateYears(2000, 2030);

  return (
    <div className="bg-neutral-50 min-h-screen grid md:grid-cols-[auto_1fr_auto] md:pl-0 px-5">
      <StepperNav />
      <section className="grid place-items-center pt-10 pb-24">
        <div className="max-w-[35rem] w-full ">
          <UI.Heading text="Add Experince" />
          <div className="mt-20 space-y-5">
            <div className="grid grid-cols-2 gap-x-5">
              <UI.Input label="Job Title" />
              <UI.Input label="Company" />
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <div className="flex flex-col gap-y-1.5">
                <UI.Label>Country</UI.Label>
                <UI.Popover open={open} onOpenChange={setOpen}>
                  <UI.PopoverTrigger asChild>
                    <UI.Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="justify-between h-8 rounded-lg"
                    >
                      {value
                        ? countries.find((country) => country.label === value)
                            ?.label
                        : "Select country..."}
                      <ChevronsUpDown className="opacity-50" />
                    </UI.Button>
                  </UI.PopoverTrigger>
                  <UI.PopoverContent className="w-[200px] p-0">
                    <UI.Command>
                      <UI.CommandInput placeholder="Search framework..." />
                      <UI.CommandList className="scroll-bar">
                        <UI.CommandEmpty>No country found.</UI.CommandEmpty>
                        <UI.CommandGroup>
                          {countries.map((country) => (
                            <UI.CommandItem
                              key={country.value}
                              value={country.label}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              {country.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  value === country.label
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </UI.CommandItem>
                          ))}
                        </UI.CommandGroup>
                      </UI.CommandList>
                    </UI.Command>
                  </UI.PopoverContent>
                </UI.Popover>
              </div>
              <UI.Input label="State" />
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <div className="flex flex-col gap-y-1.5">
                <UI.Label>Start Year</UI.Label>
                <UI.Select>
                  <UI.SelectTrigger>
                    <UI.SelectValue placeholder="Select Year" />
                  </UI.SelectTrigger>
                  <UI.SelectContent>
                    {years.map((year, i) => (
                      <UI.SelectItem key={i} value={year.value}>
                        {year.label}
                      </UI.SelectItem>
                    ))}
                  </UI.SelectContent>
                </UI.Select>
              </div>
              <div className="flex flex-col gap-y-1.5">
                <UI.Label>Start Month</UI.Label>
                <UI.Select>
                  <UI.SelectTrigger>
                    <UI.SelectValue placeholder="Select Month" />
                  </UI.SelectTrigger>
                  <UI.SelectContent>
                    {months.map((month, i) => (
                      <UI.SelectItem key={i} value={month}>
                        {month}
                      </UI.SelectItem>
                    ))}
                  </UI.SelectContent>
                </UI.Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              <div className="flex flex-col gap-y-1.5">
                <UI.Label>End Year</UI.Label>
                <UI.Select>
                  <UI.SelectTrigger>
                    <UI.SelectValue placeholder="End Year" />
                  </UI.SelectTrigger>
                  <UI.SelectContent>
                    {years.map((year, i) => (
                      <UI.SelectItem key={i} value={year.value}>
                        {year.label}
                      </UI.SelectItem>
                    ))}
                  </UI.SelectContent>
                </UI.Select>
              </div>
              <div className="flex flex-col gap-y-1.5">
                <UI.Label>End Month</UI.Label>
                <UI.Select>
                  <UI.SelectTrigger>
                    <UI.SelectValue placeholder="End Month" />
                  </UI.SelectTrigger>
                  <UI.SelectContent>
                    {months.map((month, i) => (
                      <UI.SelectItem key={i} value={month}>
                        {month}
                      </UI.SelectItem>
                    ))}
                  </UI.SelectContent>
                </UI.Select>
              </div>
            </div>
          </div>

          {/* <Experience /> */}
          {/* <PersonalInformation /> */}
        </div>
      </section>
      <div className="w-[13rem] md:block hidden"></div>
    </div>
  );
};

const Experience = () => {
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

const PersonalInformation = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedLink, setSelectedLink] = React.useState<string[] | []>([]);

  const avaliableLinks = personalLinks.filter(
    (link) => !selectedLink.some((f) => f === link)
  );

  return (
    <div>
      <UI.Heading text="Personal Information" />
      <Photo />
      <div className="mt-7 space-y-4">
        <div className="grid grid-cols-2 gap-x-6 ">
          <UI.Input label="Full Name" />
          <UI.Input label="Job Title" />
        </div>
        <UI.Input label="Phone" type="tel" />
        <div className="grid grid-cols-2 gap-x-6 ">
          <div className="flex flex-col gap-y-1.5">
            <UI.Label>Country</UI.Label>
            <UI.Popover open={open} onOpenChange={setOpen}>
              <UI.PopoverTrigger asChild>
                <UI.Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between h-8 rounded-lg"
                >
                  {value
                    ? countries.find((country) => country.label === value)
                        ?.label
                    : "Select country..."}
                  <ChevronsUpDown className="opacity-50" />
                </UI.Button>
              </UI.PopoverTrigger>
              <UI.PopoverContent className="w-[200px] p-0 rounded-lg">
                <UI.Command>
                  <UI.CommandInput placeholder="Search framework..." />
                  <UI.CommandList className="scroll-bar">
                    <UI.CommandEmpty>No country found.</UI.CommandEmpty>
                    <UI.CommandGroup>
                      {countries.map((country) => (
                        <UI.CommandItem
                          key={country.value}
                          value={country.label}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {country.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === country.label
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </UI.CommandItem>
                      ))}
                    </UI.CommandGroup>
                  </UI.CommandList>
                </UI.Command>
              </UI.PopoverContent>
            </UI.Popover>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <UI.Input label="City" />
          </div>
        </div>
        <UI.Input label="Email" type="email" />

        {selectedLink.length > 0 && (
          <motion.div layoutRoot className="grid grid-cols-2 gap-x-6 gap-y-4 ">
            {[...selectedLink].map((selected) => {
              return (
                <motion.div
                  key={selected}
                  layoutId={selected}
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <UI.Input
                    label={selected}
                    type="text"
                    rightIcon={
                      <button
                        className="group"
                        onClick={() =>
                          setSelectedLink((links) =>
                            links.filter((link) => link !== selected)
                          )
                        }
                      >
                        <Trash className="text-neutral-400 group-hover:text-neutral-700" />
                      </button>
                    }
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        <div className="flex items-center flex-wrap gap-3 ">
          {avaliableLinks.map((link) => {
            return (
              <button
                onClick={() =>
                  setSelectedLink((prev) => {
                    return [...prev, link];
                  })
                }
                key={link}
                className="border font-semibold capitalize inline-flex items-center  gap-x-2 ring-neutral-400 px-3 py-1 rounded-full  transition-colors duration-300  text-neutral-500"
              >
                {link} <Plus size={18} />
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div />
        <UI.Button>Save and Continue</UI.Button>
      </div>
    </div>
  );
};

const Photo = () => {
  return (
    <div className="mt-20 flex items-center gap-x-5">
      <div className="border-dashed border-2 rounded-md grid place-items-center bg-white size-[6rem]">
        <CircleUser size={40} className="text-neutral-600" />
      </div>
      <div>
        <p className="text-neutral-600">
          Add a Photo to Your Resume (Optional)
        </p>
        <UI.Button size={"sm"} variant={"outline"} className="mt-4">
          Add Photo
        </UI.Button>
      </div>
    </div>
  );
};

export default PersonalizePage;
