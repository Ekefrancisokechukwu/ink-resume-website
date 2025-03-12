import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type AllowedTags = "p" | "span" | "div" | "li";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: AllowedTags;
}

export const Text = ({ as: Tag = "p", className, ...props }: TextProps) => {
  const { lineHeight, tracking } = useSelector(
    (state: RootState) => state.customization.customize
  );

  const style: React.CSSProperties = {
    lineHeight: `${lineHeight}%`,
    letterSpacing: `${tracking}em`,
  };

  return (
    <Tag
      style={style}
      className={cn("text-sm   text-neutral-500", className)}
      {...props}
    />
  );
};
