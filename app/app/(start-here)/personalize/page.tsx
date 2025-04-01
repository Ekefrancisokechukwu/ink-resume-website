"use client";

// import { UI } from "@/components/ui";
import { StepperNav } from "./StepperNav";
// import {
//   Check,
//   ChevronsUpDown,
//   CirclePlus,
//   CircleUser,
//   GripVertical,
//   Pencil,
//   Plus,
//   Trash,
// } from "lucide-react";
// import { countries, months } from "@/constant";
import React from "react";
// import { cn, generateYears } from "@/lib/utils";
import { motion } from "motion/react";
// import {
//   DndContext,
//   closestCenter,
//   KeyboardSensor,
//   PointerSensor,
//   useSensor,
//   useSensors,
//   type DragEndEvent,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { restrictToParentElement } from "@dnd-kit/modifiers";
// import { AddExperince } from "./AddExperince";
import { Skills } from "./Skills";
import { Summary } from "./Summary";
import { Experience } from "./Experince";
import { PersonalInformation } from "./PersonalInfo";
import { Education } from "./Education";
import { Certifications } from "./Certifications";

const PersonalizePage = () => {
  const nextPage = () => {
    if (currentSection.index < sections.length) {
      setCurrentSection({
        index: currentSection.index + 1,
        section: sections[currentSection.index].component,
      });
    }
  };

  const prevPage = () => {
    if (currentSection.index > 1) {
      setCurrentSection({
        index: currentSection.index - 1,
        section: sections[currentSection.index].component,
      });
    }
  };

  const sections = [
    {
      section: "personal information",
      component: <PersonalInformation nextPage={nextPage} />,
    },
    {
      section: "experience",
      component: <Experience prevPage={prevPage} nextPage={nextPage} />,
    },
    {
      section: "skills",
      component: <Skills prevPage={prevPage} nextPage={nextPage} />,
    },
    { section: "summary", component: <Summary /> },
    { section: "Education", component: <Education /> },
    { section: "certifications", component: <Certifications /> },
  ];

  const [currentSection, setCurrentSection] = React.useState({
    index: 1,
    section: sections[0].component,
  });

  return (
    <div className="bg-neutral-50 min-h-screen grid md:grid-cols-[auto_1fr] w-full md:pl-0 ">
      <StepperNav
        currentSection={currentSection.index}
        setCurrentSection={setCurrentSection}
      />
      <section className="grid   2xl:items-start items-center   pl-[5rem] pr-[3rem] max-w-[80rem]   pt-10 pb-24">
        {/* <Summary />
        <Skills /> */}
        {/* <AddExperince /> */}
        {/* <Experience /> */}
        {/* <PersonalInformation /> */}
        <motion.div
          key={currentSection.index}
          transition={{ duration: 0.3, stiffness: 50, mass: 0.3 }}
          initial={{ y: 30 }}
          animate={{ y: 0 }}
        >
          {sections[currentSection.index - 1].component}
        </motion.div>
      </section>
    </div>
  );
};

export default PersonalizePage;
