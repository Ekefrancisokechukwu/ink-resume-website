import { LucideProps } from "lucide-react";
import React from "react";
import { IconType } from "react-icons/lib";

type IconBoxProps = {
  Icon:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | IconType;
};

export const IconBox = ({ Icon }: IconBoxProps) => {
  return (
    <div className="size-[2rem] flex-shrink-0 grid place-items-center rounded-lg border  bg-neutral-100">
      <Icon size={15} className="text-neutral-400" />
    </div>
  );
};
