// import { defaultTransition } from "@/constant/transitions";
import { LucideProps } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

type CollapsableMenuProps = {
  TrigggerIcon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  content: React.ReactNode;
  isExpandable?: boolean;
  handleExpand?: () => void;
};

export const CollapsableMenu = ({
  content,
  TrigggerIcon,
  handleExpand,
  isExpandable,
}: CollapsableMenuProps) => {
  const [isMenuOpen, setIsMenu] = React.useState(false);

  return (
    <div>
      <motion.button
        onClick={() => {
          setIsMenu((prev) => !prev);
          if (isExpandable && handleExpand) {
            handleExpand();
          }
        }}
        transition={{
          type: "spring",
          duration: 0.2,
          stiffness: 120,
          mass: 0.5,
        }}
        whileHover={{ scale: 1.08 }}
        className="bg-white relative z-10 size-[3rem] grid place-items-center rounded-full shadow-lg"
      >
        <TrigggerIcon size={23} strokeWidth={3} className="text-neutral-500" />
      </motion.button>{" "}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 11,
              duration: 0.3,
              mass: 0.5,
              restSpeed: 1,
            }}
            style={{ transformOrigin: "top" }}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
                scale: 1,
                filter: "none",
              },
              collapsed: {
                opacity: 0,
                height: 0,
                scale: 0.8,
                filter: "blur(1px)",
              },
            }}
            className={"bg-white  shadow-xl   rounded-xl "}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
