import { cn } from "@/lib/utils";

type HeadingProps = {
  text: string;
  className?: string;
};

export const Heading = ({ text, className }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-primary-black  font-semibold md:text-3xl text-2xl",
        className
      )}
    >
      {text}
    </h1>
  );
};
