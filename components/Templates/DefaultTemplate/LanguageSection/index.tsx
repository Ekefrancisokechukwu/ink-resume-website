import { Card } from "../Card";
import { HeadingContainer } from "../HeadingContainer";
import { CiGlobe } from "react-icons/ci";

export const LangaugeSection = () => {
  return (
    <Card>
      <HeadingContainer heading="Language" icon={CiGlobe} />
      <ul className="py-4 px-4 space-y-1">
        <li>
          <span className="text-neutral-800 font-semibold text-sm">
            English
          </span>
          <p className="text-neutral-500 text-xs font-medium">Good</p>
        </li>
        <li>
          <span className="text-neutral-800 font-semibold text-sm">French</span>
          <p className="text-neutral-500 text-xs font-medium">Beginner</p>
        </li>
      </ul>
    </Card>
  );
};
