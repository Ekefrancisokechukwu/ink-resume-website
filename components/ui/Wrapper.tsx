import { cn } from "@/lib/utils";
import React from "react";

type AllowedTags = "div" | "section" | "header" | "main";

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: AllowedTags;
}

export const Wrapper = ({
  as: Tag = "div",
  children,
  className,
  ...props
}: WrapperProps) => {
  return (
    <Tag
      className={cn(
        "2xl:max-w-[90rem] xl:max-w-[75rem] w-full  mx-auto lg:px-8 px-4",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
