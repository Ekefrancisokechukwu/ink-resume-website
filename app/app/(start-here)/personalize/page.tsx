import { UI } from "@/components/ui";
import { StepperNav } from "./StepperNav";
import { CircleUser } from "lucide-react";

const PersonalizePage = () => {
  return (
    <div className="bg-neutral-50 min-h-screen grid grid-cols-[auto_1fr_auto] md:pl-0 px-5">
      <StepperNav />
      <div className="grid place-items-center">
        <div>
          <UI.Heading text="Personal Information" />
          <Photo />
          <div className="mt-7">
            <div className="grid grid-cols-2 ">
              <div className="flex flex-col gap-y-1">
                <UI.Label htmlFor="fullname" className="text-primary-black">
                  Full Name
                </UI.Label>
                <UI.Input id="fullname" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[13rem] md:block hidden"></div>
    </div>
  );
};

const Photo = () => {
  return (
    <div className="mt-20 flex items-center gap-x-5">
      <div className="border-dashed border-2 rounded-md grid place-items-center bg-white size-[6rem]">
        <CircleUser size={40} className="text-neutral-600" />
      </div>
      <div>
        <p className="text-neutral-600">
          Add a Photo to Your Resume (Optional)
        </p>
        <UI.Button size={"sm"} variant={"outline"} className="mt-4">
          Add Photo
        </UI.Button>
      </div>
    </div>
  );
};

export default PersonalizePage;
