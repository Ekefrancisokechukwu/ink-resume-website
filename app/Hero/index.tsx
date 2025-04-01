import { UI } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <UI.Wrapper className="md:py-[6rem] py-[3rem] gap-x-9 gap-y-5 overflow-hidden lg:pr-0 grid lg:grid-cols-2  place-items-center rounded-xl  bg-white mt-5 shadow">
      <motion.div
        transition={{ duration: 0.3, stiffness: 50, ease: "easeOut" }}
        initial={{ y: 50, filter: "blur(2px)", opacity: 0 }}
        animate={{ y: 0, filter: "none", opacity: 1 }}
        className="flex-1 mx-auto "
      >
        <div className="">
          <div className="mb-5 text-xs  shadow  inline-block py-1 px-3 text-neutral-600 font-medium bg-neutral-100 border rounded-full">
            Ink Resume V1.00
          </div>
        </div>

        <h1 className="md:text-6xl text-3xl  font-bold capitalize text-primary-black">
          Build your perfect Resume
        </h1>
        <p className="text-lg  font-medium md:mt-8 mt-3 text-neutral-400 ">
          Create a new standout CV in minutes or choose any template and simply
          import all the information from your existing CV.
        </p>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 md:mt-10 mt-5">
          <UI.Button asChild className="sm:w-[14rem] w-full">
            <Link href={"/template"}>Get Started</Link>
          </UI.Button>
          <UI.Button variant={"outline"} className="sm:w-[14rem] w-full">
            Demo
          </UI.Button>
        </div>
      </motion.div>
      <motion.div
        transition={{ duration: 0.3, stiffness: 50, ease: "easeOut" }}
        initial={{ scale: 0.5, filter: "blur(2px)" }}
        animate={{ scale: 1, filter: "none" }}
        className="border lg:w-[37rem] md:w-[40rem] w-full origin-bottom-right bg-neutral-100 p-1 rounded-l-xl"
      >
        <Image
          alt="dashboard"
          src={"/builder.png"}
          width={700}
          height={600}
          className="rounded-l-xl border"
        />
      </motion.div>
    </UI.Wrapper>
  );
};
