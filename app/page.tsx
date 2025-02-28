"use client";

import { Layout } from "@/components/Layout";
import { UI } from "@/components/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Layout.Header />
      <UI.Wrapper className="h-[80vh] grid place-items-center rounded-xl border bg-white mt-5 shadow">
        <div className="w-[40rem] mx-auto text-center">
          <h1 className="md:text-6xl font-bold capitalize text-primary-black">
            Build your perfect Resume
          </h1>
          <p className="text-lg font-medium mt-8 text-neutral-400 ">
            Create a new standout CV in minutes or choose any template and
            simply import all the information from your existing CV.
          </p>

          <div className="flex items-center gap-x-7 mt-10 justify-center">
            <UI.Button asChild>
              <Link
                href={"/template"}
                // className="px-6 py-3 text-sm  inline-block rounded-md  text-white font-medium bg-stone-900"
              >
                Get Started
              </Link>
            </UI.Button>
            <UI.Button variant={"outline"}>Demo</UI.Button>
          </div>
        </div>
      </UI.Wrapper>
    </div>
  );
}
