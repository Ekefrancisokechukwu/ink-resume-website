import { Card } from "../Card";
import { HeadingContainer } from "../HeadingContainer";
import { RiUserStarLine } from "react-icons/ri";
import { Overlay } from "../Overlay";
import { UI } from "@/components/ui";

export const AboutMeProfileSection = () => {
  return (
    <Card className="relative hover:z-10  group/card">
      <HeadingContainer heading="Professional Profile" icon={RiUserStarLine} />
      <div className="px-4 py-4">
        <UI.Text>
          A highly motivated and detail-oriented Full-Stack Developer with
          expertise in JavaScript, TypeScript, Node.js, React, Next.js, and
          PostgreSQL. Passionate about building scalable web applications with a
          strong emphasis on backend development, API design, database
          management, and real-time features using WebSockets (Socket.io).
        </UI.Text>
      </div>
      <Overlay sortable={true} />
    </Card>
  );
};
