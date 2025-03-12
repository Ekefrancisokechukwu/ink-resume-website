import { BriefcaseBusiness, Dot, MapPin } from "lucide-react";
import { Card } from "../Card";
import { HeadingContainer } from "../HeadingContainer";
import { IoCalendarOutline } from "react-icons/io5";
import { Overlay } from "../Overlay";
import { UI } from "@/components/ui";
import { Heading } from "./Heading";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const ExperienceSection = () => {
  const color = useSelector(
    (state: RootState) => state.customization.customize.color
  );

  return (
    <Card className="relative hover:z-10 group/card">
      <HeadingContainer heading="Work Experience" icon={BriefcaseBusiness} />
      <section className="py-4 px-4">
        <div>
          {Array(5)
            .fill(0)
            .map((exp, i) => (
              <article key={i} className="flex items-stretch gap-x-3">
                <div className="flex flex-col items-center">
                  <div className="size-[1rem] p-[2px]  grid place-items-center shrink-0 border rounded-full relative  ">
                    <span
                      style={color ? { background: color } : {}}
                      className="w-full h-full block rounded-full bg-neutral-500"
                    ></span>
                  </div>
                  <div className="flex-grow bg-border w-[1px] " />
                </div>

                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <Heading>Frontend Developer</Heading>
                      <p className="flex items-center mt-1 text-neutral-500 text-sm font-medium">
                        <span>Hive</span>
                        <span>
                          <Dot size={15} />
                        </span>
                        <span>Full-Time</span>
                      </p>
                      <p className="flex items-center mt-2 gap-x-1 text-neutral-500 text-sm">
                        <MapPin size={12} />
                        <span>Phoenix, Arizona, USA</span>
                      </p>
                    </div>
                    <div className="border py-1 px-2 rounded-md text-neutral-600 text-sm flex items-center gap-x-2">
                      <IoCalendarOutline size={12} />
                      <span>Jan 2023 - feb 2025</span>
                    </div>
                  </div>
                  <div className="mt-3 pb-5 ">
                    <UI.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores aut autem pariatur blanditiis. Voluptates
                      molestias repudiandae illum adipisci libero, unde corrupti
                      inventore culpa aut temporibus in, pariatur totam
                      architecto consequuntur?
                    </UI.Text>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>
      <Overlay sortable={true} />
    </Card>
  );
};
