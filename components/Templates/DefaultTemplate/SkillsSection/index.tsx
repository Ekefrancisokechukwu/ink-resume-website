import { Flower } from "lucide-react";
import { Card } from "../Card";
import { HeadingContainer } from "../HeadingContainer";

const fullStackSkills = [
  // Frontend Skills
  "HTML",
  "Css",
  "JavaScript",
  "React.js",
  "Redux ",
  "Tailwind CSS",
  "Framer Motion ",

  // Backend Skills
  "Node.js ",
  "RESTful ",
  "WebSockets ",
  "Authentication ",
  "Microservices",

  // Database & Storage
  "MongoDB",
  "PostgreSQL",
  "Redis",

  // DevOps & Tools
  "Docker ",
  "Cloud Services ",
  "Git & GitHub ",
  "Unit & Integration Testing",
];

export const SkillsSection = () => {
  return (
    <Card>
      <HeadingContainer heading="Top Skills" icon={Flower} />
      <ul className="px-4 py-4 flex flex-wrap items-center gap-2">
        {fullStackSkills.map((skill, i) => (
          <li
            key={i}
            className="capitalize py-[2px] px-2 text-sm text-neutral-500 rounded-md border inline-block"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
};
