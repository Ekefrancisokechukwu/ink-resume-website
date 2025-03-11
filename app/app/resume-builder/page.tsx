"use client";

import { RightSidebarPanel } from "./RightSidebarPanel";
import { Template } from "@/components/Templates";
import { LeftSidebarPanel } from "./LeftSidebarPanel";
import { ControlNavPanel } from "./ControlNavPanel";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ResumeBuilder = () => {
  const editMode = useSelector((state: RootState) => state.resumeMode.editMode);

  return (
    <main className="grid md:grid-cols-[auto_1fr_auto] bg-neutral-50 min-h-screen">
      <LeftSidebarPanel />
      <motion.section
        animate={editMode ? { scale: 0.95 } : { scale: 1 }}
        className="pt-11 pb-16 md:px-10 px-5 transition-all duration-500"
      >
        <div className="shadow-lg bg-white p-2 max-w-[60rem] h-full  min-h-[120vh] rounded-xl mx-auto">
          <Template.DefaultTemplate />
        </div>
      </motion.section>
      <RightSidebarPanel />
      <ControlNavPanel />
    </main>
  );
};
export default ResumeBuilder;
