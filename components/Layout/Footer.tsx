import Link from "next/link";
import { UI } from "../ui";
import { MoveRight } from "lucide-react";

export const Footer = () => {
  return (
    <section className="bg-white h-[calc(100lvh_+_500px)] ">
      <div className="min-h-screen sticky top-0 inset-0 overflow-hidden flex flex-col justify-end">
        <UI.Wrapper className="flex w-full  items-center justify-between pt-[5rem] pb-[4rem]">
          <div>
            <div>
              <Link href={""} className="text-6xl group">
                <span className="group-hover:translate-x-4 transition-all duration-500   flex items-center gap-x-3 font-semibold text-blue-600">
                  Start for free <MoveRight size={70} />
                </span>
                <span className="block"> account needed.</span>
              </Link>
            </div>
          </div>
          <div></div>
        </UI.Wrapper>
        <footer className="max-w-[85rem] gap-x-14 gap-y-7 mx-auto bg-neutral-100 rounded-t-xl px-[4rem] py-[2.5rem] flex lg:flex-row flex-col items-center justify-between">
          <p className="flex-1">
            Page Buddy is built on the traditional land of the Wurundjeri and
            Boon Wurrung peoples of the Kulin nation. We pay our respect to
            Elders past, present and emerging. Sovereignty has never been ceded.
            It always was and always will be Aboriginal land.
          </p>
          <div className="flex-shrink-0">
            <p className="flex items-center gap-x-3">
              <span>Made with ❤️</span>

              <Link href={""} className="font-semibold">
                by Francis
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
