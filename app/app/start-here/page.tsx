import { UI } from "@/components/ui";
import { CgScan } from "react-icons/cg";
import { HiOutlineSparkles } from "react-icons/hi";

const StartHere = () => {
  return (
    <section className="h-screen grid place-items-center ">
      <header className="lg:px-8 px-5 py-4 w-full top-0 fixed">
        <UI.Logo />
      </header>

      <div className="lg:px-8 px-5">
        <UI.Heading className="text-center" text="How will you like to start" />
        <div className="flex max-sm:flex-wrap gap-y-3 items-center justify-center mt-8 gap-x-5">
          <div className="p-1 max-sm:w-full   bg-neutral-100 shadow rounded-md">
            <div className="bg-white cursor-default hover:bg-neutral-50 transition-colors duration-500 px-6 sm:py-6 py-3 border flex items-center gap-x-3  rounded-md">
              <div className="bg-primary-black p-1.5 rounded-lg text-neutral-200 ">
                <HiOutlineSparkles size={25} />
              </div>
              <div>
                <h3 className="text-primary-black font-semibold md:text-xl text-lg">
                  Start from Scratch
                </h3>
                <p className="text-neutral-400  sm:text-base text-sm ">
                  Our Ai helper will guild you
                </p>
              </div>
            </div>
          </div>

          <div className="p-1 max-sm:w-full  bg-neutral-100 shadow rounded-md">
            <div className="bg-white   cursor-default hover:bg-neutral-50 transition-colors duration-500 px-6 sm:py-6 py-3 border flex items-center gap-x-3 rounded-md">
              <div className="bg-primary-black p-1.5 rounded-lg text-neutral-200">
                <CgScan size={25} />
              </div>
              <div>
                <h3 className="text-primary-black font-semibold md:text-xl text-lg">
                  I already have a resume
                </h3>
                <p className="text-neutral-400  sm:text-base text-sm">
                  Upload document
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StartHere;
