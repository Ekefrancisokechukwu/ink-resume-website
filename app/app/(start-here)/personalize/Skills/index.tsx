import { UI } from "@/components/ui";
import { CirclePlus, GripHorizontal, Plus, Search, Trash2 } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import React from "react";
import { cn } from "@/lib/utils";

const frontendSkills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive Design",
  "CSS Frameworks (Bootstrap, Tailwind CSS)",
  "CSS Preprocessors (SASS, LESS)",
  "JavaScript Frameworks/Libraries (React, Vue, Angular)",
  "State Management (Redux, Zustand, Recoil)",
  "TypeScript",
  "Version Control (Git, GitHub, GitLab, Bitbucket)",
  "Package Managers (npm, yarn, pnpm)",
  "Module Bundlers (Webpack, Vite, Parcel)",
  "RESTful APIs & GraphQL",
  "Authentication & Authorization (OAuth, JWT, Session-based auth)",
  "Testing (Jest, React Testing Library, Cypress)",
  "Performance Optimization",
  "Accessibility (a11y, WCAG guidelines)",
  "Progressive Web Apps (PWAs)",
  "Browser Developer Tools",
  "WebSockets & Real-Time Communication",
  "CI/CD (GitHub Actions, Netlify, Vercel)",
  "Web Security Best Practices",
  "UI/UX Design Principles",
  "Basic Knowledge of Backend (Node.js, Express, Databases)",
  "WebAssembly & Web Workers",
  "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
  "Cloud & Deployment (AWS, Firebase, Vercel, Netlify)",
];

export const Skills = () => {
  const [skills, setSkills] = React.useState<string[]>(frontendSkills);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setSkills((prevSkills) => {
        const oldIndex = prevSkills.findIndex((skill) => skill === active.id);
        const newIndex = prevSkills.findIndex((skill) => skill === over.id);
        return arrayMove(prevSkills, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="">
      <div>
        <UI.Heading text="Skills" />
        <p className="text-neutral-600 mt-1">
          You&apos;re on a roll. Let&apos;s find relevant skills for the job
          your applying for. Listing 6-10 skills is best.
        </p>
        <div className="mt-[2rem] grid grid-cols-2 items-start gap-x-8 ">
          <div className="max-w-[35rem] w-full ">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              modifiers={[restrictToParentElement]}
            >
              <ul className="space-y-5">
                <SortableContext
                  items={skills.map((skill) => skill)}
                  strategy={verticalListSortingStrategy}
                >
                  {skills.slice(0, 10).map((skill) => {
                    return <SortableSkill key={skill} skill={skill} />;
                  })}
                </SortableContext>
              </ul>
            </DndContext>
          </div>
          <div className="w-[25rem] border pb-3  sticky top-[5rem] rounded-lg">
            <div className="px-4 py-2">
              <UI.Input
                leftIcon={<Search />}
                defaultValue={"Frontend developer"}
                className="bg-transparent"
              />
            </div>

            <div className="mt-5 flex items-center flex-col scroll-bar gap-y-2 h-[25rem] overflow-y-auto px-4 pb-4 ">
              {frontendSkills.slice(0, 5).map((skill) => {
                return (
                  <button
                    key={skill}
                    className=" inline-flex gap-x-2 w-full rounded-lg hover:border-primary-black border  px-3 py-2 text-neutral-600 bg-white"
                  >
                    <div className="size-[1.7rem] grid place-items-center text-white bg-primary-black rounded-full">
                      <Plus size={15} />
                    </div>
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-x-5 mt-11">
          <UI.Button variant={"outline"} className="w-[18rem]">
            Back
          </UI.Button>

          <UI.Button className="w-[18rem]">Next</UI.Button>
        </div>
      </div>
    </div>
  );
};

const SortableSkill = ({ skill }: { skill: string }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: skill,
    transition: {
      duration: 300,
      easing: "ease-out",
    },
  });

  const style = {
    transform: transform ? `translateY(${transform.y}px)` : undefined,
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={cn(
        "border rounded-xl bg-white flex gap-x-7 items-center px-3 py-2",
        isDragging ? "shadow-lg z-10 relative" : ""
      )}
    >
      <button
        {...attributes}
        {...listeners}
        className={cn(
          "hover:bg-neutral-100  transition-colors duration-200 p-1 rounded",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
      >
        <GripHorizontal size={18} className="text-neutral-600" />
      </button>
      <span className="text-neutral-700 font-medium">{skill}</span>
      <UI.Button
        size="sm"
        variant={"ghost"}
        className="ms-auto text-neutral-600"
      >
        <Trash2 />
      </UI.Button>
    </li>
  );
};
