"use client";

import { RightSidebarPanel } from "./RightSidebarPanel";
import { Template } from "@/components/Templates";
import { LeftSidebarPanel } from "./LeftSidebarPanel";

const ResumeBuilder = () => {
  return (
    <main className="grid md:grid-cols-[auto_1fr_auto] bg-neutral-50 min-h-screen">
      <LeftSidebarPanel />
      <section className="pt-11 pb-10 md:px-10 px-5 transition-all duration-500">
        <div className="shadow-lg bg-white p-2 max-w-[60rem] h-full  min-h-[120vh] rounded-xl mx-auto">
          <Template.DefaultTemplate />
        </div>
      </section>
      <RightSidebarPanel />
    </main>
  );
};
export default ResumeBuilder;
