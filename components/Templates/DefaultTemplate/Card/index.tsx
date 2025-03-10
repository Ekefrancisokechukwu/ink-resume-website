import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn("bg-white border  rounded-xl", className)}>
      {children}
    </div>
  );
};
