"use client";

import { defaultTransition } from "@/constant/transitions";
import { cn } from "@/lib/utils";
import { toggleEditMode } from "@/redux/features/resumeMode/resumeModeSlice";
import { RootState, useAppDispatch } from "@/redux/store";
import { LayoutList, LayoutPanelLeft, Pencil, PencilOff } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { useSelector } from "react-redux";

export const ControlNavPanel = () => {
  const editMode = useSelector((state: RootState) => state.resumeMode.editMode);
  const dispatch = useAppDispatch();

  return (
    <nav className="flex z-20 items-center gap-x-3 fixed bottom-7 left-1/2 -translate-x-1/2">
      <motion.button
        onClick={() => dispatch(toggleEditMode())}
        transition={defaultTransition}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: [1, 0.6] }}
        className={cn(
          "size-[3rem] group  text-neutral-600 grid place-items-center shadow-[0_20px_25px_-5px_rgb(0,0,0,0.1),_0_8px_10px_-6px_rgb(0,0,0,0.1),_0px_-2px_3px_rgba(0,0,0,0.2)_inset] rounded-full bg-white"
        )}
      >
        {editMode ? <Pencil size={18} /> : <PencilOff size={18} />}
      </motion.button>
      <div className="px-5 py-2 bg-white   rounded-full w-[15rem] shadow-[0_20px_25px_-5px_rgb(0,0,0,0.1),_0_8px_10px_-6px_rgb(0,0,0,0.1),_0px_-2px_3px_rgba(0,0,0,0.2)_inset]">
        <div className="text-neutral-600 cursor-pointer w-max relative flex flex-col items-center">
          <LayoutPanelLeft size={22} />
          <span className="text-xs ">Layouts</span>
          <div className="absolute -top-[4rem] flex items-center gap-x-5">
            <motion.button
              transition={{ type: "spring", duration: 0.4, damping: 8 }}
              whileHover={{ translateY: -10 }}
              className="size-[2.5rem] grid place-items-center bg-white borde shadow-xl"
            >
              <LayoutPanelLeft size={22} className="rotate-180" />
            </motion.button>
            <motion.button
              transition={{ type: "spring", duration: 0.4, damping: 8 }}
              whileHover={{ translateY: -10 }}
              className="size-[2.5rem] grid place-items-center bg-white borde shadow-xl"
            >
              <LayoutList size={22} />
            </motion.button>
            <motion.button
              transition={{ type: "spring", duration: 0.4, damping: 8 }}
              whileHover={{ translateY: -10 }}
              className="size-[2.5rem] grid place-items-center bg-white borde shadow-xl"
            >
              <LayoutPanelLeft size={22} />
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};
