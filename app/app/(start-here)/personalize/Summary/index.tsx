import { UI } from "@/components/ui";
import { Search } from "lucide-react";

export const Summary = () => {
  return (
    <div>
      <UI.Heading text="Add Experince" />
      <section className="mt-[2rem] grid grid-cols-2 items-start gap-x-8">
        <div className="max-w-[35rem] bg-white rounded-lg border">
          <div className="border-b py-2 px-7 flex justify-end">
            <UI.Button size={"sm"} className="inline-flex items-center">
              Enhance with ai
            </UI.Button>
          </div>
          <textarea className=" w-full p-2 resize-none h-[23rem] outline-none text-primary-black"></textarea>
        </div>
        <div className="w-[25rem] border pb-3  sticky top-[5rem] rounded-lg">
          <div className="px-4 py-2">
            <UI.Input
              leftIcon={<Search />}
              defaultValue={"Frontend developer"}
              className="bg-transparent"
            />
          </div>

          <div className="mt-5 flex items-center flex-col scroll-bar gap-y-2 h-[17rem] overflow-y-auto px-4 pb-4 "></div>
        </div>
        <div className="flex items-center justify-start gap-x-5 mt-11">
          <UI.Button variant={"outline"} className="w-[18rem]">
            Back
          </UI.Button>
          <UI.Button className="w-[18rem]">Next</UI.Button>
          <UI.Button variant={"link"} className="w-[18rem]">
            Skip
          </UI.Button>
        </div>
      </section>
    </div>
  );
};
