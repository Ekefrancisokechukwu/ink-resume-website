import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type HeadingProps = {
  text: string;
};

export const Heading = ({ text }: HeadingProps) => {
  const { headingFontSize, tracking } = useSelector(
    (state: RootState) => state.customization.customize
  );

  const style: React.CSSProperties = {
    fontSize: `${headingFontSize}rem`,
    letterSpacing: `${tracking}em`,
  };

  return (
    <h2
      style={style}
      className="font-semibold truncate  transition-all duration-200"
    >
      {text}
    </h2>
  );
};
