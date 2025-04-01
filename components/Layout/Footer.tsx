import Link from "next/link";
import { UI } from "../ui";
import { Github, MoveRight } from "lucide-react";

export const Footer = () => {
  return (
    <section className="bg-white h-[calc(100lvh_+_500px)] ">
      <div className="min-h-screen sticky top-0 inset-0 overflow-hidden flex flex-col justify-end">
        <UI.Wrapper className="flex w-full  items-center justify-between pt-[5rem] pb-[4rem]">
          <div>
            <div>
              <Link href={""} className="sm:text-6xl text-2xl group">
                <span className="group-hover:translate-x-4 transition-all duration-500   flex items-center gap-x-3 font-semibold text-blue-600">
                  Start for free{" "}
                  <MoveRight className="sm:size-[70] size-[50]" />
                </span>
                <span className="block"> account needed.</span>
              </Link>
            </div>
          </div>
          <div></div>
        </UI.Wrapper>
        <footer className="max-w-[85rem] gap-x-14 gap-y-7 mx-auto bg-neutral-100 rounded-t-xl px-[4rem] py-[2.5rem] flex lg:flex-row flex-col items-center justify-between">
          <p className="flex-1">
            Ink Resume Builder is crafted with creativity and innovation,
            helping you design resumes that stand out. We are committed to
            inclusivity, respect, and empowerment for all individuals in their
            career journeys
          </p>
          <div className="flex-shrink-0">
            <p className="flex items-center gap-x-3">
              <span>Made</span>

              <Link
                target="_blank"
                href={"https://ekefrancisokechukwu.vercel.app/"}
                className="font-semibold  hover:underline"
              >
                by Eke.dev
              </Link>
              <Link
                target="_blank"
                href={"https://github.com/Ekefrancisokechukwu"}
                className="font-semibold hover:scale-110 "
              >
                <Github size={18} />
              </Link>
            </p>
            <p> ©2024 </p>
            Privacy • Terms
          </div>
        </footer>
      </div>
    </section>
  );
};
