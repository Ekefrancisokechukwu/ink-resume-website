import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { LucideProps } from "lucide-react";
import React from "react";
import { IconType } from "react-icons/lib";
import { useSelector } from "react-redux";

type IconBoxProps = {
  Icon:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | IconType;
};

export const IconBox = ({ Icon }: IconBoxProps) => {
  const color = useSelector(
    (state: RootState) => state.customization.customize.color
  );

  const iconStyle = {
    color: color,
  };

  const boxStyle = {
    border: `solid 1px ${color}`,
  };

  return (
    <div
      style={color ? boxStyle : {}}
      className={cn(
        "size-[2rem] flex-shrink-0 grid place-items-center rounded-lg border  bg-neutral-100"
      )}
    >
      <Icon
        size={15}
        style={color ? iconStyle : {}}
        className={cn("text-neutral-400")}
      />
    </div>
  );
};
