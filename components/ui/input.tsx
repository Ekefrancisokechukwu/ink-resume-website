import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "./label";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-y-1.5">
        {label && <Label htmlFor={label}>{label}</Label>}

        <input
          type={type}
          className={cn(
            "flex h-8 transition-all duration-200 w-full rounded-lg border border-input bg-background px-3 py-2 text-base ring-offset-accent file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          id={id || label}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
