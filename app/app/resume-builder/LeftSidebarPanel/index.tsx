import { ArrowDownToLine, Brush, FilePlus2, House, Trash2 } from "lucide-react";
import { CollapsableMenu } from "../CollapsableMenu";
import { motion } from "motion/react";
import React from "react";

const mainMenus = [
  {
    label: "home",
    icon: House,
  },
  {
    label: "new",
    icon: FilePlus2,
  },
  {
    label: "Download",
    icon: ArrowDownToLine,
  },
  {
    label: "Delete",
    icon: Trash2,
  },
];

export const LeftSidebarPanel = () => {
  const [expandSidebar, setExpandSidebar] = React.useState(false);

  return (
    <motion.aside
      initial={{ width: "10rem" }}
      animate={expandSidebar ? { width: "15rem" } : { width: "10rem" }}
      className="min-w-[10rem] md:block hidden  border-r h-screen sticky top-0 px-5 pt-3"
    >
      <div className="">
        <input
          type="text"
          defaultValue={"Untitled"}
          className="peer  focus:ring-2 w-full shadow-md  focus:ring-neutral-400/50 outline-none rounded font-medium  hover:ring-neutral-200 hover:ring-1 px-2 py-[1px] min-w-[100px]  max-w-[23rem]"
          placeholder="Enter Name here..."
        />
      </div>
      <div className="mt-4 space-y-5">
        <CollapsableMenu
          handleExpand={() => setExpandSidebar(!expandSidebar)}
          isExpandable={true}
          TrigggerIcon={Brush}
          content={
            <ul className="divid-y ">
              {mainMenus.map((menu, index) => {
                return (
                  <motion.li
                    key={index}
                    transition={{
                      duration: 0.1,
                      ease: "linear",
                    }}
                    whileHover={{ scale: 1.07 }}
                    role="button"
                    className="w-full  py-2 capitalize text-primary-black hover:shadow-md hover:rounded-lg first-of-type:rounded-t-xl last-of-type:rounded-b-lg bg-white  px-3.5 text-sm font-medium flex items-center gap-x-3"
                  >
                    <menu.icon size={17} className="text-neutral-500" />
                    {menu.label}
                  </motion.li>
                );
              })}
            </ul>
          }
        />
      </div>
    </motion.aside>
  );
};
