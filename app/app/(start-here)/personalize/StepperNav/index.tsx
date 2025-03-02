"use client";

import { UI } from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

const sections = [
  {
    section: "personal information",
  },
  {
    section: "experience",
  },
  {
    section: "skills",
  },
  {
    section: "summary",
  },
  {
    section: "education",
  },
  {
    section: "certifications",
  },
];

export const StepperNav = () => {
  const [currentSection, setCurentSection] = React.useState(1);

  const tickVariants = {
    checked: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    unchecked: {
      pathLength: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-screen sticky border-r top-0 w-[18rem] bg-white pt-[1rem] pl-[2rem] md:block hidden"
    >
      <UI.Logo />
      <ul className="space-y-1.5  mt-10">
        {sections.map((section, index) => {
          const sectionIndex = index + 1;
          const activeSection = currentSection === sectionIndex;
          const passedSection = currentSection > sectionIndex;
          return (
            <li key={index} className="flex items-start group  gap-x-5">
              <div className="flex flex-col items-center gap-y-1.5">
                <div
                  className={cn(
                    "border size-[1.3rem] text-neutral-300 transition-all duration-200 text-sm grid place-items-center font-semibold  rounded-md",
                    activeSection ? "bg-primary-black " : "",
                    passedSection ? "bg-primary-black" : ""
                  )}
                >
                  {passedSection ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn(
                        "transition-transform duration-300",
                        passedSection ? "scale-100" : "scale-75"
                      )}
                    >
                      <motion.path
                        d="M6 12L10 16L18 8"
                        stroke={passedSection ? "white" : "hsl(var(--primary))"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={tickVariants}
                        initial="unchecked"
                        animate={passedSection ? "checked" : "unchecked"}
                      />
                    </svg>
                  ) : (
                    sectionIndex
                  )}
                </div>
                <div className="h-[1.5rem] group-last:hidden  w-1 bg-gradient-to-t from-neutral-100  to-neutral-200" />
              </div>
              <p
                onClick={() => setCurentSection(sectionIndex)}
                className={cn(
                  " cursor-pointer capitalize font-medium",
                  activeSection ? "text-primary-black" : "text-neutral-500"
                )}
              >
                {section.section}
              </p>
            </li>
          );
        })}
      </ul>
    </motion.aside>
  );
};
