import { LucideProps } from "lucide-react";
import { Heading } from "../Heading";
import { IconBox } from "../IconBox";
import { IconType } from "react-icons/lib";

type HeadingContainerProps = {
  icon?:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | IconType;
  heading?: string;
};

export const HeadingContainer = ({ heading, icon }: HeadingContainerProps) => {
  return (
    <div className="flex items-center gap-x-3 px-4  py-3 border-b">
      {icon && <IconBox Icon={icon} />}
      {heading && <Heading text={heading} />}
    </div>
  );
};
