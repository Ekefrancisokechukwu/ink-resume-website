"use client";

import { defaultTransition } from "@/constant/transitions";
import { useClickOutside } from "@/hooks";
import { updateCustomization } from "@/redux/features/customize/customizeSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useSelector } from "react-redux";

const fontOptions = [
  {
    label: "Arial",
    value: "Arial",
    style: { fontFamily: "Arial, sans-serif" },
  },
  {
    label: "Times New Roman",
    value: "Times New Roman",
    style: { fontFamily: '"Times New Roman", serif' },
  },
  {
    label: "Courier New",
    value: "Courier New",
    style: { fontFamily: '"Courier New", monospace' },
  },
  {
    label: "Verdana",
    value: "Verdana",
    style: { fontFamily: "Verdana, sans-serif" },
  },
  {
    label: "Georgia",
    value: "Georgia",
    style: { fontFamily: "Georgia, serif" },
  },
  {
    label: "Trebuchet MS",
    value: "Trebuchet MS",
    style: { fontFamily: '"Trebuchet MS", sans-serif' },
  },
  {
    label: "Tahoma",
    value: "Tahoma",
    style: { fontFamily: "Tahoma, sans-serif" },
  },
  {
    label: "Comic Sans MS",
    value: "Comic Sans MS",
    style: { fontFamily: '"Comic Sans MS", cursive' },
  },
  {
    label: "Impact",
    value: "Impact",
    style: { fontFamily: "Impact, sans-serif" },
  },
  {
    label: "Lucida Console",
    value: "Lucida Console",
    style: { fontFamily: '"Lucida Console", monospace' },
  },
  {
    label: "Montserrat",
    value: "Montserrat",
    style: { fontFamily: "Montserrat, sans-serif" },
  },
  {
    label: "Pacifico",
    value: "Pacifico",
    style: { fontFamily: "Pacifico, cursive" },
  },
  {
    label: "Roboto",
    value: "Roboto",
    style: { fontFamily: "Roboto, sans-serif" },
  },
];

// UNUSED FONTS
// const googleFonts = [
//   "Roboto",
//   "Open Sans",
//   "Lato",
//   "Montserrat",
//   "Oswald",
//   "Raleway",
//   "Merriweather",
//   "Noto Sans",
//   "PT Sans",
//   "Source Sans Pro",
//   "Poppins",
//   "Playfair Display",
//   "Ubuntu",
//   "Roboto Condensed",
//   "Nunito",
//   "Cabin",
//   "Work Sans",
//   "Lora",
//   "Inter",
//   "Mukta",
// ];

export const FontStyleDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  useClickOutside(isOpen, dropdownRef, () => setIsOpen(false));
  const fontFamily = useSelector(
    (state: RootState) => state.customization.customize.fontFamily
  );
  const dispatch = useAppDispatch();

  function handleFontStyle(font: string) {
    dispatch(updateCustomization({ fontFamily: font }));
  }

  return (
    <div>
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full font-semibold flex items-center text-primary-black  gap-x-2 justify-between text-sm px-4 py-1 bg-neutral-100 transition-colors duration-500 hover:bg-neutral-200 rounded-lg"
        >
          {fontFamily} <ChevronDown size={14} />
        </button>
        <AnimatePresence mode="sync">
          {isOpen && (
            <motion.div
              initial={"close"}
              animate={"open"}
              exit={"close"}
              variants={{
                open: { scale: 1, filter: "none", opacity: 1 },
                close: { scale: 0, filter: "blur(2px)", opacity: 0 },
              }}
              transition={defaultTransition}
              className="w-full z-10 origin-top-right absolute shadow-xl  bg-white top-full left-0 rounded-xl"
            >
              <div className="flex flex-col scroll-bar max-h-[17rem] overflow-y-auto  p-[2px]">
                {fontOptions.map((font, i) => {
                  return (
                    <button
                      style={font.style}
                      key={i}
                      onClick={() => handleFontStyle(font.value)}
                      className="inline-flex text-sm transition-all hover:bg-neutral-100 duration-300 text-primary-black py-1.5 px-4"
                    >
                      {font.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
