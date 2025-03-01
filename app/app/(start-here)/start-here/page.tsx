import { UI } from "@/components/ui";
import { CgScan } from "react-icons/cg";
import { HiOutlineSparkles } from "react-icons/hi";
import React from "react";
import Link from "next/link";

const StartHere = () => {
  return (
    <div>
      <UI.Heading className="text-center" text="How will you like to start" />
      <div className="flex max-sm:flex-wrap gap-y-3 items-center justify-center mt-8 gap-x-5">
        <Link
          href={"/app/personalize"}
          className="p-1 group max-sm:w-full   bg-neutral-100 shadow rounded-md"
        >
          <div className="bg-white cursor-default hover:bg-neutral-50 transition-colors duration-500 px-6 sm:py-6 py-3 border flex items-center gap-x-3  rounded-md">
            <div className="bg-primary-black p-1.5 rounded-lg text-neutral-200 ">
              <span className="group-hover:scale-110 grid place-items-center transition-transform duration-300">
                <HiOutlineSparkles size={25} />
              </span>
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
        </Link>

        <Link
          href={"/app/start-here/upload-resume"}
          className=" p-1 group max-sm:w-full bg-neutral-100 shadow rounded-md"
        >
          <div className="bg-white   cursor-default hover:bg-neutral-50 transition-colors duration-500 px-6 sm:py-6 py-3 border flex items-center gap-x-3 rounded-md">
            <div className="bg-primary-black p-1.5 rounded-lg text-neutral-200">
              <span className="group-hover:rotate-90 grid place-items-center transition-transform duration-300">
                <CgScan size={25} />
              </span>
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
        </Link>
      </div>
    </div>
  );
};
export default StartHere;
