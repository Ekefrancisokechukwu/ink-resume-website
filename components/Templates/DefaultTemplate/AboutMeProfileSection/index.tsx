import { Card } from "../Card";
import { HeadingContainer } from "../HeadingContainer";
import { RiUserStarLine } from "react-icons/ri";

export const AboutMeProfileSection = () => {
  return (
    <Card>
      <HeadingContainer heading="Professional Profile" icon={RiUserStarLine} />
      <div className="px-4 py-4">
        <p className="text-sm font-medium text-neutral-500">
          A highly motivated and detail-oriented Full-Stack Developer with
          expertise in JavaScript, TypeScript, Node.js, React, Next.js, and
          PostgreSQL. Passionate about building scalable web applications with a
          strong emphasis on backend development, API design, database
          management, and real-time features using WebSockets (Socket.io).
        </p>
      </div>
    </Card>
  );
};
