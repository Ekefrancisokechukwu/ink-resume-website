import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ ...props }: HeadingProps) => {
  const { headingFontSize, tracking } = useSelector(
    (state: RootState) => state.customization.customize
  );

  const style: React.CSSProperties = {
    // fontSize: `${headingFontSize}rem`,
    letterSpacing: `${tracking}em`,
  };

  return (
    <h1
      style={style}
      className="font-semibold leading-4  text-neutral-800"
      {...props}
    />
  );
};
